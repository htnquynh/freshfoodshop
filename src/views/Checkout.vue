<template>
  <div class="shop-page">
    <div class="page-title">
      <h2>Checkout.</h2>
      <hr>
    </div>

    <div class="shop-wrapper">
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

      <div class="cart-summary">
        <h2>Cart Summary.</h2>
        <div class="list-product-wrapper">
          <div class="order-item" v-for="item in cartItems" :key="item._id">
            <img class="order-item-image" :src="`/products/${item.image}`">
            <div class="order-item-spec">
              <div class="product-spec">
                <p class="product-category">{{ item.category }}</p>
                <p class="product-name">{{ item.name }}</p>
                <div class="product-price-unit">
                  <p class="product-price">{{ item.price | toVND }}</p>
                  <p class="product-unit">/ 1 kg</p>
                  <p class="product-qty">x {{ item.quantity }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <hr class="cart-summary-break-line">
        <p class="cart-summary-total">Total <span class="price">127.000đ</span></p> -->
        <div class="cart-total">
          <p>Total</p>
          <p class="cart-total-price">{{totalPrice | toVND}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  components: {
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
    ...mapGetters(["cartItems", "userLogin", "totalPrice"]),
  },
  filters: {
    toVND: function(value) {
      if (typeof value !== "number") {
        value = parseInt(value);
        // return value;
      }
      var formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
  },
  watch: {
  },
  created() {
    this.getOrderInfo();
  },
  methods: {
    ...mapActions(["getCartItems"]),
    getOrderInfo() {
      this.full_name = this.userLogin.full_name;
      this.address = this.userLogin.address;
      this.phone = this.userLogin.phone;
      this.getCartItems();
    },
    async placeOrder() {
      let token = JSON.parse(sessionStorage.getItem("user_login"));
      let config = {
        headers: { Authorization: "bearer " + token },
      };

      let orderItems = [];
      for (let item of this.cartItems) {
        orderItems.push({
          product: item._id,
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

      await axios
        .post("http://localhost:5000/api/addorder", order, config)
        .then((res) => {
          console.log(res);
          axios
            .get("http://localhost:5000/api/clearCart", config)
            .then((res) => {
              console.log(res);
              this.$swal("Congratulations!", "Checkout Successfully!", "success");
              this.$router.push({ name: "Shop" });
            })
            .catch((err) => {
              console.log(err);
              
            });
        })
        .catch((err) => {
          let msg = err.response.data.message;
          this.$swal("Oh no!", msg, "error");
          console.log(err);
        });
    },
  },
};
</script>

<style lang="postcss" scoped>

.shop-page {
  @apply max-w-4xl mx-auto;
  @apply px-4 pb-16 md:pb-24;
  @apply flex flex-col items-start md:items-center gap-2 md:gap-6;
}

.page-title {
  @apply py-4 md:py-8;
  @apply flex flex-col md:justify-center gap-2 md:gap-4;
}

.page-title h2 {
  @apply text-xl md:text-4xl font-black;
}

.page-title hr {
  @apply w-full max-w-3xl;
  @apply border-t border-secondary;
}

.shop-wrapper {
  @apply w-full;
  @apply flex flex-col gap-8 sm:flex-row sm:gap-2 md:gap-0;
  /* @apply relative; */
}

.checkout-info {
  @apply w-full sm:w-1/2;
  @apply md:px-4 lg:px-8;
  @apply flex flex-col items-center gap-8;
}

.checkout-basic {
  @apply w-min;
  @apply flex flex-col gap-2
}

.checkout-basic .input-text {
  /* @apply w-full md:w-72; */
}

div.payment-selection {
  /* @apply border-t border-secondary; */
  @apply w-min;
  @apply flex flex-col;
  /* @apply relative; */
}

.payment-selection .payment-title {
  @apply pb-4 pt-2;
  @apply text-lg font-semibold uppercase;
}

.checkout-action {
  @apply w-min;
}

a.btn-checkout {
  @apply w-72;
  @apply flex flex-row justify-center items-center gap-2;
  @apply p-2;
  @apply bg-gold-500 text-white;
  @apply text-base sm:text-lg font-semibold;

  @apply rounded-xl;
}

.cart-summary {
  @apply w-full sm:w-1/2 max-w-sm mx-auto;
  @apply px-4 lg:px-8 py-2 lg:py-4;
  @apply border border-secondary;

  @apply flex flex-col;
}

.cart-summary h2 {
  @apply w-max;
  @apply p-2;
  @apply text-lg font-bold;
  @apply border-b border-secondary;
}

.list-product-wrapper {
  @apply py-2 md:py-4;
  @apply w-full;
}

.list-product-wrapper .list-product {
  @apply w-full max-w-4xl mx-auto;
  @apply flex flex-col items-center gap-4;
}

.cart-total {
  @apply w-full;
  @apply border-t border-secondary;
  @apply py-4;
  @apply flex flex-row justify-end items-baseline gap-1 sm:gap-2;
  @apply text-base md:text-lg font-medium;
}

.cart-total-price {
  @apply text-lg md:text-xl lg:text-2xl font-black text-gold-500;
}

.order-item {
  @apply w-full;
  @apply flex flex-row items-center gap-2;
  @apply p-2;
}

.order-item-image {
  @apply w-16 h-16;
  @apply object-contain;
}

.order-item-spec {
  @apply w-full;
  @apply p-1;
}

.product-spec {
  @apply w-full;
  @apply flex flex-col gap-0.5;
}

.product-category {
  @apply text-xs tracking-wide font-light;
}

.product-name {
  @apply text-sm font-bold;
}

.product-price-unit {
  @apply flex flex-row items-center gap-1;
}

.product-price {
  @apply text-sm font-black text-gold-500;
}

.product-unit {
  @apply text-xs;
}

.product-qty {
  @apply flex-grow;
  @apply text-right;
  @apply text-xs font-bold;
}

hr.cart-summary-break-line {
  @apply w-full;
  @apply my-4;
  @apply border-t border-secondary;
}


</style>