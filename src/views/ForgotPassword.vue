<template>
  <div class="shop-page">
    <div class="page-title">
      <h2>Forgot Password!</h2>
      <hr>
    </div>

    <div class="login-form">
      <div class="checkout-basic">
        <div class="input-text">
          <label for="">Email</label>
          <input type="email">
        </div>
      </div>

      <div class="checkout-action">
        <a class="btn-checkout">
          <span>Reset Password</span>
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
    
  },
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
  @apply w-min;
  @apply flex flex-col gap-4;
}

.remember-me-forgot-password {
  @apply pt-4;
  @apply w-full;
  @apply flex flex-row justify-between items-center;
}

.remember-me-forgot-password > .check-box > .design {
  @apply w-4 h-4;
}

.remember-me-forgot-password > .check-box > .design::before {
  @apply text-xl leading-4;
}

.remember-me-forgot-password > .check-box > .text {
  @apply ml-2;
  @apply font-semibold;
}

a.forgot-password {
  @apply font-semibold;
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

.link-sign-up {
  @apply pt-3;
  @apply flex flex-row items-center gap-2;
  
}

.link-sign-up p {
  @apply text-gray-600;
}

.link-sign-up a {
  @apply font-semibold;
}

</style>