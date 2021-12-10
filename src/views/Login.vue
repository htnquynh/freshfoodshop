<template>
  <div class="shop-page">
    <div class="page-title">
      <h2>Login to Your <span class="text-gold-500">Account!</span></h2>
      <hr>
    </div>

    <div class="login-form">
      <div class="checkout-basic">
        <div class="input-text">
          <label >Username</label>
          <input ref="username-input" type="text" v-model="username">
        </div>

        <div class="input-text">
          <label for="">Password</label>
          <input ref="password-input" type="password" v-model="password">
        </div>
      </div>

      <div class="remember-me-forgot-password">
        <label class="check-box">
          <input v-model="check" type="checkbox" value="remember-me" name="remember">
          <span class="design"></span>
          <span class="text">Remember me</span>
        </label>
        <router-link to='/forgot-password'>
          <a class="forgot-password">Forgot Password</a>
        </router-link>
      </div>

      <div class="checkout-action">
        <a ref="btn-login" @click="submitForm()" class="btn-checkout">
          <span>Login</span>
        </a>

        <div class="link-sign-up">
          <p>Don't have an account?</p>
          <router-link to="/signup">
            <a>Sign Up</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import Swal from 'sweetalert2';
import { mapActions } from "vuex";

export default {
  components: {
  },
  data() {
    return {
      check: ['remember-me'],

      snackbar: false,
      message: "",
      username: "",
      password: "",
    };
  },
  created() {
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
  methods: {
    ...mapActions(["setUser", "getWishList"]),
    async submitForm() {
      if(this.username == '') {
        console.log("Username Empty");
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter your username!',
        })
      } else if (this.password == '') {
        console.log("Password Empty");
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Please enter your Password!',
        })
      } else {
      await axios
        .get(`http://localhost:5000/api/username-exist/${this.username}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.message) {
            let msg = res.data.message;
            if (msg == "Username not exist!") {
              this.$swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: msg,
              })
            } 
          }
        })
        .catch((error) => {
          console.log(error.response.data.message);
          if (error.response.data.message == 'Username already exists!') {
              axios.post("http://localhost:5000/api/loginUser", {
                username: this.username,
                password: this.password,
              })
              .then((res) => {
                let user_login = JSON.stringify(res.data.accessToken);
                sessionStorage.setItem("user_login", user_login);
                this.setUser(res.data.user);
                this.getWishList();
                this.$router.push({ name: "Home" });

                this.$swal.fire(
                  'Welcome!',
                  'Successful Login!',
                  'success'
                )
              })
              .catch((err) => {
                console.log(err);
                this.$swal.fire({
                    icon: 'error',
                    title: 'Oh no!',
                    text: 'Password incorrect!',
                  })
              });
          }
        });

        
      }
    },
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