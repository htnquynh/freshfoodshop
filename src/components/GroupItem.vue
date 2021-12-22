<template>
  <div class="group-item-wrapper">
    <div class="group-item">
      <img class="group-item-image" :src="imageProduct(product.image)" >
      <div class="group-item-spec">
        <div class="product-spec">
          <p class="product-category">{{ product.category }}</p>
          <p class="product-name">{{ product.name }}</p>
          <div class="product-price-unit">
            <p class="product-price">{{ product.price | toVND }}</p>
            <p class="product-unit">/ 1 kg</p>
          </div>
        </div>

        <div class="product-action">
          <button 
            v-show="product.quantity_remaining > 0" 
            class="btn-small-icon btn-add-to-cart"
            @click="addItemToCart()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path 
                d="M0 0h24v24H0V0z" 
                fill="none"
              />
              <path
                d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
              />
            </svg>
          </button>

          <button 
            class="btn-small-icon btn-add-to-wishlist"
            @click="addToWishlist(product)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path 
                d="M0 0h24v24H0V0z" 
                fill="none"
              />
              <path
                d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CartAPI from "../api/CartAPI";

export default {
  props: ["product"],
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
    ...mapActions(["getUserCart", "addItemToWishlist", "addItemsToWishlist", "start_load", "stop_load"]),
    imageProduct(name) {
        try {
            let img = "/products/" + name;
            return img;
        } catch (error) {
            console.log(error);
        }
    },
    async addItemToCart() {
      if (this.is_login) {
        this.start_load();
        let token = JSON.parse(sessionStorage.getItem("user_login"));
        let config = {
          headers: { Authorization: "bearer " + token },
        };
        let items = [{product: this.product._id, quantity: 1, price: this.product.price}];
        await CartAPI.add(items, config)
        .then((res) => {
          console.log(res.data);
          this.stop_load();
          this.$swal.fire(
            'Oh great!',
            'Add product to cart successfully!',
            'success'
          );
          this.getUserCart();
        })
        .catch((error) => {
          console.log(error);
          this.stop_load();
          this.$swal.fire(
            'Oh no!',
            'Something went wrong. Double check your work.',
            'fail'
          );
        });
      } else {
        this.stop_load();
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

    async addToWishlist(product) {
      const item = this.wishlist.find((item) => item._id == product._id);
      if (item) {
        this.$swal.fire(
          'Uh oh!',
          'Product already exists in wishlist!',
          'info'
        );
        return;
      }
      this.start_load();
      await this.addItemToWishlist(product).then((res) => {
        console.log(res);
        this.stop_load();
        this.addItemsToWishlist();
        this.$swal.fire(
          'Great!',
          'Added product to wishlist successfully!',
          'success'
        )
      });
    },
  },
}
</script>

<style lang="postcss" scoped>

.group-item-wrapper {
  @apply flex-shrink-0;
  @apply p-2;
  @apply bg-white;
  @apply rounded-2xl;
  @apply w-64;

  box-shadow: rgba(57, 42, 35, 0.05) 0px 12px 10px -10px;
}

.group-item {
  @apply flex flex-row items-stretch gap-4;
}

.group-item-image {
  @apply w-20 h-20;

  @apply bg-dominant;
  @apply rounded-xl;

  /* @apply rounded-full; */
  @apply p-2;
  /* @apply mx-2; */
  @apply object-contain;
}

.group-item-spec {
  @apply w-full flex-1;
  @apply flex flex-row justify-between items-start gap-0;
}

.product-spec {
  @apply flex-grow;
  @apply w-full;
  @apply flex flex-col;
}

.product-category {
  @apply text-xs tracking-wide font-normal;
}

.product-name {
  @apply text-sm font-bold;
}

.product-price-unit {
  @apply flex flex-row items-center gap-1;
}

.product-price {
  @apply text-sm font-semibold text-gold-500;
  /* color: #97EA07; */
}

.product-unit {
  @apply text-xs font-medium;
}

.product-action {
  @apply flex flex-col justify-center items-center gap-2;
}

.btn-small-icon {
  @apply flex items-center justify-center;
  @apply w-7 h-7;
  @apply p-1;

  @apply rounded-lg;

}

.btn-add-to-cart {
  /* @apply bg-gold-500 text-white; */

  /* @apply text-secondary bg-gold-500; */

  @apply bg-gold-500 text-white;

  box-shadow: rgba(255, 201, 40, 0.8) 0px 10px 8px -8px;
}

.btn-small-icon svg {
  @apply transform scale-125;
}

.btn-add-to-wishlist {
  @apply bg-gold-100 text-gold-500;
  box-shadow: rgba(57, 42, 35, 0.15) 0px 10px 8px -8px;
}


</style>