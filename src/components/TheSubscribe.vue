<template>
  <div class="subscribe-wrapper">
    <div class="subscribe">
      <!-- <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 0.5H5C2 0.5 0 2 0 5.5V12.5C0 16 2 17.5 5 17.5H15C18 17.5 20 16 20 12.5V5.5C20 2 18 0.5 15 0.5ZM15.47 6.59L12.34 9.09C11.68 9.62 10.84 9.88 10 9.88C9.16 9.88 8.31 9.62 7.66 9.09L4.53 6.59C4.21 6.33 4.16 5.85 4.41 5.53C4.67 5.21 5.14 5.15 5.46 5.41L8.59 7.91C9.35 8.52 10.64 8.52 11.4 7.91L14.53 5.41C14.85 5.15 15.33 5.2 15.58 5.53C15.84 5.85 15.79 6.33 15.47 6.59Z" fill="currentColor"/>
      </svg> -->

      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18.5H6C3 18.5 1 17 1 13.5V6.5C1 3 3 1.5 6 1.5H16C19 1.5 21 3 21 6.5V13.5C21 17 19 18.5 16 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 7L12.87 9.5C11.84 10.32 10.15 10.32 9.12 9.5L6 7" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>


      <div class="subscribe-msg">
        <h3>Don't miss out!</h3>
        <p>Sign up for our newsletter to stay in the loop.</p>
      </div>

      <div class="subscribe-input">
        <input type="email" placeholder="Email address">
        <a href="#">Subscribe</a>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.subscribe-wrapper {
  /* @apply w-max mx-auto; */
  /* @apply bg-aqua-blue; */

  /* @apply p-4; */
  /* color: #ffffff; */
}

.subscribe {
  @apply w-full;
  /* @apply bg-aqua-blue; */

  /* background-color: #F27C4D; */

  /* @apply bg-secondary; */
  @apply bg-peach-300;
  /* @apply text-dominant; */
  @apply p-8;
  @apply flex flex-row flex-wrap justify-center items-center gap-8;


  @apply border-t-8 border-white;
}

.subscribe > svg {
  @apply text-peach-500;

  @apply w-36 h-auto;
  @apply opacity-40;
}

.subscribe-msg {
  @apply flex flex-col items-center;
}

.subscribe-msg h3 {
  @apply text-center font-playfair font-bold text-3xl;
}

.subscribe-msg p {
  @apply text-center font-playfair font-medium text-lg;
}

.subscribe-input {
  @apply flex flex-col items-center gap-2;
  @apply w-72;
}

.subscribe-input input[type='email'] {
  @apply w-full;
  @apply px-4 py-3;
  @apply focus:outline-none;
}

.subscribe-input a {
  @apply w-full;
  @apply p-3;
  @apply bg-peach-500;
  @apply text-white;
  @apply font-medium text-center uppercase tracking-wide;
  @apply box-border border-l-8 border-peach-500;


  box-shadow: rgba(253, 139, 124, 0.45) 0px 25px 20px -20px;
}

</style>