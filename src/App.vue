<template>
  <div id="app">
    <router-view />
    <LoadScreen :isLoading="isLoading" />
    <button class="back-to-top" @click="backToTop()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enable-background="new 0 0 24 24"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <rect fill="none" height="24" width="24" />
        <path d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
      </svg>
    </button>
  </div>
</template>
<script>
import LoadScreen from "./components/LoadScreen.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    LoadScreen,
  },
  data() {
    return {};
  },
  created() {
    console.log("In App.vue: " + this.isLoading);
  },
  computed: {
    ...mapGetters(["isLoading"]),
  },
  methods: {
    backToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
  },
};
</script>
<style lang="postcss" scoped>
.back-to-top {
  @apply fixed rounded-full;
  @apply bottom-4 right-4;
  @apply z-20;
  @apply bg-gold-500;
  @apply p-2;
}
.back-to-top svg {
  @apply w-6 h-6;
}
</style>
