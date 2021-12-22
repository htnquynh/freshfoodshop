<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="shop-page">  
        <div v-show="noItems == 0" class="checkout-wrapper h-max">
          <div class="w-full flex flex-col items-center p-8">
            <img 
              src="../assets/image/empty.png"
              class="w-full max-w-xs h-auto mx-auto">
            <p class="text-xl md:text-2xl font-medium py-8">Nothing to Checkout</p>
            
            <router-link to='/shop'>
                <button class="px-8 py-3 text-base uppercase text-white font-bold bg-gold-500"
                style="box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;">
                  Buy now
                </button>
            </router-link>
          </div>
        </div>
        <div v-show="noItems != 0" class="checkout-wrapper">
          <div class="checkout-info">
            <div class="checkout-basic">
              <div class="input-text">
                <label for="">Fullname</label>
                <input type="text" v-model="full_name" required>
              </div>

              <div class="input-text">
                <label for="">Address</label>
                <input type="text" v-model="address" required>
              </div>

              <div class="input-text">
                <label for="">Phone</label>
                <input type="text" v-model="phone" required>
              </div>
            </div>

            <div class="payment-selection">
              <h3 class="payment-title">Payment</h3>

              <div class="group-radio-box">
                <label class="radio-box">
                  <input v-model="check" type="radio" value="payment-on-delivery" name="payment">
                  <span class="design"></span>
                  <span class="text">Payment on delivery</span>
                </label>

                <label class="radio-box">
                  <input v-model="check" type="radio" value="payment-by-card" name="payment" disabled>
                  <span class="design"></span>
                  <span class="text">Payment by card</span>
                </label>
              </div>
            </div>
          </div>

          <div class="summary-cart">
            <h2>Summary Cart.</h2>

            <div class="order-list-item">
              <CheckoutItem
                v-for="item in cart.cartItems" :key="item._id"  :item="item"/>
            </div>

            <div class="cart-cost">
              <div class="cart-cost-item">
                <p>Subtotal</p>
                <p class="cost-value"> {{ totalPrice | toVND }} </p>
              </div>

              <div class="cart-cost-item">
                <p>Shipping Cost</p>
                <p class="cost-value"> {{ '0' | toVND }} </p>
              </div>

              <div class="cart-cost-item cart-total-cost">
                <p>Total</p>
                <p class="cost-value"> {{ totalPrice | toVND }} </p>
              </div>
            </div>

            <div class="checkout-action">
              <a @click="placeOrder" class="btn-checkout">
                <svg xmlns="http://www.w3.org/2000/svg" 
                  height="24px" 
                  width="24px"
                  viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M9 16.2l-3.5-3.5c-.39-.39-1.01-.39-1.4 0-.39.39-.39 1.01 0 1.4l4.19 4.19c.39.39 1.02.39 1.41 0L20.3 7.7c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0L9 16.2z" />
                </svg>
                <span>Place Order</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheSubscribe/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import TheSubscribe from '../components/TheSubscribe.vue';
import MiniCart from '../components/MiniCart.vue';

import CheckoutItem from '../components/CheckoutItem.vue';

