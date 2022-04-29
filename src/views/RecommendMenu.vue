<template>
  <div class="home relative">
    <TheHeader class="header-page" />
    <MiniCart />
    <div class="page-content">
      <div class="shop-page">
        <div class="group-filter-wrapper">
          <!-- <h2>Recommend Menu</h2> -->
          <div class="group-filter-title">
            <h2>Fresh Food</h2>
            <p>Recommend Menu</p>
          </div>

          <div class="group-filter">
            <div class="input-search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="currentColor"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                />
              </svg>
              <input
                type="search"
                v-model="keyword"
                v-on:keyup.enter="searchMenu()"
                placeholder="Search ..."
              />
            </div>
            <div class="select-box">
              <svg
                class="select-box-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.2939 13.08L17.6439 8.44001C17.4593 8.2516 17.2077 8.14377 16.9439 8.14001C16.6766 8.14112 16.421 8.24916 16.2339 8.44001L11.5839 13.08C11.3946 13.2678 11.2881 13.5234 11.2881 13.79C11.2881 14.0567 11.3946 14.3122 11.5839 14.5C11.7717 14.6893 12.0272 14.7958 12.2939 14.7958C12.5605 14.7958 12.8161 14.6893 13.0039 14.5L15.9439 11.56V20C15.9439 20.5523 16.3916 21 16.9439 21C17.4962 21 17.9439 20.5523 17.9439 20V11.56L20.8739 14.5C21.266 14.8921 21.9018 14.8921 22.2939 14.5C22.686 14.1079 22.686 13.4721 22.2939 13.08Z"
                  fill="currentColor"
                />
                <path
                  d="M12.0041 9.29C11.8163 9.10069 11.5607 8.9942 11.2941 8.9942C11.0275 8.9942 10.7719 9.10069 10.5841 9.29L7.65409 12.23V4C7.65409 3.44772 7.20638 3 6.65409 3C6.10181 3 5.65409 3.44772 5.65409 4V12.23L2.71409 9.29C2.32197 8.89788 1.68621 8.89788 1.29409 9.29C0.901969 9.68212 0.901969 10.3179 1.29409 10.71L5.94409 15.35C6.33413 15.7377 6.96405 15.7377 7.35409 15.35L12.0041 10.71C12.1934 10.5222 12.2999 10.2666 12.2999 10C12.2999 9.73336 12.1934 9.47777 12.0041 9.29Z"
                  fill="currentColor"
                />
              </svg>

              <select v-model="selectedSort">
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div class="shop-wrapper">
          <div v-if="displayedGroups.length != 0" class="list-group-wrapper">
            <div class="list-group">
              <Group
                :group="group"
                v-for="group in displayedGroups"
                :key="group._id"
              />
            </div>
            <div class="pagination-wrapper">
              <div v-if="canPagination()">
                <div class="pagination">
                  <button class="page-link" v-if="page != 1" @click="page--">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="currentColor"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
                      <path
                        d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
                      />
                    </svg>
                  </button>
                  <button
                    class="page-link"
                    v-for="pageNumber in pages.slice(page - 1, page + 3)"
                    :key="pageNumber.id"
                    :class="pageNumber.page == page ? 'page-active' : ''"
                    @click="page = pageNumber.page"
                  >
                    {{ pageNumber.page }}
                  </button>
                  <button
                    @click="page++"
                    v-if="page < pages.length"
                    class="page-link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="currentColor"
                    >
                      <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                      <path
                        d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div v-else class="list-group-wrapper h-64 sm:h-64 md:h-64 lg:h-72">
            <p class="p-8 text-3xl font-bold opacity-20 text-center">
              NOTHING HERE
            </p>
          </div>
        </div>
      </div>
    </div>
    <TheSubscribe />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheSubscribe from "../components/TheSubscribe.vue";
import MiniCart from "../components/MiniCart.vue";

