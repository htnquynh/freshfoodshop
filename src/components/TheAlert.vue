<template>
  <div class="alert-wrapper" :class="{'show': alert.show}">
    <div class="alert-overlay" @click="close_alert()"></div>
    <div class="alert">
      <div class="alert-image">
        <img 
          v-show="alert.type == 'fail'"
          src="../assets/image/PearSad.png">

        <img v-show="alert.type != 'fail'"
          src="../assets/image/PearHappy.png">
      </div>

      <div class="alert-msg msg-success">
        <p class="alert-title">{{ alert.title }}</p>
        <p class="alert-content">{{ alert.message }}</p>
      </div>

      <div class="alert-action">
        <button v-show="alert.type == 'confirm'"  class="btn-alert btn-cancel-alert" @click="close_alert()">
          <span>Cancel</span>
        </button>

        <button class="btn-alert btn-confirm-alert" @click="ok_alert()">
          <span>Ok</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["alert"]),
  },
  methods: {
    ...mapActions(["close_alert", "confirm_alert"]),
    ok_alert() {
      if(this.alert.type == 'confirm') {
        this.confirm_alert();
      } else {
        this.close_alert();
      }
    }
  }
}
</script>

<style lang="postcss" scoped>

.alert-wrapper {
  @apply fixed inset-0;
  @apply hidden;
}

.alert-wrapper.show {
  @apply flex flex-row justify-center items-center;
}

.alert-overlay {
  @apply opacity-0;
  z-index: -1;
}

.alert-wrapper.show .alert-overlay {
  @apply w-screen h-screen;
  @apply opacity-100;
  @apply bg-gray-500 bg-opacity-75;
}

.alert {
  @apply fixed top-1/2 left-1/2;
  @apply transform -translate-x-1/2 -translate-y-1/2;
  @apply w-80 md:w-96;
  @apply p-4;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @apply rounded-3xl;
  @apply text-secondary;
  @apply bg-white;

  @apply hidden;
}

.alert-wrapper.show .alert {
  @apply flex flex-col items-center gap-4;
}

.alert-image {
  @apply w-36 h-36;
  @apply rounded-full;
  @apply bg-dominant;
  @apply p-4;
}

.alert-image img {
  @apply w-full h-full;
  @apply object-contain;
}

.alert-msg {
  @apply w-full;
  @apply flex flex-col items-center gap-2;
}

p.alert-title {
  @apply font-bold uppercase text-lg md:text-xl lg:text-2xl;
  @apply tracking-wide;
}

p.alert-content {
  @apply font-medium text-base md:text-lg lg:text-lg;
}

.alert-action {
  @apply w-full;
  @apply p-4;
  @apply grid grid-flow-col auto-cols-fr place-items-center gap-4;
}

.btn-alert {
  @apply w-max;
  @apply flex flex-row justify-center items-center gap-2;
  @apply px-4 py-2;
  @apply font-medium uppercase;
}

.btn-cancel-alert {
  @apply bg-gray-100;
  box-shadow: rgba(57, 42, 35, 0.05) 0px 12px 10px -10px;
}

.btn-confirm-alert {
  @apply font-bold;
  @apply bg-aqua-blue text-white;
  box-shadow: rgba(0, 243, 215, 0.45) 0px 12px 10px -10px;
}
</style>
