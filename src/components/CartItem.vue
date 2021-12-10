<template>
  <div class="group-item-wrapper">
    <div class="group-item">
      <img class="group-item-image" @click="goDetail(item._id)" :src="imageProduct(item.image)" >
      <div class="group-item-spec">
        <div class="product-spec">
          <p class="product-category">{{ item.category }}</p>
          <p class="product-name">{{ item.name }}</p>
          <div class="product-price-unit">
            <p class="product-price">{{ item.price | toVND }}</p>
            <p class="product-unit">/ 1 kg</p>
          </div>
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
              @change="updateCart2()"
              v-model="new_quantity"/>
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["item"],
  data() {
    return {
      new_quantity: 0,
    };
  },
  created() {
    this.new_quantity = this.item.quantity;
  },
  computed: {
    ...mapGetters(["cartItems", "totalPrice", "productList"]),
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
    ...mapActions(["updateCart", "removeCartItem", "getSelectedProduct"]),
        imageProduct(name) {
            try {
                let img = "/products/" + name;
                return img;
            } catch (error) {
                console.log(error);
            }
        },
        goDetail(product_id) {
            this.getSelectedProduct(product_id);
            this.$router.push({
                name: "Product",
            });
        },
        updateCart2() {
            if (this.new_quantity < 1 ) {
                this.new_quantity = this.item.quantity;
            } else if (this.item.quantity_remaining < this.new_quantity) {
                this.$swal.fire(
                  'Warning!',
                  'This product is out of stock!',
                  'warning'
                )
                this.new_quantity = this.item.quantity;
            } else {
                this.updateCart({'product_id': this.item._id, 
                                    'quantity': parseInt(this.new_quantity), 
                                    'itemPrice': this.item.price})
                // this.addItemToCart(this.item);
            }
        },
        minusQuantity() {
            if (this.new_quantity > 1) {
                this.new_quantity --;
            }
            this.updateCart2();
        },
        plusQuantity() {
            if (this.new_quantity < this.item.quantity_remaining) {
                this.new_quantity ++;
            }
            this.updateCart2();
        }
  },
}
</script>

<style lang="postcss" scoped>

.group-item-wrapper {
  @apply flex-shrink-0;
  @apply py-2 sm:py-3 md:py-4;
  @apply bg-white;
  @apply rounded-lg;
  @apply w-full;
}

.group-item {
  @apply flex flex-row items-center gap-1 sm:gap-3 md:gap-4 lg:gap-5;
}

.group-item-image {
  @apply w-20 h-20 sm:w-32 sm:h-32;
  @apply mx-2 sm:mx-3 md:mx-4 lg:mx-6;
  @apply object-contain;
}

.group-item-spec {
  @apply w-full;
  @apply flex flex-row items-center gap-2 sm:gap-3 md:gap-4;
  @apply px-2 sm:px-3 md:px-4 lg:px-5;
}

.product-spec {
  /* @apply flex-grow; */
  @apply w-full;
  @apply flex flex-col;
}

.product-category {
  @apply text-sm sm:text-base tracking-wide font-light;
}

.product-name {
  @apply text-base sm:text-lg font-bold;
}

.product-price-unit {
  @apply flex flex-row items-center gap-1 sm:gap-2;
  @apply mt-1 sm:mt-2;
}

.product-price {
  @apply text-base sm:text-lg font-black text-gold-500;
  
}

.product-unit {
  @apply text-sm md:text-base;
}

.product-qty {
  @apply w-max;
}

.input-quantity {
  @apply flex flex-col sm:flex-row;
  @apply bg-gold-100;
  @apply p-1;
  @apply w-max;
  @apply border border-gold-500;
  @apply rounded-full;
}

.input-quantity input[type="number"] {
  @apply flex-shrink-0;
  @apply bg-transparent;
  @apply w-8 sm:w-12 h-8;
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

</style>