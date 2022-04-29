<template>
  <div class="group-item-wrapper">
    <div class="group-item">
      <img class="group-item-image" :src="item.product.image" />
      <div class="group-item-spec">
        <div class="product-spec">
          <p class="product-category">{{ item.product.category }}</p>
          <p class="product-name">{{ item.product.name }}</p>
          <div class="product-price-unit">
            <p class="product-price">{{ item.product.price | toVND }}</p>
            <p class="product-unit">/ 1 kg</p>
          </div>
        </div>

        <div class="product-action">
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
            <input
              type="number"
              min="1"
              max="99999"
              @change="updateQuantity()"
              v-model="new_quantity"
            />
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

          <button
            class="btn-remove-item"
            @click="removeByProductId(item.product._id)"
          >
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
  watch: {
    item: function () {
      this.new_quantity = this.item.quantity;
    },
  },
  computed: {},
  filters: {
    toVND: function (value) {
      if (typeof value !== "number") {
        value = parseInt(value);
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
      "removeByProductId",
      "getSelectedProduct",
      "start_load",
      "stop_load",
    ]),
    updateQuantity() {
      if (this.new_quantity < 1) {
        this.new_quantity = this.item.quantity;
      } else if (this.item.product.quantity_remaining < this.new_quantity) {
        this.$swal.fire("Warning!", "This product is out of stock!", "warning");
        this.new_quantity = this.item.quantity;
      } else {
        this.start_load();
        let new_item = {
          id: this.item.product._id,
          quantity: parseInt(this.new_quantity),
          price: this.item.product.price,
        };
        this.addItemToCart(new_item).then(() => {
          this.stop_load();
        });
      }
    },
    minusQuantity() {
      if (this.new_quantity > 1) {
        this.new_quantity--;
        this.updateQuantity();
      }
    },
    plusQuantity() {
      if (this.new_quantity < this.item.product.quantity_remaining) {
        this.new_quantity++;
        this.updateQuantity();
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.group-item-wrapper {
  /* @apply flex-shrink-0; */
  @apply p-2;
  @apply bg-white;
  @apply rounded-2xl;
  @apply w-full;

  box-shadow: rgba(57, 42, 35, 0.05) 0px 12px 10px -10px;

  transition: 0.3s;
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
  @apply text-sm tracking-wide font-light;
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
  /* @apply flex-grow; */
  /* @apply w-full; */
  @apply flex flex-row justify-between items-center;
}

.input-quantity {
  @apply flex flex-col items-center;
  /* @apply bg-peach-100; */
  @apply p-1;
  @apply w-max;
  /* @apply border border-gold-500; */

  /* @apply rounded-full; */

  /* @apply border; */
  /* @apply bg-dominant; */
}

.input-quantity input[type="number"] {
  @apply flex-shrink-0;
  @apply bg-transparent;
  @apply w-6 sm:w-6 h-6;
  /* @apply bg-dominant; */
  @apply text-sm text-center font-semibold antialiased;
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
  @apply w-6 h-6;
  @apply p-1;
  /* @apply bg-gold-500; */
  /* @apply rounded-full; */

  @apply bg-dominant;
}

.btn-remove-item {
  @apply flex items-center justify-center;
  @apply w-6 h-6;
  @apply p-1;

  /* @apply order-first; */
}

.btn-minus-qty svg {
  /* @apply transform scale-110; */
}

.btn-add-qty svg {
  /* @apply transform scale-110; */
}
</style>
