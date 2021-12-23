<template>
  <div class="my-order-wrapper">
    <div v-show="orders.length == 0">
      <div class="w-full flex flex-col items-center p-8">
        <img
          src="../assets/image/empty.png"
          class="w-full max-w-xs h-auto mx-auto"
        />
        <p class="text-xl md:text-2xl font-medium py-8">
          You don't have any orders yet.
        </p>

        <router-link to="/shop">
          <button
            class="px-8 py-3 text-base uppercase text-white font-bold bg-gold-500"
            style="box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px"
          >
            Buy now
          </button>
        </router-link>
      </div>
    </div>

    <div v-show="orders.length != 0" class="order-filter">
      <div class="filter">
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
              d="M4 7.39038H10C10.5523 7.39038 11 6.94267 11 6.39038C11 5.8381 10.5523 5.39038 10 5.39038H4C3.44772 5.39038 3 5.8381 3 6.39038C3 6.94267 3.44772 7.39038 4 7.39038Z"
              fill="currentColor"
            />
            <path
              d="M4 13.2804H6C6.46352 14.2043 7.5012 14.6886 8.50704 14.4504C9.51288 14.2122 10.2232 13.314 10.2232 12.2804C10.2232 11.2467 9.51288 10.3486 8.50704 10.1104C7.5012 9.87222 6.46352 10.3565 6 11.2804H4C3.44772 11.2804 3 11.7281 3 12.2804C3 12.8327 3.44772 13.2804 4 13.2804Z"
              fill="currentColor"
            />
            <path
              d="M13.7198 8.46034C14.4937 8.45919 15.2106 8.05332 15.6098 7.39034H19.9998C20.5521 7.39034 20.9998 6.94262 20.9998 6.39034C20.9998 5.83806 20.5521 5.39034 19.9998 5.39034H15.7798C15.3573 4.35131 14.2288 3.7878 13.1444 4.07435C12.0599 4.36089 11.3571 5.40832 11.503 6.52044C11.6489 7.63255 12.5982 8.46323 13.7198 8.46034Z"
              fill="currentColor"
            />
            <path
              d="M10 17.4904H4C3.44772 17.4904 3 17.9381 3 18.4904C3 19.0426 3.44772 19.4904 4 19.4904H10C10.5523 19.4904 11 19.0426 11 18.4904C11 17.9381 10.5523 17.4904 10 17.4904Z"
              fill="currentColor"
            />
            <path
              d="M20.0001 17.4903H16.0601C15.6705 16.5276 14.6703 15.9589 13.6438 16.1165C12.6172 16.2742 11.8337 17.1167 11.7508 18.152C11.668 19.1872 12.3077 20.1436 13.2961 20.4625C14.2845 20.7813 15.3624 20.3789 15.9001 19.4903H16.0001H20.0001C20.5524 19.4903 21.0001 19.0426 21.0001 18.4903C21.0001 17.938 20.5524 17.4903 20.0001 17.4903Z"
              fill="currentColor"
            />
            <path
              d="M20 11.2804H12C11.4477 11.2804 11 11.7281 11 12.2804C11 12.8327 11.4477 13.2804 12 13.2804H20C20.5523 13.2804 21 12.8327 21 12.2804C21 11.7281 20.5523 11.2804 20 11.2804Z"
              fill="currentColor"
            />
          </svg>
          <select v-model="selectedStatus">
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Pick-up">Pick-up</option>
            <option value="Delivering">Delivering</option>
            <option value="Received">Received</option>
            <option value="Cancel">Cancel</option>
          </select>
        </div>
      </div>
      <div class="filter">
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

    <div v-show="orders.length != 0 && myOrders.length != 0" class="list-order">
      <Order v-for="order in myOrders" :key="order._id" :order="order" @update-order="filterOrders"/>
    </div>

    <div v-show="orders.length != 0 && myOrders.length == 0" class="w-full flex flex-col items-center p-8">
      <img
        src="../assets/image/empty.png"
        class="w-full max-w-xs h-auto mx-auto"
      />
      <p class="text-xl md:text-2xl font-medium py-8">
        There is nothing here.
      </p>
    </div>
  </div>
</template>

<script>
import Order from "../components/Order.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Order,
  },
  data() {
    return {
      myOrders: [],
      selectedStatus: "All",
      selectedSort: "newest",
    };
  },
  watch: {
    selectedStatus: function () {
      this.filterOrders();
    },
    selectedSort: function () {
      this.filterOrders();
    },
  },
  created() {
    this.start_load();
    this.getOrders().then(() => {
      this.myOrders = this.orders;
      this.stop_load();
    });
  },
  computed: {
    ...mapGetters([
      "orders",
    ]),
  },
  methods: {
    ...mapActions(["getOrders", "start_load", "stop_load",]),
    filterOrders() {
      this.start_load();
      switch (this.selectedStatus) {
        case "All":
          this.myOrders = this.orders;
          this.sortOrders();
          this.stop_load();
          break;
        default:
          this.myOrders = this.orders.filter(
            (order) => order.status == this.selectedStatus
          );
          this.sortOrders();
          this.stop_load();
          break;
      }
    },
    sortOrders() {
      switch (this.selectedSort) {
        case "oldest":
          this.myOrders = this.myOrders.sort(function(a,b){
            return new Date(a.date) - new Date(b.date);
          });
          break;
        case "price-low-to-high":
          this.myOrders = this.myOrders.sort(function(a,b){
            return parseInt(a.total_price) - parseInt(b.total_price);
          });
          break;
        case "price-high-to-low":
          this.myOrders = this.myOrders.sort(function(a,b){
            return parseInt(b.total_price) - parseInt(a.total_price);
          });
          break;
        default:
          this.myOrders = this.myOrders.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
          });
          break;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.my-order-wrapper {
  @apply w-full max-w-full;
  @apply grid grid-cols-1;
  @apply p-3 sm:py-2 md:px-4;
}

.list-order {
  @apply w-full;
  @apply p-2 lg:p-4;
  @apply flex flex-col gap-4 sm:gap-6 lg:gap-8;
}

.order-filter {
  @apply flex-shrink-0;
  @apply w-full;
  @apply p-2 lg:p-4;
  @apply flex flex-row justify-between items-center gap-4;
}

.filter {
  @apply w-max;
}

.select-box {
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
  @apply bg-dominant;
  @apply w-full h-10;
  @apply pl-4 pr-10;
  @apply border border-secondary;
  @apply focus:outline-none appearance-none;
}
</style>
