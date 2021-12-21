<template>
  <div class="group-item-wrapper">
    <div class="group-item">
      <img class="group-item-image"
        :src="imageProduct(product.image)" >
      <div class="group-item-spec">
        <div class="product-spec">
          <p class="product-category">{{ product.category }}</p>
          <p class="product-name">{{ product.name }}</p>
        </div>
        <div class="product-price-unit">
          <p class="product-price">{{ product.price | toVND }}</p>
          <p class="product-unit">/ 1 kg</p>
        </div>
        <div class="product-action">
          <a v-show="product.quantity_remaining > 0" class="btn-add-to-cart" @click="addItemToCart()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
              />
            </svg>
            <span>Add to cart</span>
          </a>
          <p v-show="product.quantity_remaining <= 0">Out of Stock</p>
        </div>

        <button class="btn-remove-item" @click="deleteItem(product._id)">
          <svg 
            class="h-6 w-6" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CartAPI from "../api/CartAPI";

export default {
  props: ["product"],
  data() {
    return {
    };
  },
  created() {
  },
  computed: {
    ...mapGetters(["is_login", "wishlist"]),
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
    ...mapActions(["getUserCart", "deleteWishlistItem", "addItemsToWishlist"]),
    imageProduct(name) {
      try {
          let img = "/products/" + name;
          return img;
      } catch (error) {
          console.log(error);
      }
    },
    async deleteItem(product_id) {
      await this.deleteWishlistItem(product_id)
      .then((res) => {
        console.log(res);
        this.$swal.fire(
          'Success!',
          'The product has been removed from wishlist.',
          'success'
        )
      });
    },
    async addItemToCart() {
      if (this.is_login) {
        let token = JSON.parse(sessionStorage.getItem("user_login"));
        let config = {
          headers: { Authorization: "bearer " + token },
        };
        let items = [{product: this.product._id, quantity: 1, price: this.product.price}];
        CartAPI.add(items, config)
        .then((res) => {
          console.log(res.data);
          this.$swal.fire(
            'Oh great!',
            'Add product to cart successfully!',
            'success'
          );
          this.getUserCart();
        })
        .catch((error) => {
          console.log(error);
          this.$swal.fire(
            'Oh no!',
            'Something went wrong. Double check your work.',
            'fail'
          );
        });
      } else {
        this.$swal.fire(
          'Login to your account',
          'You must be logged in to be able to add products to your cart.',
          'warning'
        );
        this.$router.push({
          name: "Login",
        });
      }
    },
  },
}
</script>

<style lang="postcss" scoped>

.group-item-wrapper {
  /* @apply flex-shrink-0; */
  @apply p-2;
  @apply bg-white;
  @apply rounded-2xl;
  @apply w-full;

  box-shadow: rgba(57, 42, 35, 0.05) 0px 12px 10px -10px;
}

.group-item {
  @apply flex flex-row items-stretch gap-4;
}

.group-item-image {
  @apply w-20 h-20 md:w-28 md:h-28;

  @apply bg-dominant;
  @apply rounded-xl;

  /* @apply rounded-full; */
  @apply p-2;
  /* @apply mx-2; */
  @apply object-contain;
}

.group-item-spec {
  @apply w-full flex-1;
  /* @apply flex flex-row justify-between items-center gap-4; */

  @apply grid grid-cols-6 sm:grid-cols-12 lg:grid-cols-12 gap-1 md:gap-2 place-items-center place-content-center;
}

.product-spec {
  @apply col-span-3 sm:col-span-4;
  @apply flex-grow;
  @apply w-full;
  @apply flex flex-col;
}

.product-category {
  @apply text-xs sm:text-sm tracking-wide font-light;
  @apply truncate;
}

.product-name {
  @apply text-sm sm:text-base font-bold;
  @apply truncate;
}

.product-price-unit {
  @apply w-full;
  @apply px-2;
  @apply col-span-3;
  @apply flex justify-end flex-row flex-wrap sm:justify-center items-center gap-x-1;
}

.product-price {
  @apply text-sm sm:text-base font-semibold text-gold-500;
  /* color: #97EA07; */
}

.product-unit {
  @apply text-xs sm:text-sm font-medium;
}

.product-action {
  @apply w-full;
  @apply col-span-5 sm:col-span-4;
  @apply flex flex-row sm:justify-center items-center md:gap-4;
}

a.btn-add-to-cart {
  @apply w-max;
  @apply flex flex-row justify-center items-center gap-1 md:gap-2;
  @apply px-2.5 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-2.5;
  @apply bg-gold-500 text-white;
  @apply text-sm md:text-base font-semibold capitalize;

  box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;
}

a.btn-add-to-cart svg {
  @apply w-5 h-5 md:w-6 md:h-6;
}

.btn-remove-item {
  @apply place-self-end sm:place-self-center;
  @apply flex items-center justify-center;
  @apply p-2;
  @apply text-secondary text-opacity-50;
}

.btn-remove-item svg {
  @apply w-5 h-5;
}

</style>