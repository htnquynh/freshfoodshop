<template>
  <div class="order">
    <div class="order-header">
      <div class="order-code-date">
        <p class="order-code">Order {{ order._id | toCODE }}</p>
        <p class="order-date">Order at: {{ order.date | toDateTime }}</p>
      </div>
      <p class="order-status">{{ order.status }}</p>
    </div>

    <hr class="order-break-line" />

    <div class="order-list-item">
      <OrderItem
        v-for="item in order.orderItems"
        :key="item._id"
        :item="item"
      />
    </div>

    <p class="order-price">
      Total: <span>{{ order.total_price | toVND }}</span>
    </p>
    <hr class="order-break-line" />

    <div class="order-footer">
      <p>Fullname: {{ order.full_name }}</p>
      <p>Address: {{ order.address }}</p>
      <p>Phone: {{ order.phone }}</p>
    </div>

    <a
      v-if="order.status == 'Pending'"
      @click="updateOrderStatus('Cancel')"
      class="order-action"
    >
      Cancel
    </a>

    <a
      v-if="order.status == 'Delivering'"
      @click="updateOrderStatus('Received')"
      class="order-action"
    >
      Received
    </a>
  </div>
</template>

<script>
import OrderItem from "./OrderItem.vue";
import OrderAPI from "../api/OrderAPI";
import { mapActions } from "vuex";

export default {
  props: ["order"],
  components: {
    OrderItem,
  },
  data() {
    return {};
  },
  computed: {},
  filters: {
    toCODE: function (value) {
      return "#O" + value.slice(-5);
    },
    toVND: function (value) {
      if (typeof value !== "number") {
        value = parseInt(value);
      }
      var formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    },
    toDateTime: function (value) {
      var date = new Date(value);
      var options = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
        timeZone: "Asia/Ho_Chi_Minh",
      };
      return new Intl.DateTimeFormat("en-BG", options).format(date);
    },
  },
  methods: {
    ...mapActions(["getOrders", "start_load", "stop_load"]),
    async updateOrderStatus(status) {
      this.start_load();
      let token = JSON.parse(sessionStorage.getItem("user_login"));
      let config = {
        headers: { Authorization: "bearer " + token },
      };

      await OrderAPI.updateStatus(this.order._id, status, config)
        .then((res) => {
          console.log(res);
          this.$swal.fire(
            "Success!",
            `You have successfully ${status} order`,
            "success"
          );
          this.getOrders().then(() => {
            this.$emit("update-order");
            this.stop_load();
          });
        })
        .catch((err) => {
          console.log(err);
          this.stop_load();
          this.$swal.fire(
            "Oh no!",
            "Something went wrong. Double check your work.",
            "fail"
          );
        });
    },
  },
};
</script>

<style lang="postcss" scoped>
.order {
  /* @apply w-72; */
  @apply p-4;
  @apply flex flex-col gap-3;
  @apply bg-dominant;
  /* @apply divide-y divide-secondary divide-dashed; */

  @apply w-full;
  @apply rounded-2xl;

  box-shadow: rgba(57, 42, 35, 0.05) 0px 12px 10px -10px;
}

hr.order-break-line {
  @apply border-t border-secondary border-dashed;
}

.order-header {
  @apply w-full;
  @apply flex flex-row justify-between items-start;
}
.order-code-date {
  @apply flex flex-col gap-1;
}
p.order-code {
  @apply text-sm font-bold;
}
p.order-date {
  @apply text-xs;
}
p.order-status {
  @apply px-2 py-1;
  @apply rounded-lg;
  @apply text-gold-500 text-xs font-medium tracking-wide;
  @apply bg-gold-100;
}

.order-list-item {
  @apply w-full;
  @apply flex flex-col gap-2;
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

.order-price {
  @apply p-2;
  @apply text-base text-right;
}

.order-price > span {
  @apply px-1;
  @apply text-base font-extrabold;
}

.product-qty {
  @apply flex-grow;
  @apply text-right;
  @apply text-xs font-bold;
}

.order-footer {
  @apply w-full;
  @apply flex flex-col gap-1;
}

.order-footer > p {
  @apply text-xs;
}

a.order-action {
  @apply w-full;
  @apply bg-secondary text-white;
  @apply text-sm font-bold uppercase text-center;
  @apply p-2;
  @apply rounded-lg;
}
</style>
