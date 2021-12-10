<template>
  <div class="product-page">
    <div class="product">
      <div class="product-image">
        <img :src="imageGroup(group.image)"/>
      </div>
      <div class="product-spec">
        <h2 class="product-name">{{ group.title }}</h2>
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
            <p><span class="value">{{ group.calo }}</span> kcal</p>
          </div>

          <div class="group-price">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02z" />
              <circle cx="6.5" cy="6.5" r="1.5" />
            </svg>
            <p><span class="value">{{ group.price | toVND }}</span> </p>
          </div>
        </div>

        <div class="group-ingredients">
          <p>Ingredients</p>

          <!-- <div class="group-list-item-wrapper"> -->
            <div class="group-list-item">
              <GroupItem v-for="item in group.material" :key='item._id' :item='item.product'/>
            </div>
          <!-- </div> -->
        </div>
      </div>
    </div>

    <div class="product-description">
      <h4>Description</h4>
      <p>
        {{ group.description }}
      </p>
    </div>

    <div class="section-product">
      <div class="section-product-title">
        <h2 class="section-title">More Recommend Menu</h2>
        <hr />
      </div>
      <div class="section-carousel-product">
        <CarouselGroup :list_group="more_group" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselGroup from "../components/CarouselGroup.vue";
import GroupItem from "../components/GroupItemLarge.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: { CarouselGroup, GroupItem },
  data() {
    return {
      group: {},
      more_group: [],
    };
  },
  created() {
    this.group = this.selectedGroup;
    this.getGroups();
    this.more_group = this.groups;
  },
  computed: {
    ...mapGetters(["selectedGroup", "groups"]),
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
    ...mapActions(["getGroups"]),
    imageGroup(name) {
      return "/group/" + name;
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
  @apply py-4 sm:px-4 sm:py-8;
  @apply flex flex-col gap-4 md:flex-row md:gap-0;
  @apply w-full max-w-5xl mx-auto;

  @apply bg-white;

  @apply rounded-3xl;
  @apply border border-gold-500;
}

.product-image {
  @apply flex-shrink-0;
  @apply max-w-md lg:max-w-lg w-full md:w-1/2 h-auto;
  @apply mx-auto;
  @apply px-4 lg:px-8;
}

.product-image img {
  @apply w-full h-auto;
  @apply object-contain;
}

.product-spec {
  @apply w-full;
  @apply overflow-hidden;
  @apply px-4 lg:px-8;
  @apply flex flex-col gap-2 md:gap-3 lg:gap-4;
}

.product-name {
  @apply text-lg sm:text-2xl lg:text-3xl font-black tracking-wide;
}

.group-calo-price {
  @apply py-2;
  @apply w-full;
  @apply flex flex-col gap-2;
}

.group-calo {
  @apply flex flex-row items-center gap-3;
}

.group-calo svg {
  @apply w-10 h-10 p-2;
  @apply rounded-lg;
  @apply text-gold-500 bg-gold-100;
}

.group-calo p {
  @apply text-base md:text-lg;
}

.group-price {
  @apply flex flex-row items-center gap-3;
}

.group-price svg {
  @apply w-10 h-10 p-2;
  @apply rounded-lg;
  @apply text-peach-500 bg-peach-100;
}

.group-price p {
  @apply text-base md:text-lg;
}

span.value {
  @apply font-bold;
}

.group-ingredients {
  @apply w-full;
  @apply flex flex-col gap-3;
}

.group-ingredients > p {
  @apply text-base md:text-lg font-bold tracking-wide;
}

/* .group-list-item-wrapper {
  @apply p-2;
  @apply overflow-x-auto;
  @apply bg-gold-100;
  @apply w-full;
} */

.group-list-item {
  @apply flex flex-row gap-2;

  @apply p-2;
  @apply overflow-x-auto;
  @apply bg-gold-100;
  @apply w-full;
}

.group-list-item > div {
  /* @apply flex-shrink-0; */
}

*::-webkit-scrollbar {
  @apply hidden;
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
