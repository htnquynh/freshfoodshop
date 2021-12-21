<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="shop-page">
        <div class="page-title">
          <h2>Verify Email!</h2>
          <hr>
        </div>

        <div class="login-form">
          <div class="checkout-basic">
            <p class="font-semibold text-center">We sent a code to your email. Please check mail and enter code in here.</p>

            <div class="input-opt">
              <input 
                type="text" 
                ref="code-1" 
                id="code-1" 
                maxlength="1" 
                @keyup="liveOTP('code-1', 'code-2')"
                v-model="otp_1"
              >
              <input 
                type="text" 
                ref="code-2" 
                id="code-2" 
                maxlength="1" 
                @keyup="liveOTP('code-2', 'code-3')"
                v-model="otp_2"
              >
              <input 
                type="text" 
                ref="code-3" 
                id="code-3" 
                maxlength="1" 
                @keyup="liveOTP('code-3', 'code-4')"
                v-model="otp_3"
              >
              <input 
                type="text" 
                ref="code-4" 
                id="code-4" 
                maxlength="1" 
                @keyup="liveOTP('code-4', 'code-5')"
                v-model="otp_4"
              >
              <input 
                type="text" 
                ref="code-5" 
                id="code-5" 
                maxlength="1"
                v-model="otp_5"
              >
            </div>
          </div>
          <div class="checkout-action">
            <a class="btn-checkout" @click="verify()">
              <span>Verify</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <TheSubscribe/>
    <TheFooter/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import TheSubscribe from '../components/TheSubscribe.vue';
import MiniCart from '../components/MiniCart.vue';

import UserAPI from "../api/UserAPI";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
  },
  data() {
    return {
      otp_1: '',
      otp_2: '',
      otp_3: '',
      otp_4: '',
      otp_5: '',
    };
  },
  methods: {
    liveOTP(current, next) {
      if (this.$refs[current].value.length) {
        this.$refs[next].focus();
      }
    },
    async verify() {
      let verify_code = this.otp_1 + this.otp_2 + this.otp_3 + this.otp_4 + this.otp_5;
      console.log(verify_code);

      UserAPI.verifyResetPassword(verify_code)
      .then((res) => {
        console.log(res.data.newUser);
        this.$router.push({
          name: "ResetPassword",
          params: { email: this.$route.params.email },
        });
        this.$swal.fire(
          'Success!',
          "You have successfully verified! Lets' move on.",
          'success'
        );
      })
      .catch((err) => {
        this.$swal.fire(
          'Uh oh!',
          'Something went wrong. Double check your work.',
          'error'
        );
        console.log(err.message);
      });
    },
  }
};
</script>

<style lang="postcss" scoped>

.home {
  @apply flex flex-col;
}

.home > .header-page {
  @apply w-full;
}

.page-content {
  @apply p-0 sm:p-4;
  @apply bg-white sm:bg-transparent;
}

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