import { mapGetters, mapActions } from "vuex";
import OrderAPI from "../api/OrderAPI";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
    CheckoutItem,
  },
  data() {
    return {
      check: 'payment-on-delivery',
      full_name: "",
      address: "",
      phone: "",
    };
  },
  computed: {
    ...mapGetters(["cart", "userLogin", "totalPrice", "noItems"]),
  },
  filters: {
    toVND: function(value) {
      if (typeof value !== "number") {
        value = parseInt(value);
      }
      var formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
  created() {
    this.getOrderInfo();
  },
  methods: {
    ...mapActions(["getUserCart", "clearCart", "start_load", "stop_load"]),
    getOrderInfo() {
      this.start_load();
      this.full_name = this.userLogin.full_name;
      this.address = this.userLogin.address;
      this.phone = this.userLogin.phone;
      this.getUserCart().then(() => {
        this.stop_load();
      });
    },
    hasEmpty() {
      if(this.full_name == '' 
      || this.address == ''
      || this.phone == '') {
        return true;
      }
      return false;
    },
    async placeOrder() {
      if (this.hasEmpty()) {
        this.$swal.fire(
          'Uh oh!',
          'Please complete all information.',
          'error'
        );
        return;
      }

      this.start_load();
      let orderItems = [];
      for (let item of this.cart.cartItems) {
        orderItems.push({
          product: item.product._id,
          quantity: item.quantity,
          price: item.price,
        });
      }
      let order = {
        full_name: this.full_name,
        address: this.address,
        phone: this.phone,
        total_price: this.totalPrice,
        orderItems,
      };

      let token = JSON.parse(sessionStorage.getItem("user_login"));
      let config = {
        headers: { Authorization: "bearer " + token },
      };

      console.log(order);
      await OrderAPI.create(order, config)
      .then(() => {
        this.stop_load();
        this.$swal.fire(
          'Oh great!',
          'Your order has been successfully placed.',
          'success'
        );
        this.clearCart();
        this.$router.push("/shop");
      })
      .catch((err) => {
        this.stop_load();
        console.log(err);
        this.$swal.fire(
          'Oh no!',
          'Something went wrong. Double check your work.',
          'fail'
        );
      });
    },
  },
};
</script>

<style lang="postcss" scoped>

.home {
  @apply flex flex-col;
}

.home > .header-page {
  @apply w-full;
}

.page-content {
  @apply p-4;
}

.shop-page {
  @apply w-full max-w-5xl mx-auto;
  /* @apply flex flex-col items-start;
  @apply pt-4 pb-6 md:pb-8; */
  /* @apply bg-white; */
}

.checkout-wrapper {
  @apply w-full;
  @apply flex flex-col gap-4 md:flex-row items-start md:gap-4;
}

.checkout-info {
  @apply p-4 md:p-6 lg:p-8;
  @apply w-full;
  @apply flex flex-col gap-4;

  @apply bg-white;
}

.checkout-basic {
  @apply w-full;
  @apply flex flex-col gap-4;
}

div.payment-selection {
  /* @apply border-t border-secondary; */
  @apply w-full;
  @apply flex flex-col;
  /* @apply relative; */
}

.payment-selection .payment-title {
  @apply pb-4 pt-2;
  @apply text-lg font-semibold uppercase;
}

.checkout-action {
  @apply w-full;
  @apply flex flex-row justify-end;
}

a.btn-checkout {
  @apply my-4;
  @apply w-full;
  @apply flex flex-row justify-center items-center gap-2;
  @apply px-8 py-4;
  @apply bg-gold-500 text-white;
  @apply text-base font-semibold;

  box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;
}

.summary-cart {
  @apply w-full md:max-w-xs lg:max-w-sm;
  @apply p-4 md:p-6 lg:p-8;
  height: fit-content;
  /* @apply border border-black; */
  @apply flex flex-col gap-0;
  @apply bg-white;
}

.summary-cart h2 {
  @apply text-lg font-bold;
  @apply pb-2;
  /* @apply border-b-2;
  border-color: #F27C4D; */
}

.order-list-item {
  @apply py-4;
  @apply w-full;
  @apply flex flex-col gap-4;
}

.cart-cost {
  @apply py-4;
  @apply flex flex-col gap-2;
  @apply text-base;
}

.cart-cost-item {
  @apply w-full;
  @apply flex flex-row justify-between items-center;
  /* @apply border; */
}

.cart-cost-item .cost-value {
  @apply font-semibold;
}

.cart-total-cost {
  @apply text-base;
  @apply pt-1;
}

.cart-total-cost p, 
.cart-total-cost .cost-value {
  @apply font-extrabold;
}



</style>