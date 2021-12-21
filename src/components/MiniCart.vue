<template>
  <div class="cart" :class="{'not-open': !visibleMiniCart}" >
    <div class="cart-overlay" @click="setVisibleMiniCart()"></div>
    <div class="cart-panel">
      <div class="cart-header">
        <button class="btn-close-panel" @click="setVisibleMiniCart()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.2928 12.8229C20.6922 12.7679 21 12.4205 21 12.0001C21 11.5415 20.6337 11.1698 20.1818 11.1698L5.80007 11.1698L10.9953 5.91866L11.0747 5.8257C11.313 5.50114 11.2876 5.0398 10.9977 4.74441C10.6788 4.41948 10.1608 4.41839 9.84062 4.74198L3.25226 11.4004C3.21304 11.4386 3.17756 11.4806 3.14642 11.526C2.92336 11.8502 2.95478 12.3001 3.24067 12.5889L9.84067 19.2581L9.9326 19.3383C10.2534 19.5787 10.7079 19.551 10.9977 19.2555C11.3166 18.9306 11.3155 18.4049 10.9953 18.0813L5.79877 12.8304L20.1818 12.8304L20.2928 12.8229Z" fill="currentColor"/>
          </svg>
        </button>

        <h2 class="content-title">
          Shopping Cart
        </h2>

        <router-link to="/shopping-cart">
        <a class="hover:text-gold-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2.5H15.5C18.8137 2.5 21.5 5.18629 21.5 8.5V15.5C21.5 18.8137 18.8137 21.5 15.5 21.5H8.5C5.18629 21.5 2.5 18.8137 2.5 15.5V8.5C2.5 5.18629 5.18629 2.5 8.5 2.5ZM15.5 20C17.983 19.9945 19.9945 17.983 20 15.5V8.5C19.9945 6.017 17.983 4.0055 15.5 4H8.5C6.017 4.0055 4.0055 6.017 4 8.5V15.5C4.0055 17.983 6.017 19.9945 8.5 20H15.5Z" fill="currentColor"/>
          <path d="M15.1798 7C14.7679 7.00539 14.4352 7.33804 14.4298 7.75C14.4194 8.38126 14.1565 8.98203 13.6998 9.41801C13.2432 9.85398 12.6309 10.0888 11.9998 10.07C10.7 10.1093 9.61331 9.0897 9.56982 7.79C9.56982 7.37579 9.23404 7.04 8.81982 7.04C8.40561 7.04 8.06982 7.37579 8.06982 7.79C8.11358 9.91804 9.8717 11.609 11.9998 11.57C14.128 11.609 15.8861 9.91804 15.9298 7.79C15.9408 7.58425 15.8667 7.38305 15.7248 7.23362C15.583 7.08419 15.3859 6.99971 15.1798 7Z" fill="currentColor"/>
        </svg>
        </a>
        </router-link>
      </div>

      <div v-show="noItems == 0" class="cart-main">
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

      <div v-show="noItems != 0" class="cart-main">
        <div class="cart-list-items">
          <MiniCartItem
          v-for="item in cart.cartItems" :key="item.id"  :item="item"/>
        </div>
      </div>

      <div class="cart-footer">
        <div class="mini-cart-action">
          <div class="cart-price">
            <p>Subtotal</p>
            <span class="cart-price-value">
              {{ totalPrice | toVND }}
            </span>
          </div>
          <a class="btn-checkout" @click="goCheckout()">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              enable-background="new 0 0 24 24" 
              height="24px" 
              viewBox="0 0 24 24" 
              width="24px" 
              fill="currentColor">
              <g>
                <rect fill="none" height="24" width="24" />
                <rect fill="none" height="24" width="24" />
              </g>
              <g>
                <path d="M7,18c-1.1,0-1.99,0.9-1.99,2S5.9,22,7,22s2-0.9,2-2S8.1,18,7,18z M17,18c-1.1,0-1.99,0.9-1.99,2s0.89,2,1.99,2s2-0.9,2-2 S18.1,18,17,18z M19,16c0-0.55-0.45-1-1-1H7l1.1-2h7.45c0.75,0,1.41-0.41,1.75-1.03l3.24-6.14c0.25-0.48,0.08-1.08-0.4-1.34 c-0.49-0.27-1.1-0.08-1.36,0.41L15.55,11H8.53L4.54,2.57C4.38,2.22,4.02,2,3.64,2H2C1.45,2,1,2.45,1,3s0.45,1,1,1h1l3.6,7.59 l-1.35,2.44C4.52,15.37,5.48,17,7,17h11C18.55,17,19,16.55,19,16z M11.29,2.71c0.39-0.39,1.02-0.39,1.41,0l2.59,2.59 c0.39,0.39,0.39,1.02,0,1.41l-2.59,2.59c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L12.17,7L9,7C8.45,7,8,6.55,8,6 c0-0.55,0.45-1,1-1l3.17,0l-0.88-0.88C10.9,3.73,10.9,3.1,11.29,2.71z" />
              </g>
            </svg>
            Check out
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MiniCartItem from './MiniCartItem.vue';

