<template>
  <div class="alert" :class="[type]">
    <div class="alert-image">
      <div class="alert-image-circle"></div>
      <img class="img-success" src="../assets/image/PearHappy.png" alt="">
      <img class="img-fail" src="../assets/image/PearSad.png" alt="">
    </div>

    <div class="alert-msg msg-success">
      <p class="alert-title">Success!</p>
      <p class="alert-content">You did the thing! Let’s move on.</p>
    </div>

    <div class="alert-msg msg-fail">
      <p class="alert-title">Oh no!</p>
      <p class="alert-content">Something went wrong. Double check your work.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'type',
  ]
}
</script>

<style lang="postcss" scoped>
.alert {
  @apply absolute top-28 right-4;
  @apply w-80;
  @apply p-4;
  @apply flex flex-row items-center gap-4;
  @apply z-10;
  box-shadow: 0px 4px 4px rgba(81, 229, 131, 0.4);
  border-radius: 18px;
  @apply text-white;
}

.success {
  @apply bg-success;
  box-shadow: 0px 4px 4px rgba(81, 229, 131, 0.4);
}

.success .alert-image-circle {
  background-color: #DAFEAB;
}

.success .img-success {
  @apply visible;
}

.success .img-fail {
  @apply invisible;
}

.success .msg-success {
  @apply flex;
}

.success .msg-fail {
  @apply hidden;
}

.fail {
  @apply bg-fail;
  box-shadow: 0px 4px 4px rgba(255, 104, 71, 0.4);
}

.fail .alert-image-circle {
  background-color: #FFDEAB;
}

.fail .img-fail {
  @apply visible;
}

.fail .img-success {
  @apply invisible;
}

.fail .msg-fail {
  @apply flex;
}

.fail .msg-success {
  @apply hidden;
}

.alert-image {
  @apply p-1;
  @apply relative;
}

.alert-image img {
  @apply w-12 h-auto;
  @apply absolute top-1 left-1/2 transform -translate-x-1/2;
  @apply z-10;
}

.alert-image-circle {
  width: 4.5rem;
  height: 4.5rem;
  /* @apply absolute top-0 left-0; */
  @apply rounded-full;
  background-color: #DAFEAB;
  @apply z-0;
}

.alert-msg {
  @apply w-full;
  @apply flex flex-col gap-1;
}

p.alert-title {
  @apply font-bold uppercase;
}

p.alert-content {
  @apply font-medium text-sm;
}
</style>
