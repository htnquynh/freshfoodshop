<template>
  <div class="shop-page">
    <div class="banner">
      <img src="../assets/image/banner-4.png" alt="">
      <img src="../assets/image/banner-2.png" alt="">
    </div>

    <div class="page-title">
      <h2>Recommend Menu.</h2>
      <hr>
    </div>

    <div class="shop-wrapper">

      <div class="shop-filter">
        <div class="filter-category">
          <div class="filter-category-title">
            <h3>Sort by</h3>
          </div>

          <div class="list-category">
            <div class="category-checkbox">
              <input type="checkbox"/>
              <label>Best sellers</label>
            </div>

            <div class="category-checkbox">
              <input type="checkbox"/>
              <label>Newest items</label>
            </div>

            <div class="category-checkbox">
              <input type="checkbox"/>
              <label>Price: low to high</label>
            </div>

            <div class="category-checkbox">
              <input type="checkbox"/>
              <label>Price: high to low</label>
            </div>
          </div>
        </div>

        <div class="filter-category">
          <div class="filter-category-title">
            <h3>Category</h3>
          </div>

          <div class="list-category">
            <div class="category-checkbox" v-for="item in category" :key="item.id">
              <input type="checkbox" 
                :id="item.id"
                :value="item.name"/>
              <label :for="item.id">{{ item.name }}</label>
            </div>
          </div>
        </div>

        <div class="filter-price">
          <div class="filter-price-title">
            <h3>Price</h3>
          </div>

          <div class="price-slider-wrapper">
            <div class="price-slider">
              <input
                type="range"
                id="input-left"
                :min="min"
                :max="max"
                v-model="priceFrom"
                step="1000"
                @input="setInputLeft()"
                @mouseover="inputLeftHover = true"
                @mouseout="inputLeftHover = false"
                @mousedown="inputLeftActive = true"
                @mouseup="inputLeftActive = false"
              />
              <input
                type="range"
                id="input-right"
                :min="min"
                :max="max"
                v-model="priceTo"
                step="1000"
                @input="setInputRight()"
                @mouseover="inputRightHover = true"
                @mouseout="inputRightHover = false"
                @mousedown="inputRightActive = true"
                @mouseup="inputRightActive = false"
              />

              <div class="slider">
                <div class="track"></div>
                <div ref="sliderRange" class="range"></div>
                <div
                  ref="sliderThumbLeft"
                  class="thumb left"
                  :class="{ hover: inputLeftHover, active: inputLeftActive }"
                ></div>
                <div
                  ref="sliderThumbRight"
                  class="thumb right"
                  :class="{ hover: inputRightHover, active: inputRightActive }"
                ></div>
              </div>

              <div class="slider-value">
                <p class="price-from">From: {{ priceFrom | toVND }}</p>
                <p class="price-to">To: {{ priceTo | toVND }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="displayedGroups.length != 0" class="list-product-wrapper">
        <div class="list-product" >
          <Group :group="group"
            v-for="group in displayedGroups"
            :key="group._id" />
        </div>
        <div class="pagination-wrapper">
          <div v-if="canPagination()">
            <div class="pagination">
                <button class="page-link" v-if="page != 1" @click="page--">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                    <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
                  </svg>
                </button>
                <button class="page-link" 
                  v-for="pageNumber in pages.slice(page - 1, page + 3)"
                  :key="pageNumber.id"
                  :class="pageNumber.page == page ? 'page-active' : ''"
                  @click="page = pageNumber.page">
                  {{ pageNumber.page }}
                </button>
                <button @click="page++"
                  v-if="page < pages.length"
                  class="page-link">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                    <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
                  </svg>
                </button>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else class="list-product-wrapper">
        <p class="text-3xl font-bold opacity-20 text-center">NOTHING HERE</p>
      </div>

      <div class="right-banner">
        <img src="../assets/image/banner-5.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Group from "../components/Group.vue";

import _ from "lodash";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Group,
  },
  data() {
    return {
      priceFrom: 0,
      priceTo: 1000000,
      min: 0,
      max: 1000000,

      page: 1,
      perPage: 2,
      pages: [],

      inputLeftHover: false,
      inputRightHover: false,
      inputLeftActive: false,
      inputRightActive: false,
    };
  },
  computed: {
    ...mapGetters(["groups", "category"]),
    totalPages: function() {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
    displayedGroups() {
      return this.paginate(this.groups);
    },
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
    groups() {
      this.setPages();
    },
    perPage() {
      this.setPages();
    },
  },
  created() {
    this.getCategory();
    this.getGroups();
  },
  methods: {
    ...mapActions(["getGroups", "getCategory"]),
    setInputLeft() {
      this.priceFrom = Math.min(parseInt(this.priceFrom), parseInt(this.priceTo));
      var percent = ((this.priceFrom - this.min) / (this.max - this.min)) * 100;
      this.$refs.sliderThumbLeft.style.left = (percent) + "%";
      this.$refs.sliderRange.style.left = (percent) + "%";
      
      // this.callFilter();
    },
    setInputRight() {
      this.priceTo = Math.max(parseInt(this.priceTo), parseInt(this.priceFrom));
      var percent = ((this.priceTo - this.min) / (this.max - this.min)) * 100;
      this.$refs.sliderThumbRight.style.right = (100 - percent) + "%";
      this.$refs.sliderRange.style.right = (100 - percent) + "%";
      // this.callFilter();
    },
    changePerPage() {
      console.log("Per Page: " + this.perPage);
      this.setPages();
    },
    canPagination() {
      if (this.groups.length / this.perPage <= 1) {
        return false;
      }
      return true;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.groups.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push({ id: index - 1, page: index });
      }
    },
    paginate(groups) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return groups.slice(from, to);
    },
    callFilter:_.debounce(
      function() {
        this.filter();
      }, 600
    ),
  },
};
</script>

