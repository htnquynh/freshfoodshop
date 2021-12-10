<template>
  <div class="shop-page">
    <div class="page-title">
      <h2>Verify Email!</h2>
      <hr>
    </div>

    <div class="login-form">
      <div class="checkout-basic">
        <p class="font-semibold text-center">We sent a code to your email. Please check mail and enter code in here.</p>

        <div class="input-opt">
          <input type="text" ref="code-1" id="code-1" maxlength="1" @keyup="liveOTP('code-1', 'code-2')">
          <input type="text" ref="code-2" id="code-2" maxlength="1" @keyup="liveOTP('code-2', 'code-3')">
          <input type="text" ref="code-3" id="code-3" maxlength="1" @keyup="liveOTP('code-3', 'code-4')">
          <input type="text" ref="code-4" id="code-4" maxlength="1" @keyup="liveOTP('code-4', 'code-5')">
          <input type="text" ref="code-5" id="code-5" maxlength="1">
        </div>

      </div>

      <div class="checkout-action">
        <a class="btn-checkout">
          <span>Verify</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import CartItem from '../components/CartItem.vue';

export default {
  components: {
    // CartItem,
  },
  data() {
    return {
      check: ['remember-me'],
    };
  },
  computed: {
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
  watch: {
    check() {
      console.log(this.check);
    }
  },
  created() {
    
  },
  methods: {
    liveOTP(current, next) {
      if (this.$refs[current].value.length) {
        this.$refs[next].focus();
      }
    }
  }
};
</script>

<style lang="postcss" scoped>

.shop-page {
  @apply max-w-xs mx-auto;
  @apply px-4 pb-16 md:pb-24;
  @apply flex flex-col items-start md:items-center gap-2;
}

.page-title {
  @apply py-4 md:py-8;
  @apply flex flex-col md:justify-center gap-2 md:gap-4;
}

.page-title h2 {
  @apply text-xl md:text-4xl font-black;
}

.page-title hr {
  @apply w-full max-w-3xl;
  @apply border-t border-secondary;
}

.login-form {
  @apply w-full;
  @apply flex flex-col items-center;
}

.checkout-basic {
  @apply w-full;
  @apply flex flex-col gap-4;
}


.checkout-action {
  @apply pt-8 md:pt-10;
  @apply w-full;
  @apply flex flex-col items-center;
}

a.btn-checkout {
  @apply w-full;
  @apply flex flex-row justify-center items-center gap-2;
  @apply p-2;
  @apply bg-gold-500 text-white;
  @apply text-base sm:text-lg font-semibold;
  @apply rounded-xl;
}
</style>