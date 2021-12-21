<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="product-page">
        <div class="product-detail">
        
          <div class="product-col">
            <div class="product-image">
              <img :src="imageProduct(selectedGroup.image)"/>
            </div>
          </div>
          
          <div class="product-col">
            <div class="product-spec">

              <h2 class="product-name">{{ selectedGroup.title }}</h2>

              <div class="group-calo-price">
                <div class="group-calo">
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <g>
                      <rect fill="none" height="24" width="24" y="0" />
                    </g>
                    <g>
                      <path d="M19.48,12.35c-1.57-4.08-7.16-4.3-5.81-10.23c0.1-0.44-0.37-0.78-0.75-0.55C9.29,3.71,6.68,8,8.87,13.62 c0.18,0.46-0.36,0.89-0.75,0.59c-1.81-1.37-2-3.34-1.84-4.75c0.06-0.52-0.62-0.77-0.91-0.34C4.69,10.16,4,11.84,4,14.37 c0.38,5.6,5.11,7.32,6.81,7.54c2.43,0.31,5.06-0.14,6.95-1.87C19.84,18.11,20.6,15.03,19.48,12.35z M10.2,17.38 c1.44-0.35,2.18-1.39,2.38-2.31c0.33-1.43-0.96-2.83-0.09-5.09c0.33,1.87,3.27,3.04,3.27,5.08C15.84,17.59,13.1,19.76,10.2,17.38z" />
                    </g>
                  </svg>
                  <p><span class="value">{{ selectedGroup.calo }}</span> kcal</p>
                </div>

                <div class="group-price">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z" />
                    <circle cx="6.5" cy="6.5" r="1.5" />
                  </svg>
                  <p><span class="value">{{ selectedGroup.price | toVND }}</span> </p>
                </div>
              </div>

              <div class="product-action">
                <p class="font-medium text-lg text-peach-500"
                  v-if="!enough_quantity"
                >
                  Out of Stock
                </p>
                <a 
                  v-if="enough_quantity" 
                  class="btn-add-to-cart" 
                  @click="addAllToCart()">
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
                  <span>Add all to cart</span>
                </a>
              </div>

              <div class="group-ingredients">
                <p>Ingredients</p>

                <div class="group-list-item-wrapper">
                  <div class="group-list-item">
                    <GroupItem v-for="item in selectedGroup.material" :key='item._id' :product='item.product'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="product-description">
          <h4>More information</h4>
          <p>
            {{ selectedGroup.description }}
          </p>
        </div>

        <div class="section-recommend-menu">
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
              <Group v-for="item in more_group" :key='item._id' :group='item'/>
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

import Group from '../components/Group.vue';
import GroupItem from "../components/GroupItem.vue";

