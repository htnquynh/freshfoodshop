<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="product-page">
        <div class="product-detail">
        
          <div class="product-col">
            <div class="product-image">
              <img :src="imageProduct(selectedProduct.image)"/>
            </div>
          </div>
          
          <div class="product-col">
            <div class="product-spec">
              <p class="product-category">{{ selectedProduct.category }}</p>
              <h2 class="product-name">{{ selectedProduct.name }}</h2>

              <div class="product-price-unit">
                <p class="product-price">{{ selectedProduct.price | toVND }}</p>
                <p class="product-unit">/ 1 kg</p>
              </div>

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
                <p><span class="value">{{ selectedProduct.calo }}</span> kcal</p>
              </div>
              <p class="product-short-description">
                {{ selectedProduct.description.substring(0, 240) + '...'}}
              </p>

              <div class="product-qty flex flex-row items-center gap-4">
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

                <p class="py-4">{{ this.selectedProduct.quantity_remaining }}kg available</p>
              </div>

              <div class="product-action">
                <p class="font-medium text-peach-500"
                  v-show="selectedProduct.quantity_remaining <= 0"
                >
                  Out of Stock
                </p>
                <a 
                  v-show="selectedProduct.quantity_remaining > 0" 
                  class="btn-add-to-cart" 
                  @click="addToCart()">
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
                <a 
                  class="btn-add-to-wishlist"
                  @click="addToWishlist(selectedProduct)">
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

                  <span>Like it!</span>
                </a>
              </div>
              
            </div>
          </div>
        </div>

        <div class="product-description">
          <h4>More information</h4>
          <p>
            {{ selectedProduct.description }}
          </p>
        </div>

        <div class="section-featured-product">
          <div class="section-product">
            <div class="section-product-title">
              <h2 class="section-title">
                You May Also Like.
              </h2>
              <router-link to="/shop">
                <a class="hover:text-gold-500">
                  More
                  <svg xmlns="http://www.w3.org/2000/svg" 
                    enable-background="new 0 0 24 24" 
                    height="24px" 
                    viewBox="0 0 24 24" 
                    width="24px" fill="currentColor">
                    <rect fill="none" height="24" width="24" />
                    <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                  </svg>
                </a>
              </router-link>
            </div>
              <div class="section-list-product">
                <Product class="product" v-for="item in more_product" :key='item._id' :product='item'/>
              </div>
          </div>
        </div>
      </div>
    </div>
    <TheSubscribe/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import TheSubscribe from '../components/TheSubscribe.vue';
import MiniCart from '../components/MiniCart.vue';

import Product from '../components/Product.vue';

