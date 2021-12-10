<template>
  <div class="product-wrapper">
    <div class="product">
      <img class="product-image" 
        :src="imageProduct(product.image)"
        @click="detailProduct()">

      <div class="product-spec">
        <p class="product-category">{{ product.category }}</p>
        <p class="product-name">{{ product.name }}</p>
        <div class="product-price-unit">
          <p class="product-price">{{ product.price | toVND }}</p>
          <p class="product-unit">/ 1 kg</p>
        </div>
      </div>

      <div class="product-action">
        <a class="btn-compare" @click="compare(product._id)">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9.01 14H3c-.55 0-1 .45-1 1s.45 1 1 1h6.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35V14zm5.98-2.21V10H21c.55 0 1-.45 1-1s-.45-1-1-1h-6.01V6.21c0-.45-.54-.67-.85-.35l-2.78 2.79c-.19.2-.19.51 0 .71l2.78 2.79c.31.31.85.09.85-.36z" />
          </svg>
        </a>

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
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["product"],
  data() {
    return {
      item: {
        product_id: this.product._id,
        quantity: 1,
        itemPrice: this.product.price,
      },
    };
  },
  computed: {
    ...mapGetters(["is_login", "compareProducts", "wishlist", "cartItems"]),
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
    ...mapActions([
      "addItemToCart",
      "getSelectedProduct",
      "getCompareProducts",
      "addItem",
      "addItemsToWishlist",
      "getWishList",
    ]),
    imageProduct(name) {
      try {
        let img = "/products/" + name;
        return img;
      } catch (error) {
        console.log(error);
      }
    },
    detailProduct() {
      this.getSelectedProduct(this.product._id);
      this.$router.push({
        name: "Product",
      });
    },
    addToCart() {
      if (this.is_login) {
        let productInCart = this.cartItems.filter((item) => item._id == this.product._id);
        if (productInCart.length != 0) {
          if (this.product.quantity_remaining < productInCart[0].quantity + 1) {
            this.$swal.fire(
                  'Oh no!',
                  'This product is out of stock!',
                  'warning'
                )
          } else {
            this.addItemToCart(this.item);
          }
        } else if (this.product.quantity_remaining < 1) {
          this.$swal.fire(
                  'Oh no!',
                  'This product is out of stock!',
                  'warning'
                )
        } else {
          this.addItemToCart(this.item);
          this.$swal.fire(
                  'Oh great!',
                  'Add product to cart successfully!',
                  'success'
                )
        }
      } else {
        this.$router.push({
          name: "Login",
        });
      }
    },
    compare(product_id) {
      if (this.compareProducts.length == 0) {
        this.$swal.fire(
                  'One more!',
                  'Please choose 1 more product to compare',
                  'success'
                )
      }
      if (this.compareProducts.length != 0) {
        for (let item of this.compareProducts) {
          if (item._id === product_id) {
            this.$swal.fire(
                  'Another one!',
                  'Please choose another product to compare!',
                  'warning'
                )
            return;
          }
        }
        this.$router.push({ name: "Compare" });
      }
      this.getCompareProducts(product_id);
    },
    async addItemTowishlist(product) {
      const item = this.wishlist.find((item) => item._id == product._id);
      if (item) {
        this.$swal.fire(
                  'Uh oh!',
                  'Product already exists in wishlist!',
                  'info'
                )
        return;
      }
      await this.addItem(product).then((res) => {
        console.log(res);
        
        this.addItemsToWishlist();
        this.$swal.fire(
                  'Great!',
                  'Added product to wishlist successfully!',
                  'success'
                )
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-wrapper {
  @apply p-3;
  @apply bg-white;
  @apply max-w-max;
}

.product {
  @apply p-2;
  @apply flex flex-col items-stretch gap-2 sm:gap-3;
  @apply border border-secondary;
}

.product-image {
  @apply w-48 h-36;
  @apply object-contain;
  @apply cursor-pointer;
}

.product-spec {
  @apply p-1;
  @apply flex flex-col items-center gap-1 sm:gap-2;
}

.product-category {
  /* @apply text-xs sm:text-sm; */
  @apply text-sm;
}

.product-name {
  /* @apply text-sm sm:text-base font-bold;
  @apply leading-4 sm:leading-5; */

  @apply font-bold;
}

.product-price-unit {
  @apply flex flex-row items-center gap-2;
  @apply pt-2;
}

.product-price {
  @apply text-base font-black text-gold-500;
}

.product-unit {
  @apply text-sm;
}

.product-action {
  @apply p-1;
  @apply flex flex-row justify-between items-center;
  @apply bg-gold-500 bg-opacity-20;
  @apply rounded-lg;
}

.product-action > a {
  @apply p-2;
  @apply rounded-xl;
}

.product-action > a > svg {
  @apply w-6 h-6;
}

.btn-compare, .btn-add-to-wishlist {
  /* @apply bg-gold-100; */
  @apply bg-white;
  @apply text-gold-500;
}

.btn-add-to-cart {
  @apply bg-gold-500;
  @apply text-gold-100;
}

</style>