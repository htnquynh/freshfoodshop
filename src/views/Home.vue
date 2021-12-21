<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="hero">
      <video playsinline autoplay muted loop poster="../assets/image/video-placeholder.jpg">
        <source src="../assets/image/Welcome.mp4" type="video/mp4">
      </video>

      <div class="hero-msg">
        <h2>Fresh Food</h2>
        <p>Fresh every time</p>
      </div>
    </div>

    <div class="page-content">
      <div class="section-service">
        <TheService/>
      </div>
      <div class="section-featured-product">
        <div class="section-product">
          <div class="section-product-title">
            <h2 class="section-title">
              Trending Product.
            </h2>
            <router-link to="/shop">
              <a class="hover:text-gold-500">
                Show All
                <svg xmlns="http://www.w3.org/2000/svg" 
                  enable-background="new 0 0 24 24" 
                  height="24px" 
                  viewBox="0 0 24 24" 
                  width="24px" fill="currentColor">
                  <rect fill="none" height="24" width="24" />
                  <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                </svg>
              </a>
            </router-link>
          </div>
            <div class="section-list-product">
              <Product 
                class="product" 
                v-for="item in featured" 
                :key='item._id' 
                :product='item'/>
            </div>
        </div>
      </div>

      <div class="section-best-seller">

        <div class="section-product">
          <div class="section-product-title">
            <h2 class="section-title">
              Best Seller.
            </h2>
            <router-link to="/shop">
              <a class="hover:text-gold-500">
                Show All
                <svg xmlns="http://www.w3.org/2000/svg" 
                  enable-background="new 0 0 24 24" 
                  height="24px" 
                  viewBox="0 0 24 24" 
                  width="24px" fill="currentColor">
                  <rect fill="none" height="24" width="24" />
                  <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                </svg>
              </a>
            </router-link>
          </div>
          <div class="section-list-product">
            <Product 
              v-for="item in best_seller" 
              :key='item._id' 
              :product='item'/>
          </div>
        </div>

        <div class="ads-banner">
          <img src="../assets/image/Good food (3).gif">
        </div>
      </div>

      <div class="section-best-seller">

        <div class="section-product">
          <div class="section-product-title">
            <h2 class="section-title">
              New Arrival.
            </h2>
            <router-link to="/shop">
              <a class="hover:text-gold-500">
                Show All
                <svg xmlns="http://www.w3.org/2000/svg" 
                  enable-background="new 0 0 24 24" 
                  height="24px" 
                  viewBox="0 0 24 24" 
                  width="24px" fill="currentColor">
                  <rect fill="none" height="24" width="24" />
                  <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                </svg>
              </a>
            </router-link>
          </div>
            <div class="section-list-product">
              <Product v-for="item in new_arrival" :key='item._id' :product='item'/>
            </div>
        </div>

        <div class="ads-banner">
          <img src="../assets/image/Good food (5).gif">
        </div>
      </div>

      <div class="section-recommend-menu">
        <div class="section-product">
          <div class="section-product-title">
            <h2 class="section-title">
              Recommend menu.
            </h2>
            <router-link to="/shop">
              <a class="hover:text-gold-500">
                Show All
                <svg xmlns="http://www.w3.org/2000/svg" 
                  enable-background="new 0 0 24 24" 
                  height="24px" 
                  viewBox="0 0 24 24" 
                  width="24px" fill="currentColor">
                  <rect fill="none" height="24" width="24" />
                  <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                </svg>
              </a>
            </router-link>
          </div>
          <div class="section-list-product">
            <Group v-for="item in groups.slice(0, 3)" :key='item._id' :group='item'/>
          </div>
        </div>
      </div>
    </div>

    <div class="banner-full">
      <img src="../assets/image/banner-13.png">
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

import Product from '../components/Product.vue'
import Group from '../components/Group.vue'
import TheService from '../components/TheService.vue'

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    TheService,
    MiniCart,
    Product,
    Group,
  },
  data() {
    return {
      featured: [],
      best_seller: [],
      new_arrival: [],
    }
  },
  async created() {
    this.getProducts();
    this.getGroups();

    this.featured = this.products.slice(0, 8);
    this.best_seller = this.sortProductBySold(this.products).slice(0, 2);
    this.new_arrival = this.featured.slice(0, 2);
  },
  computed: {
    ...mapGetters(["products", "groups"]),
  },
  methods: {
    ...mapActions(["getProducts", "getGroups"]),
    sortProductBySold(list) {
      return list.sort(function(a,b) {
        return b.quantity_sold - a.quantity_sold;
      });
    },
    sortProductByDate(list) {
      return list.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    }
  }
}
</script>

