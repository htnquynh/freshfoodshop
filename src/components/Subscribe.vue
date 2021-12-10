<template>
  <div class="subscribe-wrapper">
    <div class="subscribe">
      <div class="subscribe-bottom">
        <div class="subscribe-input">
          <input type="text" placeholder="Email address">
          <a href="#">Subscribe</a>
        </div>
      </div>

      <div class="subscribe-top">
        <img class="subscribe-img" src="../assets/image/snake.png" alt="">
        <div class="subscribe-msg">
          <h3>Don’t miss out!</h3>
          <p>Sign up for our newsletter to stay in the loop.</p>
        </div>
      </div>

      
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.subscribe-wrapper {
  @apply w-full;
  @apply h-56 sm:h-80;
}

.subscribe {
  @apply w-full;
  @apply flex flex-col;
  @apply relative;
}

.subscribe-top {
  @apply flex flex-row justify-center items-end gap-2 sm:gap-6;
  @apply p-4;
  @apply z-10;

  @apply sm:w-96 sm:px-0 sm:py-6 sm:mx-auto;
}

.subscribe-img {
  @apply h-32 w-32 sm:h-40 sm:w-40;
  @apply object-scale-down;
  @apply order-last;
}

.subscribe-msg {
  /* @apply mt-14; */
  @apply flex flex-col gap-1;
  /* @apply max-w-xs; */
}

.subscribe-msg > h3 {
  @apply text-base sm:text-xl font-extrabold;
}

.subscribe-msg > p {
  @apply text-xs sm:text-base font-normal;
}

.subscribe-bottom {
  @apply w-full h-44 sm:h-64;
  @apply px-4 py-7 sm:px-8 sm:py-16;
  @apply flex justify-center items-end;

  @apply bg-white;
  @apply absolute top-12 sm:top-16;
}

.subscribe-input {
  @apply w-full sm:w-96;
  @apply flex flex-row justify-center items-center;
}

.subscribe-input input[type='text'] {
  @apply bg-dominant;
  @apply px-4 py-2 sm:px-6;
  @apply w-full;
  @apply rounded-l-full;
  @apply text-sm sm:text-base;
}

.subscribe-input a {
  @apply bg-gold-500;
  @apply px-4 py-2;
  @apply rounded-r-full;
  @apply text-sm sm:text-base uppercase font-semibold;
}


</style>