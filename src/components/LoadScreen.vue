<template>
  <div v-show="isLoading" class="loading-screen">
    <svg class="w-40 h-20" viewBox="-2000 -1000 4000 2000">
      <path id="inf" d="M354-354A500 500 0 1 1 354 354L-354-354A500 500 0 1 0-354 354z"></path>
      <use xlink:href="#inf" stroke-dasharray="1570 5143" stroke-dashoffset="6713px"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
}
</script>


<style lang="postcss" scoped>
.loading-screen {
  @apply z-50;
  @apply fixed inset-0;
  @apply w-screen h-screen;
  @apply bg-gray-900 bg-opacity-50;
  @apply text-gold-500;
  @apply flex flex-col justify-center items-center;
}

svg {
  @apply bg-transparent;
	fill: none;
  @apply stroke-current;
	stroke-linecap: round;
	stroke-width: 8rem;
}

use {
	stroke: #fff;
	animation: inf 1.2s linear infinite;
}

@keyframes inf { to { stroke-dashoffset: 0px } }

</style>