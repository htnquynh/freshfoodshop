<template>
  <div class="product-page">
    <div class="product">
      <div class="product-image">
        <img :src="imageProduct(product.image)"/>
      </div>
      <div class="product-spec">
        <p class="product-category">{{ product.category }}</p>
        <h2 class="product-name">{{ product.name }}</h2>
        <div class="product-calo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="currentColor"
          >
            <g>
              <rect fill="none" height="24" width="24" y="0" />
            </g>
            <g>
              <path
                d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z"
              />
            </g>
          </svg>
          <p><span class="value">{{ product.calo }}</span> kcal</p>
        </div>

        <div class="product-price-unit">
          <p class="product-price">{{ product.price | toVND }}</p>
          <p class="product-unit">/ 1 kg</p>
        </div>

        <div class="product-qty">
          <div class="input-quantity">
            <button class="btn-minus-qty" @click="minusQuantity()">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <input type="number"
              min=1
              max=99999
              v-model="quantity"/>
            <button class="btn-add-qty" @click="plusQuantity()">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                  fill="currentColor"
                />
                <path
                  d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="product-action">
          <a class="btn-add-to-cart" @click="addToCart()">
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
          <a class="btn-add-to-wishlist">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="product-description">
      <h4>Description</h4>
      <p>
        {{ product.description }}
      </p>
    </div>

    <div class="section-product">
      <div class="section-product-title">
        <h2 class="section-title">More Product</h2>
        <hr />
      </div>
      <div class="section-carousel-product">
        <Carousel :list_product="more_product" />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { Carousel },
  data() {
    return {
      product: {},
      quantity: 1,
      more_product: [],
    };
  },
  created() {
    this.product = this.selectedProduct;
    this.getProducts();
    this.more_product = this.productList;
  },
  computed: {
    ...mapGetters(["is_login", "selectedProduct", "productList"]),
  },
  filters: {
    toVND: function (value) {
      try {
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
      } catch (error) {
        console.log(error);
      }
    },
  },
  methods: {
    ...mapActions(["getProducts", "addItemToCart"]),
    imageProduct(name) {
      return "/products/" + name;
    },
    minusQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    plusQuantity() {
      if (this.quantity < this.product.quantity_remaining) {
        this.quantity++;
      }
    },
    addToCart() {
      if (this.quantity < 1) {
        // this.quantity = 1;
        // this.$alert("Quantity must be at least 1!", "Add To Cart", "warning");
        return;
      }

      if (this.is_login) {
        let productInCart = this.cartItems.filter((item) => item._id == this.product._id);
        if (productInCart.length != 0) {
          if (this.product.quantity_remaining < productInCart[0].quantity + this.quantity) {
            this.quantity = this.product.quantity_remaining;
            // this.$alert(
            //   "This product is out of stock!",
            //   "Add To Cart",
            //   "warning"
            // );
          } else {
            // this.addItemToCart(this.item);
            this.addItemToCart({
              product_id: this.product._id,
              quantity: this.quantity,
              itemPrice: this.product.price,
            });
          }
        } else if (this.product.quantity_remaining < this.quantity) {
          // this.$alert(
          //   "This product is out of stock!",
          //   "Add To Cart",
          //   "warning"
          // );
        } else {
          this.addItemToCart({
            product_id: this.product._id,
            quantity: this.quantity,
            itemPrice: this.product.price,
          });
          // this.addItemToCart(this.item);
        }
      } else {
        this.$router.push({
          name: "Login",
        });
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.product-page {
  @apply py-4 lg:py-10 px-4;
  @apply flex flex-col items-start md:items-center gap-2 md:gap-6 lg:gap-8;
}

.product {
  @apply px-4 py-8;
  @apply flex flex-col gap-4 sm:flex-row md:gap-0;
  @apply w-full max-w-5xl mx-auto;

  @apply bg-white;

  @apply rounded-3xl;
  @apply border border-gold-500;
}

.product-image {
  @apply flex-shrink-0;
  @apply max-w-sm lg:max-w-lg w-full sm:w-1/2 h-auto;
  @apply mx-auto;
  @apply px-4 lg:px-8;
}

.product-image img {
  @apply w-full h-auto;
  @apply object-contain;
}

.product-spec {
  @apply w-full;
  @apply px-4 lg:px-8;
  @apply flex flex-col gap-2 md:gap-3 lg:gap-4;
}

.product-category {
  @apply font-medium tracking-wide;
}

.product-name {
  @apply text-lg sm:text-2xl lg:text-3xl font-black tracking-wide;
}

.product-calo {
  @apply flex flex-row items-center gap-2;
}

.product-calo svg {
  @apply w-10 h-10 p-2;
  @apply rounded-lg;
  @apply text-gold-500 bg-gold-100;
}

.product-calo p {
  @apply text-base md:text-lg;
}

span.value {
  @apply font-bold;
}

.product-price-unit {
  @apply flex flex-row items-center gap-3;
  @apply pt-2;
}

.product-price {
  @apply text-lg sm:text-xl lg:text-2xl font-black text-gold-500;
}

.product-unit {
  @apply text-base;
}

.product-qty {
  @apply w-max;
}

.input-quantity {
  @apply flex flex-row;
  @apply bg-gold-100;
  @apply p-1;
  @apply w-max;
  @apply border border-gold-500;
  @apply rounded-full;
}

.input-quantity input[type="number"] {
  @apply flex-shrink-0;
  @apply bg-transparent;
  @apply w-12 h-8;
  @apply text-center font-bold antialiased;
  @apply focus:outline-none;
}

.input-quantity input[type="number"]::-webkit-outer-spin-button,
.input-quantity input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.btn-minus-qty,
.btn-add-qty {
  @apply flex items-center justify-center;
  @apply w-8 h-8;
  @apply bg-gold-500;
  @apply rounded-full;
}

.product-action {
  @apply py-4;
  @apply flex flex-row gap-3;
}

a.btn-add-to-cart {
  @apply w-full md:w-52;
  @apply flex flex-row justify-center items-center gap-2;
  @apply p-2;
  @apply bg-gold-500 text-white;
  @apply text-lg font-semibold;
}

a.btn-add-to-wishlist {
  @apply flex flex-row justify-center items-center gap-2;
  @apply p-2;
  @apply bg-gold-100 text-gold-500;
}

.product-description {
  @apply w-full max-w-2xl mx-auto;
  @apply p-4;
  @apply flex flex-col items-center gap-2 lg:gap-4;
  @apply leading-relaxed;
}

.product-description h4 {
  @apply font-bold uppercase;
  @apply lg:text-lg;
}

.product-description p {
  @apply text-justify;
}

.section-product {
  @apply w-full;
  @apply flex flex-col items-center gap-4;
  @apply py-4;
}

.section-product-title {
  @apply p-2 md:p-4;
  @apply flex flex-col items-start gap-3 md:gap-4;
}

.section-product-title h2.section-title {
  @apply font-bold md:font-extrabold text-lg md:text-2xl;
  @apply uppercase;
}

.section-product-title > hr {
  @apply w-full max-w-3xl;
  @apply border-t md:border-t border-secondary;
}

.section-carousel-product {
  @apply w-full;
  /* @apply p-2; */
}
</style>
