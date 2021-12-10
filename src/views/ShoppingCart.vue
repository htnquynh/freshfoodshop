<template>
  <div class="shop-page">
    <div class="page-title">
      <h2>Shopping Cart.</h2>
      <hr>
    </div>

    <div class="shop-wrapper">
      <div class="list-product-wrapper">
        <div class="list-product" >
          <CartItem
            v-for="item in cartItems" :key="item.id"  :item="item"/>
        </div>
      </div>
    </div>

    <hr class="shopping-break-line">

    <div class="cart-total-checkout">
      <div class="cart-total">
        <p>Total</p>
        <p class="cart-total-price">{{ totalPrice | toVND }}</p>
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
</template>

<script>
import CartItem from '../components/CartItem.vue';
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["cartItems", "totalPrice"]),
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
    this.getCartItems();
  },
  methods: {
    ...mapActions(["getCartItems"]),
    checkout() {
      this.$router.push({ name: "Checkout" });
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
  @apply border-t md:border-t border-secondary;
}

.shop-wrapper {
  @apply w-full;
  @apply flex flex-col gap-4 md:flex-row md:gap-0;
  @apply relative;
}

.list-product-wrapper {
  @apply w-full;
}

.list-product-wrapper .list-product {
  @apply w-full max-w-4xl mx-auto;
  @apply flex flex-col items-center gap-4;
}

hr.shopping-break-line {
  @apply w-full;
  @apply my-4;
  @apply border-t border-secondary;
}

.cart-total-checkout {
  @apply w-full max-w-4xl;
  @apply flex flex-row justify-between items-center;
}

.cart-total {
  @apply w-full;
  @apply flex flex-col sm:gap-2;
  @apply text-lg md:text-xl font-bold;
}

.cart-total-price {
  @apply text-xl md:text-2xl font-black text-gold-500;
} 

a.btn-checkout {
  @apply w-full md:w-52;
  @apply flex flex-row justify-center items-center gap-2;
  @apply p-2;
  @apply bg-gold-500 text-white;
  @apply text-base sm:text-lg font-semibold;
}

</style>