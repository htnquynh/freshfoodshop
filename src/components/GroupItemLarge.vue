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
        <div class="group-item-action">
          <a class="btn-add-to-cart" @click="addToCart">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z" />
            </svg>
          </a>

          <a class="btn-add-to-wishlist" @click="addItemTowishlist(product)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
            </svg>
          </a>
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
  @apply w-20 h-20;
  @apply object-contain;
}

.group-item-spec {
  /* @apply w-32; */
  @apply flex flex-row items-center gap-2;
  @apply p-1;
}

.product-spec {
  @apply w-36;
  @apply flex flex-col;
}

.product-category {
  @apply text-sm tracking-wide font-light;
}

.product-name {
  @apply text-base font-bold;
}

.product-price-unit {
  @apply flex flex-row items-center gap-1;
  @apply mt-1;
}

.product-price {
  @apply text-base font-black text-gold-500;
  
}

.product-unit {
  @apply text-sm;
}

.group-item-action {
  @apply p-1;
  @apply flex flex-col gap-2 items-center;
  @apply bg-gold-500 bg-opacity-20;
  @apply rounded-lg;
}

.group-item-action > a {
  @apply p-2;
  @apply rounded-xl;
}

.group-item-action > a > svg {
  @apply w-6 h-6;
}

.btn-add-to-wishlist {
  /* @apply bg-gold-100; */
  @apply bg-white;
  @apply text-gold-500;
}

.btn-add-to-cart {
  @apply bg-gold-500;
  @apply text-gold-100;
}
</style>