import { mapActions, mapGetters } from "vuex";
import CartAPI from "../api/CartAPI";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
    Group,
    GroupItem
  },
  data() {
    return {
      more_group: [],
    };
  },
  created() {
    // this.product = this.selectedGroup;
    this.getGroups();
    this.more_group = this.groups.slice(0, 3);
    // this.enough_quantity = this.checkQuantity();
    // console.log(this.enough_quantity);
  },
  computed: {
    ...mapGetters(["is_login", "selectedGroup", "groups"]),
    enough_quantity() {
      return this.checkQuantity();
    }
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
    ...mapActions(["getGroups", "getUserCart"]),
    imageProduct(name) {
      return "/group/" + name;
    },
    checkQuantity(){
      for (const item of this.selectedGroup.material) {
        console.log(item.product.quantity_remaining);
        if(item.product.quantity_remaining == 0) {
          console.log(item.product.quantity_remaining == 0);
          return false;
        }
      }
      return true;
    },
    async addAllToCart() {
      if (this.is_login) {
        let token = JSON.parse(sessionStorage.getItem("user_login"));
        let config = {
          headers: { Authorization: "bearer " + token },
        };

        let items = [];

        for (const item of this.selectedGroup.material) {
          console.log(item.product.price);
          items.push(
            {
              product: item.product._id, 
              quantity: 1, 
              price: item.product.price,
            }
          )
        }
        console.log(items);

        CartAPI.add(items, config)
        .then((res) => {
          console.log(res.data);
          this.$swal.fire(
            'Oh great!',
            'Add all product to cart successfully!',
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
}

.product-page {
  @apply w-full max-w-5xl mx-auto;
  @apply flex flex-col gap-4 md:gap-8;
  @apply md:pt-4 md:pb-8;
}

.product-detail {
  @apply grid grid-flow-row sm:grid-flow-col sm:auto-cols-auto place-content-stretch place-items-start gap-4 md:gap-8;
  @apply w-full;

  @apply bg-white;

  @apply p-4 md:p-6 lg:p-8;
  @apply rounded-3xl;
}

/* .product-col {
  @apply w-full;
  background-color: antiquewhite;
} */

/* .product-image {
  @apply w-full h-auto sm:w-72 md:h-72 lg:w-96 lg:h-96;
  @apply rounded-2xl;
}

.product-image img {
  @apply w-full h-full;
  @apply object-cover;
  @apply rounded-2xl;
} */

.product-image {
  @apply w-full sm:w-max;
  @apply bg-dominant;
  @apply p-2 md:p-8;

  @apply rounded-2xl;
}

.product-image img {
  @apply w-full h-auto sm:w-72 md:h-72 lg:w-96 lg:h-96;
  @apply object-cover;
}

.product-spec {
  @apply w-full h-full;
  /* @apply flex-grow-0; */
  @apply flex flex-col gap-0;
}

.product-name {
  @apply text-3xl font-bold;
  @apply py-2;
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

.group-calo-price {
  @apply py-4;
  @apply w-full;
  @apply flex flex-row justify-between items-center gap-2;
}

.group-calo, .group-price {
  @apply flex flex-row items-center gap-3;
}

.group-calo svg, .group-price svg {
  @apply w-8 h-8 p-1;
  @apply rounded-lg;
}

.group-calo svg {
  @apply text-gold-500 bg-gold-100;
}

.group-price svg {
  @apply text-peach-500 bg-peach-100;
}

.group-calo p, .group-price p {
  @apply text-base;
}

span.value {
  @apply font-bold;
}

.product-short-description {
  @apply w-full;
  @apply text-base;
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
}

.product-description h4:before {
  content: '';
  display: block;
  @apply flex-grow-0;
  width: 64px;
  height: 1px;
  background-color: theme('colors.secondary');
  z-index: -1;
}

.product-description h4:after {
  content: '';
  display: block;
  @apply flex-grow-0;
  width: 100%;
  height: 1px;
  background-color: theme('colors.secondary');
  z-index: -1;
}

.product-description p {
  @apply text-justify;
}

.product-col {
  @apply max-w-full h-full;
  @apply overflow-hidden;
}

.group-ingredients {
  @apply w-full h-full;
  @apply pt-6;
  @apply flex flex-col justify-end gap-3;
}

.group-ingredients > p {
  @apply text-lg font-bold;
}

.group-list-item-wrapper {
  @apply bg-dominant;
  @apply p-1 sm:p-2 md:p-3 lg:p-4;
}

.group-list-item {
  @apply w-full;
  @apply overflow-auto;
  @apply flex flex-row gap-4;
  @apply p-2;
}

.group-list-item::-webkit-scrollbar {
  @apply hidden;
}

.section-recommend-menu {
  @apply w-full max-w-5xl mx-auto;
  @apply py-10;
  @apply flex flex-row justify-between items-center gap-0;
}

.section-recommend-menu .section-product {
  @apply w-full max-w-5xl;
  @apply flex flex-col items-end gap-8;
}

.section-recommend-menu .section-product .section-list-product {
  @apply w-full flex-shrink-0;
  @apply grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 place-items-center;
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

</style>
