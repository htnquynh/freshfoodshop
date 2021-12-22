<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="shop-page">
        <div v-show="compareProducts.length == 0" class="table-compare-wrapper">
          <div class="w-full flex flex-col items-center p-8">
            <img 
              src="../assets/image/empty.png"
              class="w-full max-w-xs h-auto mx-auto">
            <p class="text-xl md:text-2xl font-medium py-8">Nothing to Compare</p>
            
            <router-link to='/shop'>
                <button class="px-8 py-3 text-base uppercase text-white font-bold bg-gold-500"
                style="box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;">
                  Add now
                </button>
            </router-link>
          </div>
        </div>

        <div v-show="compareProducts.length != 0" class="table-compare-wrapper">
          <table class="table-compare">
            <thead class="thead-table">
              <tr>
                <th class="th-table">Product</th>
                <th class="th-table">Price</th>
                <th class="th-table">Calo</th>
                <th class="th-table">Status</th>
                <th class="th-table"></th>
                <th class="th-table"></th>
              </tr>
            </thead>
            <tbody class="tbody-table">
            <tr v-for="item in compareProducts" :key="item._id" class="row-product">
              <td class="td-table">
                <div class="col-product">
                <img class="group-item-image" :src="imageProduct(item.image)" >
                <div class="product-spec">
                  <p class="product-category">{{ item.category }}</p>
                  <p class="product-name">{{ item.name }}</p>
                </div>
                </div>
              </td>
              <td class="td-table">
                <div class="product-price-unit">
                  <p class="product-price">{{ item.price | toVND }}</p>
                  <p class="product-unit">/ 1 kg</p>
                </div>
              </td>

              <td class="td-table">
                <div class="product-calo">
                  <p><span class="value">{{ item.calo }}</span> kcal</p>
                </div>
              </td>

              <td class="td-table">
                <div class="product-status">
                  <p v-if="item.quantity_remaining == '0'" class="text-sm font-bold text-fail uppercase">Out of stock</p>
                  <p v-else class="text-sm font-bold text-secondary uppercase">In stock</p>
                </div>
              </td>
              <td class="td-table">
                <a 
                  v-if="item.quantity_remaining != '0'"
                  class="btn-add-to-cart" 
                  @click="addItemToCart(item)">
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
              </td>
              <td class="td-table">
                <button class="btn-remove-item" @click="deleteProduct(item._id)">
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
              </td>
            </tr>
            </tbody>
          </table>
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

import { mapActions, mapGetters } from "vuex";
import CartAPI from "../api/CartAPI";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["is_login", "compareProducts"]),
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
  watch: {
  },
  created() {
  },
  methods: {
    ...mapActions(["deleteCompareProduct", "getUserCart", "start_load", "stop_load"]),
    imageProduct(name) {
      try {
        let img = "/products/" + name;
        return img;
      } catch (error) {
        console.log(error);
      }
    },
    async addItemToCart(product) {
      if (this.is_login) {
        this.start_load();
        let token = JSON.parse(sessionStorage.getItem("user_login"));
        let config = {
          headers: { Authorization: "bearer " + token },
        };
        let items = [{product: product._id, quantity: 1, price: product.price}];
        await CartAPI.add(items, config)
        .then((res) => {
          console.log(res.data);
          this.getUserCart().then(() => {
            this.stop_load();
            this.$swal.fire(
              'Oh great!',
              'Add product to cart successfully!',
              'success'
            );
          });
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
    deleteProduct(product_id) {
      this.$swal.fire({
        title: 'Are you sure you want to remove this product?',
        showCancelButton: true,
        confirmButtonText: 'Remove',
      }).then((result) => {
        if (result.isConfirmed) {
          this.start_load();
          this.deleteCompareProduct(product_id).then(() => {
            this.stop_load();
            this.$swal.fire(
              'Done!',
              'Remove Successfully!',
              'success'
            )
          });
        } 
      })
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
  @apply w-full;
  @apply p-4;
}

.shop-page {
  @apply w-full max-w-5xl mx-auto;
  @apply overflow-hidden;
}

.table-compare-wrapper {
  /* @apply p-4; */
  @apply w-full;
  @apply overflow-x-auto;
}

.table-compare {
  /* @apply table-auto;
  @apply w-full;
  @apply p-2; */

  /* @apply min-w-full divide-y divide-gray-200;
  @apply overflow-auto; */
  @apply w-max mx-auto;
}

/* .thead-table {
  @apply bg-gray-50;
} */

.thead-table > tr {
  @apply text-sm font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600;
}

.thead-table > tr > th{
  @apply px-4 py-3;
}

.tbody-table {
  @apply bg-white;
}

.td-table {
  @apply px-4 py-3 border;
}

.col-product {
  @apply flex items-center text-sm;
}

.group-item-image {
  @apply w-20 h-20;
  @apply bg-white;
  @apply rounded-xl;
  @apply p-2;
  @apply object-contain;
}

.product-spec {
  @apply col-span-7 lg:col-span-5;
  @apply flex-grow;
  /* @apply w-full; */
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
}

.product-price {
  @apply text-base font-semibold text-gold-500;
  /* color: #97EA07; */
}

.product-unit {
  @apply text-sm font-medium;
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


a.btn-add-to-cart {
  /* @apply w-full md:w-max; */
  @apply flex flex-row justify-center items-center gap-2;
  @apply px-4 py-2;
  @apply bg-gold-500 text-white;
  @apply text-base font-semibold capitalize;

  box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;
}

.btn-remove-item {
  @apply flex items-center justify-center;
  @apply p-2;
  @apply text-secondary text-opacity-50;
}

.btn-remove-item svg {
  @apply w-5 h-5;
}

</style>