import { mapActions, mapGetters } from "vuex";
import CartAPI from "../api/CartAPI";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
    Product,
  },
  data() {
    return {
      product: {},
      quantity: 1,
      more_product: [],
    };
  },
  created() {
    this.getProducts();
    this.more_product = this.products.slice(0, 4);
  },
  computed: {
    ...mapGetters(["is_login", "selectedProduct", "products", "wishlist"]),
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
    ...mapActions(
      [
        "getProducts", 
        "getUserCart",
        "addItemToCart", 
        "addItemToWishlist",
        "addItemsToWishlist",
      ]
    ),
    imageProduct(name) {
      return "/products/" + name;
    },
    minusQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    plusQuantity() {
      if (this.quantity < this.selectedProduct.quantity_remaining) {
        this.quantity++;
      }
    },
    addToCart() {
      if (this.quantity < 1) {
        this.quantity = 1;
        this.$swal.fire(
          'Uh oh!',
          'Quantity must be at least 1!',
          'fail'
        );
        return;
      }
      if (this.selectedProduct.quantity_remaining < this.quantity) {
        this.quantity = this.selectedProduct.quantity_remaining;
        this.$swal.fire(
          'Uh oh!',
          `This product is only ${this.selectedProduct.quantity_remaining}kg`,
          'fail'
        );
        return;
      }
      this.addItemToCart();
    },

    async addItemToCart() {
      if (this.is_login) {
        let token = JSON.parse(sessionStorage.getItem("user_login"));
        let config = {
          headers: { Authorization: "bearer " + token },
        };

        let total_price = parseInt(this.selectedProduct.price) * this.quantity;

        console.log(parseInt(this.selectedProduct.price));
        console.log(this.quantity);
        console.log(total_price); 
        
        let items = [
          {
            product: this.selectedProduct._id, 
            quantity: this.quantity, 
            price: total_price.toString(),
          }
        ];
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
      await this.addItemToWishlist(product).then((res) => {
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
.home {
  @apply flex flex-col;
}

.home > .header-page {
  @apply w-full;
}

.page-content {
  @apply p-4;
  /* @apply flex flex-col; */
}


.product-page {
  @apply w-full max-w-5xl mx-auto;
  /* @apply py-4 lg:py-10 px-4; */
  @apply flex flex-col gap-4 md:gap-8;

  @apply md:pt-4 md:pb-8;
}

.product-detail {
  @apply grid grid-flow-row sm:grid-flow-col sm:auto-cols-auto place-items-start gap-4 md:gap-8;
  @apply w-full;

  @apply bg-white;

  @apply p-4 md:p-6 lg:p-8;
  @apply rounded-3xl;
}

.product-image {
  /* @apply w-96 h-96; */
  @apply w-full sm:w-max;
  @apply bg-dominant;
  @apply p-2 md:p-8;

  @apply rounded-2xl;
}

.product-image img {
  @apply w-full h-auto sm:w-72 md:h-72 lg:w-96 lg:h-96;
  /* @apply w-full h-full; */
  /* @apply w-full h-auto; */
  @apply object-contain;
}

.product-spec {
  @apply w-full;
  /* @apply px-4 lg:px-8; */
  @apply flex flex-col gap-0;
}

.product-category {
  @apply font-medium;
}

.product-name {
  @apply text-3xl font-bold;
  @apply py-2;

  /* @apply underline;
  text-underline-offset: 0px;
  text-decoration-thickness: 4px;
  text-decoration-color: theme('colors.aqua-blue'); */

  @apply relative;
  z-index: 1;
}

.product-name::after {
  content: '';
  display: block;

  width: 128px;
  height: 12px;

  background-color: theme('colors.aqua-blue');

  position: absolute;
  bottom: 8px;

  z-index: -1;
}

.product-calo {
  @apply flex flex-row items-center gap-2;

  @apply py-4;
}

.product-calo svg {
  @apply w-8 h-8 p-1;
  @apply rounded-lg;
  @apply bg-gold-500 text-gold-100;
}

.product-calo p {
  @apply text-base;
}

span.value {
  @apply font-bold;
}

.product-price-unit {
  @apply flex flex-row items-center gap-3;
}

.product-price {
  @apply text-xl font-black text-gold-500;

  @apply py-2;
}

.product-unit {
  @apply text-base;
}

.product-short-description {
  @apply w-full;
  @apply text-base;
}

.product-qty {
  /* @apply w-max; */
  @apply pt-6;
}

.input-quantity {
  @apply flex flex-row items-center;
  /* @apply bg-secondary; */
  @apply p-1;
  @apply w-max;
  /* @apply border border-gold-500; */
  /* @apply border border-secondary; */

  @apply bg-dominant;
  /* @apply rounded-full; */
}

.input-quantity input[type="number"] {
  @apply flex-shrink-0;
  @apply bg-transparent;
  @apply w-10 h-8;
  @apply p-1;
  /* @apply text-gold-500; */
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
  /* @apply bg-gold-500; */
  /* @apply rounded-full; */
  /* @apply bg-secondary text-white; */
}

.btn-minus-qty {
  @apply text-secondary bg-white;
  /* @apply transform translate-x-2; */
}

.btn-add-qty {
  
  @apply text-secondary bg-white;
  /* @apply transform -translate-x-2; */
}

.btn-minus-qty svg,
.btn-add-qty svg {
  @apply w-7 h-7;
}

.product-action {
  @apply py-4;
  @apply flex flex-row flex-wrap items-center gap-3;
}

a.btn-add-to-cart {
  @apply w-full md:w-max;
  @apply flex flex-row justify-center items-center gap-2;
  @apply px-8 py-4;
  @apply bg-gold-500 text-white;
  @apply text-base font-semibold capitalize;

  box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;
}

a.btn-add-to-wishlist {
  /* @apply w-full; */
  @apply w-full md:w-max;
  @apply flex flex-row justify-center items-center gap-2;
  /* @apply px-4 py-2; */
  @apply px-8 py-4;
  @apply bg-gold-100 text-secondary;
  /* @apply border border-gold-500; */
  @apply text-base font-semibold capitalize;

  /* box-shadow: rgba(57, 42, 35, 0.45) 0px 12px 10px -10px; */

  box-shadow: rgba(255, 201, 40, 0.45) 0px 12px 10px -10px;
}

.product-description {
  @apply w-full;
  @apply p-2 md:px-8 md:py-6;
  @apply flex flex-col gap-3;
  @apply leading-relaxed;
}

.product-description h4 {
  @apply font-bold uppercase;
  @apply text-lg;

  @apply flex flex-row items-center gap-3;
  /* @apply w-max; */
}

.product-description h4:before {
  content: '';
  display: block;

  @apply flex-grow-0;

  width: 64px;
  height: 1px;

  background-color: theme('colors.secondary');

  /* position: absolute;
  bottom: 8px; */

  z-index: -1;
}

.product-description h4:after {
  content: '';
  display: block;

  @apply flex-grow-0;

  width: 100%;
  height: 1px;

  background-color: theme('colors.secondary');

  /* position: absolute;
  bottom: 8px; */

  z-index: -1;
}

.product-description p {
  @apply text-justify;
}

.section-featured-product {
  @apply w-full max-w-5xl mx-auto;
  @apply py-10;
  @apply flex flex-row justify-between gap-16;
}

.section-product-title {
  @apply w-full;
  @apply flex flex-row items-center justify-between gap-2;
}

.section-product-title h2.section-title {
  @apply font-extrabold  text-2xl sm:text-3xl md:text-4xl;
}

.section-product-title a {
  @apply w-max flex-shrink-0;
  @apply flex flex-row items-center gap-2;

}

.section-product-title a svg {
  @apply w-5 h-5;
}

.section-product-title p {
  @apply text-center;
}

.section-featured-product .section-product {
  @apply w-full max-w-5xl;
  @apply flex flex-col items-end gap-8;
}

.section-featured-product .section-list-product {
  @apply w-full;

  @apply grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4;
}

</style>