<style lang="postcss" scoped>
@import '../assets/style/slider-range.css';

.home {
  @apply flex flex-col gap-6 md:gap-10 lg:gap-16;
  @apply p-4 sm:p-6 md:p-8;
}

.shop-page {
  @apply flex flex-col items-start md:items-center gap-2 md:gap-6;
}

.banner {
  @apply grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 gap-2 md:gap-4 lg:gap-8;
}

.banner img {
  @apply w-full;
}

.page-title {
  @apply px-4 py-2 sm:py-3 md:p-8;
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

.shop-filter {
  @apply w-full sm:w-1/3 lg:w-80;
  @apply flex-shrink-0;
  @apply px-2 lg:px-4 xl:px-8;
  @apply flex flex-col gap-y-2 sm:gap-y-4;
}

.filter-category {
  @apply w-full;
  @apply flex flex-col gap-1 md:gap-2;
}

.filter-category .filter-category-title,
.filter-price .filter-price-title {
  @apply text-sm md:text-base font-semibold uppercase;
}

.list-category {
  @apply flex flex-col;
  @apply text-sm md:text-base;
}

.list-category .category-checkbox {
  @apply px-2 lg:px-4 py-2;
  @apply flex flex-row gap-3 items-center;
}

.list-category .category-checkbox input[type="checkbox"] {
  @apply w-4 h-4;
}

.filter-price {
  @apply w-full;
  @apply flex flex-col gap-2;
}

.list-product-wrapper {
  @apply w-full sm:w-2/3 lg:w-full;
  @apply px-2 lg:px-4 xl:px-6;
}

.list-product-wrapper .list-product {
  @apply w-full;
  @apply flex flex-row flex-wrap justify-center gap-4 md:gap-8;
}

.pagination-wrapper {
  @apply w-full;
  @apply my-8;
}

.pagination {
  @apply flex flex-row justify-center;
}

.pagination button {
  @apply text-base font-medium;
  @apply px-2 py-1 sm:px-4 sm:py-2;
}

.page-active {
  @apply font-bold !important;
  @apply border-b-4 border-gold-500;
}

.right-banner {
  @apply hidden lg:block;
  @apply flex-shrink-0;
  @apply w-52;
}

.right-banner img {
  @apply w-full;
}

</style>