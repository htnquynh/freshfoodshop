<template>
  <div class="order">
    <div class="order-header">
      <div class="order-code-date">
      <p class="order-code">Order {{ order._id | toCODE}}</p>
        <p class="order-date">Order at: {{ order.date | toDateTime}}</p>
      </div>
      <p class="order-status">{{ order.status }}</p>
    </div>

    <hr class="order-break-line" />

    <div class="order-list-item">
      <div class="order-item" v-for="item in order.orderItems" :key="item._id">
        <img
          class="order-item-image"
          :src="`/products/${item.product.image}`"
        />
        <div class="order-item-spec">
          <div class="product-spec">
            <p class="product-category">{{ item.product.category }}</p>
            <p class="product-name">{{ item.product.name }}</p>
            <div class="product-price-unit">
              <p class="product-price">{{ item.price | toVND }}</p>
              <p class="product-unit">/ 1 kg</p>
              <p class="product-qty">x {{item.quantity}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr class="order-break-line" />

    <div class="order-footer">
      <p>Fullname: {{ order.full_name }}</p>
      <p>Address: {{ order.address }}</p>
      <p>Phone: {{ order.phone }}</p>
    </div>

    <a v-if="order.status == 'Pending'"
        @click="cancelOrder()" class="order-action">
        Cancel
    </a>

    <a v-if="order.status == 'Delivering'"
        @click="received()" class="order-action">
        Received
    </a>
  </div>
</template>

<script>
// import axios from "axios";
import { mapActions } from "vuex";

export default {
  props: ["order"],
  data() {
    return {};
  },
  computed: {},
  filters: {
    toCODE: function (value) {
      return "#O" + value.substring(0, 5);
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
    ...mapActions(["updateOrderStatus"]),
    imageProduct(name) {
      try {
        let img = "/products/" + name;
        return img;
      } catch (error) {
        console.log(error);
      }
    },
    cancelOrder() {
      this.updateOrderStatus({ order_id: this.order._id, status: "Cancel" });
    },
    received() {
      this.updateOrderStatus({ order_id: this.order._id, status: "Received" });
    },
  },
};
</script>

<style lang="postcss" scoped>
.order {
  @apply w-72;
  @apply p-4;
  @apply flex flex-col gap-3;
  @apply bg-white;
  /* @apply divide-y divide-secondary divide-dashed; */
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
  @apply flex flex-col gap-1;
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
  @apply bg-dominant text-gold-500;
  @apply text-sm font-semibold text-center;
  @apply p-2;
  @apply rounded-lg;
}
</style>