<style lang="postcss" scoped>
.home {
  @apply flex flex-col;
  /* @apply p-4 sm:p-6 md:p-8; */
  /* @apply p-2 md:p-4; */

  /* @apply relative; */
}

.home > .header-page {
  @apply w-full;
}

.hero {
  @apply w-full;
  /* @apply max-w-5xl; */
  @apply mx-auto;
  @apply relative;
}

.hero-msg {
  @apply absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2;
  @apply text-white text-center;
  @apply flex flex-col items-center gap-2;
}

.hero-msg h2 {
  @apply font-playfair;
  @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black;
}

.hero-msg p {
  @apply font-playfair;
  @apply text-xl md:text-2xl font-semibold;
}

.hero video {
  @apply w-full;
  @apply mx-auto;
}

.page-content {
  @apply p-4;
  @apply flex flex-col;
}

.banner-full {
  @apply w-full max-w-5xl mx-auto;
  @apply pt-8 pb-16;
}

.banner-full img {
  @apply w-full;
  @apply mx-auto;
}

/* .ads-banner img {
  @apply w-full;
} */

.section-service {
  @apply py-4 sm:py-6 md:py-8;
}

.section-featured-product {
  @apply w-full max-w-5xl mx-auto;
  /* @apply px-16 py-9; */
  @apply py-10;
  @apply flex flex-row justify-between gap-16;
}

.section-featured-product .ads-banner {
  /* @apply w-72; */
  @apply w-1/3;
  @apply flex-shrink-0;
}

/* .section-featured-product .section-product .section-product-title h2.section-title {
  @apply font-extrabold  text-lg md:text-3xl;
} */

.section-best-seller {
  @apply w-full max-w-5xl mx-auto;
  /* @apply px-16 py-9; */
  @apply py-10;
  /* @apply flex flex-row flex-wrap justify-between items-center gap-0; */
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
}

.section-best-seller .ads-banner {
  /* @apply w-72; */
  @apply  w-full;
  @apply max-h-80 lg:max-h-full;
  /* @apply flex-shrink-0; */
}

.section-best-seller .ads-banner img {
  /* @apply w-72; */
  @apply  w-full;
  @apply h-full;
  @apply object-cover object-center;
  /* @apply flex-shrink-0; */
}

.section-best-seller .section-product {
  @apply w-full;
  /* @apply mr-6 lg:mr-12; */
  @apply flex flex-col items-end gap-8;
  /* @apply py-4; */
}


/* .section-best-seller .section-product .section-product-title h2.section-title {
  @apply font-extrabold text-lg md:text-3xl;
} */

.section-product-title {
  @apply w-full;
  /* @apply p-2 md:p-4; */
  @apply flex flex-row items-center justify-between;
}

.section-product-title h2.section-title {
  @apply font-extrabold  text-2xl sm:text-3xl md:text-4xl;
  /* @apply uppercase; */
}

.section-product-title a {
  @apply w-max flex-shrink-0;
  @apply flex flex-row items-center gap-2;

}

.section-product-title a svg {
  @apply w-5 h-5;
}

.section-product-title p {
  @apply text-center;
}

/* .section-carousel-product {
  @apply w-full;
} */

.section-featured-product .section-product {
  @apply w-full max-w-5xl;
  @apply flex flex-col items-end gap-8;
  /* @apply py-4; */
}

.section-featured-product .section-list-product {
  @apply w-full;
  /* @apply flex flex-row flex-wrap; */

  @apply grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4;
  /* @apply justify-between items-start gap-4; */
}
.section-featured-product .section-list-product .product {
  /* @apply flex-1; */
}

.section-best-seller .section-product {
  @apply w-full flex-shrink-0;
}

.section-best-seller .section-list-product {
  @apply w-full;
  @apply grid grid-cols-1 sm:grid-cols-2 gap-4;
  /* @apply flex flex-row justify-between gap-4; */
}

.section-recommend-menu {
  @apply w-full max-w-5xl mx-auto;
  /* @apply px-16 py-9; */
  @apply py-10;
  @apply flex flex-row justify-between items-center gap-0;
}

.section-recommend-menu .section-product {
  /* @apply w-full;
  @apply flex flex-col items-end gap-4 lg:gap-8; */

  @apply w-full max-w-5xl;
  @apply flex flex-col items-end gap-8;
}

.section-recommend-menu .section-product .section-list-product {
  @apply w-full flex-shrink-0;
  @apply grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 place-items-center;
}
</style>
