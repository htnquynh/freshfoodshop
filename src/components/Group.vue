<template>
  <div class="group-wrapper">
    <div class="group">
      <img 
        class="group-image" 
        :src="imageGroup(group.image)"
        @click="detailGroup()">
      <div class="group-spec">
        <p class="group-name">{{ group.title }}</p>
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

          <div class="group-list-item">
            <GroupItem v-for="item in group.material" :key='item._id' :product='item.product'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GroupItem from './GroupItem.vue';

import { mapActions } from "vuex";
export default {
  props: ["group"],
  components: {
    GroupItem,
  },
  filters: {
    toVND: function(value) {
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
    ...mapActions(["setSelectedGroup",]),
    imageGroup(name) {
      try {
        let img = "/group/" + name;
        return img;
      } catch (error) {
        console.log(error);
      }
    },
    detailGroup() {
      this.setSelectedGroup(this.group._id);
      const id = this.group._id;
      const path = `/group/${id}`
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
}
</script>

<style lang="postcss" scoped>
.group-wrapper {
  @apply bg-white;
  @apply w-72 sm:w-80;
  transition: 0.3s;
}

.group-wrapper:hover {
  transform: scale(1.1);
  box-shadow: rgba(57, 42, 35, 0.08) 0px 4px 12px;
}

.group {
  @apply flex flex-col;
}

.group-image {
  @apply w-64 h-64 sm:w-72 sm:h-72;
  @apply cursor-pointer;
  @apply object-cover;
}

.group-spec {
  @apply p-4;
  @apply flex flex-col gap-4;
}

.group-name {
  @apply text-lg font-extrabold;
}

.group-calo-price {
  @apply w-full;
  @apply flex flex-row justify-between;
}

.group-calo {
  @apply flex flex-row items-center gap-2;
}

.group-calo svg {
  @apply w-8 h-8 p-1;
  @apply rounded-lg;
  @apply text-gold-500 bg-gold-100;
}

.group-calo p {
  @apply text-sm leading-4;
}

.group-price {
  @apply flex flex-row items-center gap-2;
}

.group-price svg {
  @apply w-8 h-8 p-1;
  @apply rounded-lg;
  @apply text-peach-500 bg-peach-100;
}

.group-price p {
  @apply text-sm leading-4;
}

span.value {
  @apply font-bold;
}

.group-ingredients {
  @apply flex flex-col gap-2;
}

.group-ingredients > p {
  @apply text-sm font-medium tracking-wide;
}

.group-list-item {
  @apply flex flex-row gap-2;

  @apply p-2;
  @apply overflow-x-auto;
  background-color: #FAF9F5;
  @apply w-full;
}

*::-webkit-scrollbar {
  @apply hidden;
}

</style>