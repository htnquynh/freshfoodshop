<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="shop-page">

        <div v-show="wishlist_length == 0" class="cart-wrapper">
          <div class="w-full flex flex-col items-center p-8">
            <img 
              src="../assets/image/empty.png"
              class="w-full max-w-xs h-auto mx-auto">
            <p class="text-xl md:text-2xl font-medium py-8">Nothing in Wishlist</p>
            
            <router-link to='/shop'>
                <button class="px-8 py-3 text-base uppercase text-white font-bold bg-gold-500"
                style="box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;">
                  Add now
                </button>
            </router-link>
          </div>
        </div>

        <div v-show="wishlist_length != 0" class="cart-wrapper">
          <div class="list-product-wrapper">
            <div class="list-product" >
              <WishlistItem
                v-for="item in wishlist" :key="item.id"  :product="item"/>
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

import WishlistItem from '../components/WishlistItem.vue';
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
    WishlistItem,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["wishlist", "wishlist_length"]),
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
    this.start_load();
    this.getWishlist().then(() => {
      this.stop_load();
    });
  },
  methods: {
    ...mapActions(["getWishlist", "start_load", "stop_load"]),
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
  /* @apply flex flex-col items-start; */

  @apply pt-4 pb-6 md:pb-8;
  /* @apply bg-white; */
}

.page-title {
  /* @apply py-4 md:py-8;
  @apply flex flex-col md:justify-center gap-2 md:gap-4; */
}

.page-title h2 {
  @apply text-xl lg:text-2xl font-black;
}

.page-title hr {
  @apply w-full max-w-3xl;
  @apply border-t md:border-t border-secondary;
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
  @apply w-full max-w-xs;
  @apply p-4;
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
}

.cart-cost-item {
  @apply w-full;
  @apply flex flex-row justify-between items-center;
  /* @apply border; */
}

.cart-cost-item .cost-value {
  @apply text-base font-bold;
}

.cart-total-cost {
  @apply pt-2;
  /* @apply border-t border-peach-500; */
}

.cart-total-cost p, 
.cart-total-cost .cost-value {
  @apply font-black;
}

.cart-coupon {
  @apply py-2;
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