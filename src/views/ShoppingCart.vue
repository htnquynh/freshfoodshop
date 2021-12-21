<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="shop-page">
        
        <div v-show="noItems == 0" class="checkout-wrapper">
          <div class="w-full flex flex-col items-center p-8">
            <img 
              src="../assets/image/empty.png"
              class="w-full max-w-xs h-auto mx-auto">
            <p class="text-xl md:text-2xl font-medium py-8">Nothing in Cart</p>
            
            <router-link to='/shop'>
                <button class="px-8 py-3 text-base uppercase text-white font-bold bg-gold-500"
                style="box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;">
                  Buy now
                </button>
            </router-link>
          </div>
        </div>

        <div v-show="noItems != 0" class="cart-wrapper">
          <div class="list-product-wrapper">
            <div class="list-product" >
              <ShoppingCartItem
                v-for="item in cart.cartItems" :key="item.id"  :item="item"/>
            </div>
          </div>

          <div class="summary-cart">
            <h2>Summary Cart.</h2>

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

            <div class="cart-coupon">
              <div class="input-text">
                <label for="">Coupon Code</label>
                <input type="text">
              </div>
            </div>

            <a @click="checkout()" class="btn-checkout">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <g>
                  <rect fill="none" height="24" width="24" />
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <path d="M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2 S18.1,18,17,18z M19,16c0-0.55-0.45-1-1-1H7l1.1-2h7.45c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14c0.25-0.48,0.08-1.08-0.4-1.34 c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.54,2.57C4.38,2.22,4.02,2,3.64,2H2C1.45,2,1,2.45,1,3s0.45,1,1,1h1l3.6,7.59 l-1.35,2.44C4.52,15.37,5.48,17,7,17h11C18.55,17,19,16.55,19,16z M11.29,2.71c0.39-0.39,1.02-0.39,1.41,0l2.59,2.59 c0.39,0.39,0.39,1.02,0,1.41l-2.59,2.59c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L12.17,7L9,7C8.45,7,8,6.55,8,6 c0-0.55,0.45-1,1-1l3.17,0l-0.88-0.88C10.9,3.73,10.9,3.1,11.29,2.71z" />
                </g>
              </svg>
              <span>Checkout</span>
            </a>
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

import ShoppingCartItem from '../components/ShoppingCartItem.vue';
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
    ShoppingCartItem,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["cart", "totalPrice", "noItems"]),
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
    this.getUserCart();
  },
  methods: {
    ...mapActions(["getUserCart"]),
    checkout() {
      this.$router.push({ name: "Checkout" });
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

.cart-wrapper {
  @apply w-full;
  @apply flex flex-col gap-4 md:flex-row items-start md:gap-4;
  @apply relative;
}

.list-product-wrapper {
  @apply w-full;
}

.list-product-wrapper .list-product {
  @apply w-full mx-auto;
  @apply flex flex-col items-center gap-4;
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
  @apply border-b-2;
  border-color: #F27C4D;
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

.cart-coupon {
  @apply py-2;
}

.cart-total-cost {
  @apply text-base;
  @apply pt-1;
}

.cart-total-cost p, 
.cart-total-cost .cost-value {
  @apply font-extrabold;
}

a.btn-checkout {
  @apply mt-4;
  @apply w-full;
  @apply flex flex-row justify-center items-center gap-2;
  @apply p-2;
  @apply bg-gold-500 text-white;
  @apply text-base font-semibold;
}

</style>