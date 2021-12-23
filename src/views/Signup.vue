<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="login-form-wrapper">
        <div class="form-title">
          <h2>Create <span class="text-gold-500">Account!</span></h2>
        </div>

        <div class="login-form">
          <div class="login-input">
            <div class="input-text">
              <label>Email</label>
              <input 
                type="email"
                v-model="user.email"
                @keyup="checkEmail()"
              >
              <p class="error-msg">{{ email_error }}</p>
            </div>

            <div class="input-text">
              <label>Username</label>
              <input 
                type="text"
                v-model="user.username"
                @keyup="checkUsername()"
              >
              <p class="error-msg">{{ username_error }}</p>
            </div>

            <div class="input-text">
              <label>Password</label>
              <input 
                type="password"
                v-model="user.password"
                @keyup="checkPassword()"
              >
              <p class="error-msg">{{ password_error }}</p>
            </div>

            <div class="input-text">
              <label>Confirm Password</label>
              <input 
                type="password"
                v-model="confirm_password"
                @keyup="checkPassword()"
              >
              <p class="error-msg">{{ confirm_password_error }}</p>
            </div>
          </div>

          <div class="remember-me-forgot-password">
            <label class="check-box">
              <input v-model="check" type="checkbox" value="remember-me" name="remember">
              <span class="design"></span>
              <span class="text">I agree to the Terms & Conditions</span>
            </label>
          </div>

          <div class="login-action">
            <a class="btn-login" @click="signup()" 
              :class="{ 'btn-disable' : !enableSubmit()}">
              <span>Create Account</span>
            </a>

            <div class="link-sign-up">
              <p>Already have an account?</p>
              <router-link to="/login">
                <a>Sign In</a>
              </router-link>
            </div>
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
import { mapActions } from "vuex";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
  },
  data() {
    return {
      check: ['remember-me'],
      user: {
        username: "",
        password: "",
        full_name: "",
        email: "",
        position: "customer",
        birthdate: "",
        address: "",
        phone: "",
        avatar: "",
        status: "active",
      },
      confirm_password: '',
      email_error: '',
      username_error: '',
      password_error: '',
      confirm_password_error: '',

      email_valid: false,
      username_valid: false,
      password_valid: false,
      confirm_valid: false,
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
    },
  },
  created() {
    
  },
  methods: {
    ...mapActions(["start_load", "stop_load"]),
    enableSubmit() {
      if (
        this.email_valid &&
        this.username_valid &&
        this.password_valid &&
        this.confirm_valid
      ) {
        return true;
      } else {
        return false;
      }
    },
    checkEmail() {
      var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!this.user.email.match(reg)) {
        this.email_valid = false;
        this.email_error = "This is not email!";
      } else {
        this.email_valid = true;
        this.email_error = "";
      }
      this.enableSubmit();
    },
    checkUsername() {
      var reg = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{4,20}$/;
      if (!this.user.username.match(reg)) {
        this.username_valid = false;
        this.username_error = "Must contain between 8 and 20 characters, including letters, numbers or underscore!";
      } else {
        this.username_valid = true;
        this.username_error = "";
      }
      this.enableSubmit();
    },
    checkPassword() {
      this.validatePassword();
      if (this.password_valid) {
        if (this.confirm_password != this.user.password) {
          this.confirm_valid = false;
          this.confirm_password_error = "Not matching";
        } else {
          this.confirm_valid = true;
          this.confirm_password_error = "";
        }
        this.enableSubmit();
      }
    },
    validatePassword() {
      var reg = /^(?=.*[0-9])(?=.*[!@.#$%^&*])[a-zA-Z0-9!@.#$%^&*]{8,20}$/;
      if (!this.user.password.match(reg)) {
        this.password_valid = false;
        this.password_error = "Must contain between 8 and 20 characters, including uppercase, lowercase letters, numbers and special characters!";
      } else {
        this.password_valid = true;
        this.password_error = "";
      }
      this.enableSubmit();
    },
    async signup() {
      if (this.enableSubmit) {
        this.start_load();
        if (this.checkEmailExist(this.user.email)) {
          this.email_valid = false;
          this.email_error = "Email already exists!";
          this.enableSubmit();
          this.stop_load();
          return;
        }
        if (this.checkUsernameExist(this.user.username)) {
          this.username_valid = false;
          this.username_error = "Username already exists!";
          this.enableSubmit();
          this.stop_load();
          return;
        }
        const formData = new FormData();
        formData.append("username", this.user.username);
        formData.append("password", this.user.password);
        formData.append("full_name", this.user.full_name);
        formData.append("email", this.user.email);
        formData.append("position", this.user.position);
        formData.append("birthdate", this.user.birthdate);
        formData.append("address", this.user.address);
        formData.append("phone", this.user.phone);
        formData.append("avatar", this.user.avatar);
        formData.append("status", this.user.status);

        await UserAPI.signup(formData).then((res) => {
          this.stop_load();
          this.$router.push({ name: "VerifyUser" });
          console.log(res.data.message);
        });
      }
    },
    async checkEmailExist(email) {
      await UserAPI.getUserByEmail(email).then((res) => {
        if(res.data) {
          return false;
        } else {
          return true;
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    async checkUsernameExist(username) {
      await UserAPI.getUserByUsername(username).then((res) => {
        if(res.data) {
          return false;
        } else {
          return true;
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  },
};
</script>

<style lang="postcss" scoped>

.error-msg {
  @apply text-sm text-red-600;
}

.btn-disable {
  @apply opacity-40;
}

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

/* .login-form-wrapper {
  @apply max-w-xs mx-auto;
  @apply px-4 pb-16 md:pb-24;
  @apply flex flex-col items-start md:items-center gap-2;
} */

/* .form-title {
  @apply py-4 md:py-8;
  @apply flex flex-col md:justify-center gap-2 md:gap-4;
}

.form-title h2 {
  @apply text-xl md:text-4xl font-black;
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
  @apply w-min;
  @apply flex flex-col gap-4;
} */


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