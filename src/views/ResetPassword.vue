<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="login-form-wrapper">
        <div class="form-title">
          <h2>Reset Password!</h2>
        </div>

        <div class="login-form">
          <div class="login-input">
            <div class="input-text">
              <label for="">New Password</label>
              <input type="password" v-model="new_password">
            </div>

            <div class="input-text">
              <label for="">Confirm Password</label>
              <input type="password" v-model="confirm_password">
            </div>
          </div>

          <div class="login-action">
            <a class="btn-login" @click="resetPassword()">
              <span>Reset Password</span>
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
      new_password: "",
      confirm_password: "",
    };
  },
  methods: {
    async resetPassword() {
      if (this.new_password == "" || this.confirm_password == "") {
        this.$swal.fire(
          'Uh oh!',
          'Please complete all information.',
          'error'
        );
        return;
      }

      if (this.new_password !== this.confirm_password) {
        this.$swal.fire(
          'Uh oh!',
          'Confirm password does not match.',
          'error'
        );
        return;
      }

      UserAPI.resetPassword(this.$route.params.email, this.new_password)
      .then((res) => {
        console.log(res.data.message);
        this.$router.push({
          name: "Login",
        });
        this.$swal.fire(
          'Success!',
          'You have successfully reset your password. Sign in now!',
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
  },
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

.login-form-wrapper {
  @apply max-w-sm mx-auto;
  @apply bg-white;
  @apply px-4 sm:px-6 md:px-8 pb-12 pt-8 sm:pt-10;
  @apply flex flex-col items-stretch;
}

.form-title {
  @apply pb-6;
}

.form-title h2 {
  @apply text-2xl font-extrabold;
}

.form-title hr {
  @apply w-full max-w-3xl;
  @apply border-t border-secondary;
}

.login-form {
  @apply w-full;
  @apply flex flex-col items-center;
}

.login-input {
  @apply w-full;
  @apply flex flex-col gap-4;
}

.login-input .input-text {
  @apply w-full;
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

.login-action {
  @apply pt-8 md:pt-10;
  @apply w-full;
  @apply flex flex-col items-center;
}

a.btn-login {
  @apply w-full;
  @apply flex flex-row justify-center items-center gap-2;
  @apply px-8 py-3;
  @apply bg-gold-500 text-white;
  @apply text-base font-semibold;

  box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;
}

.link-sign-up {
  @apply pt-4;
  @apply flex flex-row items-center gap-2;
  
}

.link-sign-up p {
  @apply text-gray-600;
}

.link-sign-up a {
  @apply font-semibold;
}


</style>