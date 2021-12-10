<template>
  <div class="group-item-wrapper">
    <div class="group-item">
      <img class="group-item-image" :src="imageProduct(item.image)">
      <div class="group-item-spec">
        <div class="product-spec">
          <p class="product-category">{{ item.category }}</p>
          <p class="product-name">{{ item.name }}</p>
          <div class="product-price-unit">
            <p class="product-price">{{ item.price | toVND }}</p>
            <p class="product-unit">/ 1 kg</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  created() {
    
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
  methods: {
    imageProduct(name) {
      try {
        let img = "/products/" + name;
        return img;
      } catch (error) {
        console.log(error);
      }
    },
  },
}
</script>

<style lang="postcss" scoped>

.group-item-wrapper {
  @apply flex-shrink-0;
  @apply p-1;
  @apply bg-white;
  @apply rounded-lg;
  @apply w-max;
}

.group-item {
  @apply flex flex-row items-center gap-2;
}

.group-item-image {
  @apply w-12 h-12;
  @apply object-contain;
}

.group-item-spec {
  /* @apply w-32; */
  width: 120px;
  @apply p-1;
}

.product-spec {
  @apply w-full;
  @apply flex flex-col;
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
</style>