import Group from "../components/Group.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
    Group,
  },
  data() {
    return {
      keyword: "",
      recommend_menu: [],
      selectedSort: "newest",
      page: 1,
      perPage: 6,
      pages: [],
    };
  },
  created() {
    this.start_load();
    this.getGroups().then(() => {
      console.log("Fetch Group");
      this.recommend_menu = this.groups;
      this.stop_load();
    });
  },
  computed: {
    ...mapGetters(["groups"]),
    totalPages: function () {
      return Math.ceil(this.resultCount / this.itemsPerPage);
    },
    displayedGroups() {
      return this.paginate(this.recommend_menu);
    },
  },
  watch: {
    selectedSort: function () {
      this.sortMenus();
    },
    recommend_menu() {
      this.page = 1;
      this.setPages();
    },
    perPage() {
      this.setPages();
    },
  },
  methods: {
    ...mapActions(["getGroups", "start_load", "stop_load"]),
    // fetchGroup() {
    //   this.getGroups()
    //   .then(() => {
    //     console.log("Fetch Group");
    //     this.recommend_menu = this.groups;
    //   });
    // },
    sortMenus() {
      switch (this.selectedSort) {
        case "oldest":
          this.recommend_menu = this.recommend_menu.sort(function (a, b) {
            return new Date(a.createdAt) - new Date(b.createdAt);
          });
          break;
        case "price-low-to-high":
          this.recommend_menu = this.recommend_menu.sort(function (a, b) {
            return parseInt(a.price) - parseInt(b.price);
          });
          break;
        case "price-high-to-low":
          this.recommend_menu = this.recommend_menu.sort(function (a, b) {
            return parseInt(b.price) - parseInt(a.price);
          });
          break;
        default:
          this.recommend_menu = this.recommend_menu.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          break;
      }
    },
    searchMenu() {
      this.start_load();
      console.log(this.keyword);
      this.recommend_menu = this.groups.filter((g) => {
        if (g.title.toLowerCase().includes(this.keyword.toLowerCase())) {
          return true;
        }
        return this.checkIngredient(g.material);
      });
      this.sortMenus();
      this.stop_load();
    },
    checkIngredient(list) {
      let has_keyword = false;
      list.every((item) => {
        console.log(item.product.name.toLowerCase());
        if (
          item.product.name.toLowerCase().includes(this.keyword.toLowerCase())
        ) {
          has_keyword = true;
          console.log("Has Keyword !!!");
          // Stop
          return false;
        }
        // Continue
        return true;
      });

      return has_keyword;
    },
    changePerPage() {
      console.log("Per Page: " + this.perPage);
      this.setPages();
    },
    canPagination() {
      if (this.recommend_menu.length / this.perPage <= 1) {
        return false;
      }
      return true;
    },
    setPages() {
      let numberOfPages = Math.ceil(this.recommend_menu.length / this.perPage);
      this.pages = [];
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push({ id: index - 1, page: index });
      }
    },
    paginate(list) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return list.slice(from, to);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import "../assets/style/slider-range.css";
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
  @apply flex flex-col items-stretch;
}

.group-filter-wrapper {
  @apply w-full;
  @apply p-2 sm:p-4;
  @apply flex flex-col gap-2 md:flex-row items-center md:gap-4;

  @apply bg-white;

  @apply mb-4 lg:mb-8;

  box-shadow: rgba(57, 42, 35, 0.05) 0px 12px 10px -10px;
}

.group-filter-title {
  @apply flex-shrink-0;
  @apply w-full md:w-max;
  @apply bg-gold-100 text-secondary;
  @apply flex flex-col;
  @apply px-6 py-2;
  @apply border-l-8 border-gold-500;

  /* box-shadow: rgba(255, 201, 40, 0.25) 0px 12px 10px -10px; */
}

.group-filter-title h2 {
  /* @apply font-playfair; */
  @apply text-base sm:text-xl font-extrabold;
  /* @apply text-secondary; */
  /* @apply py-2 px-8;
  @apply bg-secondary; */
}

.group-filter-title p {
  @apply text-gold-500;
  @apply text-base font-bold;
}

.group-filter {
  @apply w-full;
  /* @apply p-2 sm:p-4 md:p-6 lg:p-8; */
  @apply flex flex-col gap-2 sm:flex-row md:gap-4;
  /* @apply bg-white; */
  /* @apply mb-4 lg:mb-8; */
}

.input-search {
  @apply w-full;
  @apply flex flex-row items-center gap-2;
  @apply px-3 py-2 md:py-3;
  @apply bg-dominant;
  @apply border border-secondary;
  /* @apply rounded-xl; */
}

.input-search svg {
  @apply w-7 h-7;
  @apply text-secondary;
}

.input-search input[type="search"] {
  @apply bg-transparent;
  @apply focus:outline-none;
  @apply w-full;
}

.select-box {
  @apply w-full sm:w-max;
  @apply relative inline-flex self-center;
}

.select-box .select-box-icon {
  @apply text-secondary;
  @apply pointer-events-none;
  @apply absolute top-0 right-0 m-1;
  @apply rounded;
  @apply w-8 h-8;
  @apply p-1;
}

.select-box > select {
  @apply font-bold;
  /* @apply bg-gold-100; */
  @apply w-full sm:w-52 h-10;
  @apply pl-4 pr-10;

  @apply border-b-2 border-secondary;

  @apply focus:outline-none appearance-none;
}

.shop-wrapper {
  @apply w-full;
  @apply flex flex-col sm:flex-row gap-4 lg:gap-8;
  @apply relative;
}

/* List Product */

.list-group-wrapper {
  @apply w-full;
}

.list-group-wrapper .list-group {
  @apply w-full;
  /* @apply flex flex-row flex-wrap justify-center gap-4 md:gap-8; */
  @apply grid grid-cols-1 gap-4 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4 place-items-center;
  /* @apply grid grid-flow-row; */
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
</style>
