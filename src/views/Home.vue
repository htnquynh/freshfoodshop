<template>
  <div class="home">
    <div class="banner">
      <img src="../assets/image/banner-4.png" alt="">
      <img src="../assets/image/banner-2.png" alt="">
    </div>

    <div class="section-product">
      <div class="section-product-title">
        <h2 class="section-title">
          Featured Product
        </h2>
        <hr>
      </div>
      <ul class="section-list-category">
        <li class="active">All</li>

        <li v-for="cat in category" :key="cat._id">{{ cat.name }}</li>
      </ul>
      <div class="section-carousel-product">
        <Carousel :list_product="featuredProduct"/>
      </div>
    </div>

    <div class="section-product">
      <div class="section-product-title">
        <h2 class="section-title">
          Best Seller
        </h2>
        <hr>
      </div>
      <div class="section-carousel-product">
        <Carousel :list_product="bestSeller"/>
      </div>
    </div>

    <div class="section-product">
      <div class="section-product-title">
        <h2 class="section-title">
          Recommend menu
        </h2>
        <p>Delicious Food Suggestions For You Every Day</p>
        <hr>
      </div>
      <div class="section-carousel-product">
        <CarouselGroup :list_group="groups"/>
      </div>
    </div>

    <div class="section-product">
      <div class="section-product-title">
        <h2 class="section-title">
          New Arrival
        </h2>
        <hr>
      </div>
      <div class="section-carousel-product">
        <Carousel :list_product="newArrival"/>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import CarouselGroup from '../components/CarouselGroup.vue'

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Carousel,
    CarouselGroup
  },
  data() {
    return {
      // featuredProduct: [],
      // bestSeller: [],
      // newArrival: [],
    }
  },
  created() {
    this.getProducts();
    this.getGroups();
    this.getCategory();
    // this.featuredProduct = this.productList.slice(0, 8);
    // this.bestSeller = this.sortProductBySold(this.productList).slice(0, 8);
    // this.newArrival = this.sortProductByDate(this.productList).slice(0, 8);
  },
  computed: {
    ...mapGetters(["productList", "groups", "category"]),
    featuredProduct() {
      return this.productList.slice(0, 8);
    },
    bestSeller() {
      return this.sortProductBySold(this.productList).slice(0, 8);
    },
    newArrival() {
      return this.sortProductByDate(this.productList).slice(0, 8);
    },
  },
  methods: {
    ...mapActions([ "getProducts", "getGroups", "getCategory"]),
    sortProductByDate(list) {
      return list.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    },
    sortProductBySold(list) {
      return list.sort(function(a,b){
        return b.quantity_sold - a.quantity_sold;
      });
    }
  }
}
</script>

<style lang="postcss" scoped>
.home {
  @apply flex flex-col gap-6 md:gap-10 lg:gap-16;
  @apply p-4 sm:p-6 md:p-8;
}
.banner {
  @apply grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-4 lg:gap-8;
}

.banner img {
  @apply w-full;
}

.section-product {
  @apply flex flex-col items-center gap-4;
  @apply py-4;
}

.section-product-title {
  @apply p-2 md:p-4;
  @apply flex flex-col items-center gap-3 md:gap-4;
}

.section-product-title h2.section-title {
  @apply font-bold md:font-black text-lg md:text-3xl;
  @apply uppercase;
}

.section-product-title p {
  @apply text-center;
}

.section-product-title > hr {
  @apply w-full max-w-3xl;
  @apply border-t md:border-t border-secondary;
}

.section-list-category {
  @apply w-full;
  /* @apply p-2; */
  @apply flex flex-row flex-wrap justify-center;
  /* @apply overflow-auto; */
}

.section-list-category li {
  @apply px-4 py-2;
  @apply text-base;
}

.section-list-category li.active {
  @apply font-bold;
  @apply border-b-2 border-secondary;
}

.section-carousel-product {
  @apply w-full;
  /* @apply p-2; */
}

/* *::-webkit-scrollbar {
  @apply hidden;
} */

/* .section-service {
  @apply flex flex-col items-center justify-center lg:flex-row gap-4;
  @apply p-4;
}

.service {
  @apply w-64 lg:w-72;
  @apply p-1;
  @apply flex flex-row items-center;
  @apply bg-white;
}

.service-image {
  @apply p-2;
  @apply flex flex-row gap-2;
}

.service-line {
  @apply bg-current;
  @apply w-1;
}

.service-content {
  @apply flex flex-col gap-1;
  @apply p-2;
}

.service-title {
  @apply font-black lg:text-lg;
}

.service-subtitle {
  @apply font-normal text-sm ;
} */

</style>