import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    // open: Boolean,
  },
  components: {
    MiniCartItem,
  },
  data() {
    return {
      open: true,
    }
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
  created() {
    // if(this.is_login) {
    //   this.getUserCart();
    // }
  },
  mounted() {
    if(this.is_login) {
      this.getUserCart();
    }
  },
  computed: {
    ...mapGetters(["is_login", "visibleMiniCart", "cart", "totalPrice", "noItems"]),
  },
  methods: {
    ...mapActions(["getUserCart", "removeCartItem", "setVisibleMiniCart", "getSelectedProduct"]),
    close() {
      this.$emit('close', false);
      console.log(this.open);
    },
    toggleMiniCart() {
      this.setVisibleMiniCart();
    },
    goCheckout() {
      if (this.cart.cartItems.length != 0) {
        this.setVisibleMiniCart();
        this.$router.push({ name: "Checkout" });
      } else {
        this.$swal.fire(
          'Uh oh!',
          'Please add product to your cart to checkout!',
          'error'
        );
        return;
      }
    },
    goDetail(product_id) {
      this.getSelectedProduct(product_id);
      this.setVisibleMiniCart();
      this.$router.push({
        name: "Product",
      });
    },
  }
}
</script>

<style lang="postcss" scoped>

.not-open {
  visibility: hidden !important;
  @apply duration-500 sm:duration-700;
}

.not-open .cart-overlay {
  @apply opacity-0 ease-in-out duration-500;
}

.not-open .cart-panel {
  @apply transform translate-x-full transition ease-in-out duration-500 sm:duration-700;
}

.cart {
  @apply absolute inset-0;
  @apply overflow-hidden;
  @apply z-50;
  visibility: visible;
}

.cart-overlay {
  @apply absolute inset-0 bg-gray-500 bg-opacity-75;
  @apply opacity-100 ease-in-out duration-500;
  @apply transition-opacity;
}

.cart-panel {
  @apply fixed inset-y-0 right-0 h-screen;
  @apply w-screen max-w-sm;
  @apply flex flex-col shadow-xl;
  /* @apply bg-green-50; */
  @apply bg-dominant;

  /* @apply bg-peach-100; */

  @apply overflow-auto;

  @apply transform translate-x-0 transition ease-in-out duration-500 sm:duration-700;
}

.cart-header {
  @apply py-3 px-6;
  /* @apply border-b; */

  /* @apply box-border border-b-4 border-peach-500; */

  @apply bg-white;

  /* @apply bg-secondary text-white; */

  @apply flex-none flex flex-row justify-between items-center;
  /* @apply text-lg font-bold uppercase antialiased; */

  @apply font-bold antialiased;

  box-shadow: rgba(57, 42, 35, 0.05) 0px 14px 14px -14px;
  z-index: 10;
}

.btn-close-panel {
  @apply rounded-lg;
  @apply hover:text-gold-500 focus:outline-none;
  @apply p-1;
  @apply hover:bg-gold-100;
}

.btn-close-panel svg{
  @apply w-6 h-6;
  @apply transform scale-90;
}

.cart-main {
  /* @apply p-4; */
  @apply h-full w-full;
  @apply overflow-hidden;
  /* @apply bg-white; */
}

.cart-list-items {
  @apply h-full w-full;
  @apply py-4 px-4;
  /* @apply divide-y divide-dashed divide-green-500; */
  /* @apply divide-y divide-solid; */
  @apply overflow-y-auto;
  /* @apply bg-green-50; */
  /* @apply flex-none; */

  @apply flex flex-col gap-3;

  /* scrollbar-color: theme('colors.green.600') #F5F5F5; */
  scrollbar-color: theme('colors.black') #F5F5F5;
  scrollbar-width: thin;

  transition: 0.3s;
}

.cart-list-items::-webkit-scrollbar {
	@apply hidden;
}

/* Scroll Bar for List Items */
/* .cart-list-items::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #F5F5F5;
  @apply rounded-full;
}
.cart-list-items::-webkit-scrollbar {
	width: 6px;
  background-color: theme('colors.black');
  @apply rounded-full;
}
.cart-list-items::-webkit-scrollbar-thumb {
  background-color: theme('colors.black');
  @apply rounded-full;
} */
/* ----------- End Scroll Bar -----------*/

/* Footer */
.cart-footer {
  @apply flex-none px-4 py-6;
  @apply bg-white;
  @apply flex flex-col gap-4;

  box-shadow: rgba(57, 42, 35, 0.1) 0px -14px 14px -12px;
  z-index: 10;
}

.cart-price {
  @apply flex flex-col justify-end items-start gap-0;
  @apply font-bold;
}

.cart-price-value {
  @apply text-xl font-extrabold;
  @apply text-right;

  @apply text-gold-500;
  /* @apply w-full; */
  @apply overflow-ellipsis overflow-hidden;
  @apply whitespace-normal break-words;
}

.mini-cart-action {
  @apply w-full;
  @apply grid grid-cols-2 gap-4 place-items-center;
}

/* .btn-check-out {
  @apply w-full py-2;
  @apply bg-black text-white;
  @apply font-bold capitalize;
} */


a.btn-checkout {
  @apply w-full;
  @apply flex flex-row justify-center items-center gap-2;
  @apply p-2;
  @apply bg-secondary text-white;
  @apply text-base font-semibold;

  @apply box-border border-l-8 border-gold-500;

  
}

.btn-view-detail {
  @apply flex flex-row justify-center gap-2 items-center;
  @apply w-full;
  @apply py-2;
  /* @apply border-2 border-black text-black; */
  /* text-black */
  @apply font-medium capitalize;

  @apply underline italic;

  text-underline-offset: 2px;
  text-decoration-thickness: 3px;
  text-decoration-color: rgba(253, 139, 124, 1);
}


.btn-view-detail svg {
  @apply w-4 h-4;
}
/* ----------- Footer -------------------*/
</style>