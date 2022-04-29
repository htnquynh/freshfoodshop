<template>
  <div class="home relative">
    <TheHeader class="header-page" />
    <MiniCart />
    <div class="page-content">
      <div class="login-form-wrapper">
        <div class="form-title">
          <h2>Login to Your <span class="text-gold-500">Account!</span></h2>
          <!-- <hr> -->
        </div>

        <div class="login-form">
          <div class="login-input">
            <div class="input-text">
              <label>Username</label>
              <input ref="username-input" type="text" v-model="username" />
            </div>

            <div class="input-text">
              <label for="">Password</label>
              <input ref="password-input" type="password" v-model="password" />
            </div>
          </div>

          <div class="remember-me-forgot-password">
            <label class="check-box">
              <input
                v-model="check"
                type="checkbox"
                value="remember-me"
                name="remember"
              />
              <span class="design"></span>
              <span class="text">Remember me</span>
            </label>
            <router-link to="/forgot-password">
              <a class="forgot-password">Forgot Password</a>
            </router-link>
          </div>

          <div class="login-action">
            <a ref="btn-login" @click="submitForm()" class="btn-login">
              <span>Login to Account</span>
            </a>
            <br />
            <div class="text-center ma-5">Or</div>
            <br />
            <button @click="googleSignIn()">Login with google</button>
            <div class="link-sign-up">
              <p>Don't have an account?</p>
              <router-link to="/signup">
                <a>Sign Up</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheSubscribe />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader.vue";
import TheFooter from "../components/TheFooter.vue";
import TheSubscribe from "../components/TheSubscribe.vue";
import MiniCart from "../components/MiniCart.vue";

import { mapActions } from "vuex";
import UserAPI from "../api/UserAPI";
import * as firebase from "firebase";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
  },
  data() {
    return {
      check: ["remember-me"],
      username: "",
      password: "",
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
    };
  },
  methods: {
    ...mapActions([
      "getUserCart",
      "getWishlist",
      "setUser",
      "start_load",
      "stop_load",
    ]),
    async login(username, password) {
      this.start_load();
      await UserAPI.login(username, password)
        .then((res) => {
          let user_login = JSON.stringify(res.data.accessToken);
          sessionStorage.setItem("user_login", user_login);
          this.setUser(res.data.user).then(() => {
            this.getUserCart();
            this.getWishlist();
            this.stop_load();
            this.$router.push("/");
            this.$swal.fire(
              "Welcome!",
              "You have successfully logged in.",
              "success"
            );
          });
        })
        .catch((err) => {
          console.log(err.message);
          this.stop_load();
          this.$swal.fire("Uh oh!", "You have failed to login.", "error");
        });
    },
    async submitForm() {
      if (this.username == "") {
        console.log("Username Empty");
        this.$swal.fire("Oops...", "Please enter your Username!", "error");
      } else if (this.password == "") {
        console.log("Password Empty");
        this.$swal.fire("Oops...", "Please enter your Password!", "error");
      } else {
        this.login(this.username, this.password);
      }
    },
    async googleSignIn() {
      let provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.start_load();
          //let token = result.credential.accessToken;
          let user = result.user;
          const { email, phoneNumber, photoURL, displayName } =
            user.providerData[0];
          this.user.username = Math.random().toString(36);
          this.user.password = Math.random().toString(36);
          this.user.email = email;
          this.user.phone = phoneNumber || "";
          this.user.avatar = photoURL;
          this.user.full_name = displayName;
          console.log(this.user);
          UserAPI.login_with_google(this.user)
            .then((res) => {
              let user_login = JSON.stringify(res.data.accessToken);
              sessionStorage.setItem("user_login", user_login);
              this.setUser(res.data.user).then(() => {
                this.getUserCart();
                this.getWishlist();
                this.stop_load();
                this.$router.push("/");
                this.$swal.fire(
                  "Welcome!",
                  "You have successfully logged in.",
                  "success"
                );
              });
            })
            .catch((err) => {
              console.log(err.message);
              this.stop_load();
              this.$swal.fire("Uh oh!", "You have failed to login.", "error");
            });
        })
        .catch((err) => {
          console.log(err); // This will give you all the information needed to further debug any errors
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
