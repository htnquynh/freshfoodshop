<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="shop-page">
        <ul class="my-account-nav">
          <li>
            <router-link to="/account">
              <a :class="{'active-link': isCurrentTab('MyAccount')}" class="nav-link">
                <span class="nav-link-content">
                  <svg class="nav-link-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
                  </svg>

                  <span class="nav-link-label">My Account</span>
                </span>
                <svg class="nav-link-arrow" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <rect fill="none" height="24" width="24" />
                  <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                </svg>
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/account/my-order">
              <a :class="{'active-link': isCurrentTab('MyOrder')}" class="nav-link">
                <span class="nav-link-content">
                  <svg class="nav-link-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0,0h24v24H0V0z" fill="none" />
                    <g>
                      <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                      <rect height="2" width="6" x="9" y="7" />
                      <rect height="2" width="2" x="16" y="7" />
                      <rect height="2" width="6" x="9" y="10" />
                      <rect height="2" width="2" x="16" y="10" />
                    </g>
                  </svg>
                  <span class="nav-link-label">My Order</span>
                  
                </span>
                <svg class="nav-link-arrow" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <rect fill="none" height="24" width="24" />
                  <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                </svg>
              </a>
            </router-link>
          </li>

          <li>
            <router-link to="/account/change-password">
              <a :class="{'active-link': isCurrentTab('ChangePassword')}" class="nav-link">
                <span class="nav-link-content">
                  <svg class="nav-link-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <g fill="none">
                      <path d="M0 0h24v24H0V0z" />
                      <path d="M0 0h24v24H0V0z" opacity=".87" />
                    </g>
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                  </svg>
                  <span class="nav-link-label">Change Password</span>
                </span>
                <svg class="nav-link-arrow" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                  <rect fill="none" height="24" width="24" />
                  <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
                </svg>
              </a>
            </router-link>
          </li>
          <hr>
          <li>
            <router-link to="/shopping-cart">
              <a class="nav-link">
                <span class="nav-link-content">
                  <svg class="nav-link-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                  <span class="nav-link-label">Shopping Cart</span>
                </span>
              </a>
            </router-link>
          </li>
          <li>
            <router-link to="/wishlist">
              <a class="nav-link">
                <span class="nav-link-content">
                  <svg class="nav-link-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                  </svg>
                  <span class="nav-link-label">My Wishlist</span>
                </span>
              </a>
            </router-link>
          </li>
          <hr>
          <li @click="logout()">
              <a class="nav-link">
                <span class="nav-link-content">
                  <svg class="nav-link-icon" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <g>
                      <path d="M0,0h24v24H0V0z" fill="none" />
                    </g>
                    <g>
                      <g>
                        <path d="M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z" />
                        <path d="M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z" />
                      </g>
                    </g>
                  </svg>
                  <span class="nav-link-label">Logout</span>
                </span>
              </a>
          </li>
        </ul>

        <router-view></router-view>
      
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
    }
  },
  methods: {
    ...mapActions(["logoutUser", "logoutWishlist", "logoutCart", "start_load", "stop_load"]),
    isCurrentTab(name_router) {
      return this.$route.name == name_router;
    },
    logout() {
      this.$swal.fire({
        title: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Logout',
      }).then((result) => {
        if (result.isConfirmed) {
          this.start_load();
          sessionStorage.removeItem("user_login");
          this.logoutUser().then(() => {
            this.logoutCart().then(() => {
              this.logoutWishlist().then(() => {
                this.stop_load();
                if (this.$router.currentRoute.path != "/") {
                  this.$router.push("/");
                }
                this.$swal.fire(
                  'Goodbye!',
                  'Successful Logout!',
                  'success'
                );
              });
            });
          });
        }
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
/* @import url('../assets/style/select.css'); */

.home {
  @apply flex flex-col;
}

.home > .header-page {
  @apply w-full;
}

.page-content {
  @apply p-4;
  /* @apply flex flex-col; */
}

.shop-page {
  @apply w-full max-w-5xl mx-auto;
  /* @apply flex flex-col gap-4 md:gap-8; */
  /* @apply flex flex-col gap-4 sm:flex-row sm:gap-0 md:gap-0 lg:gap-0 items-start; */

  @apply flex flex-col sm:flex-row items-start;

  /* @apply sm:divide-x; */
  /* @apply grid grid-cols-1 sm:grid-cols-2 sm:place-items-start; */

  @apply pt-4 pb-6 md:pb-8;

  @apply bg-white;
}

.my-account-nav {
  @apply flex-shrink-0;
  @apply w-full sm:w-16 md:w-60 lg:w-72;
  /* @apply flex flex-col justify-start gap-4; */

  @apply grid grid-flow-col place-items-center sm:grid-flow-row md:place-items-stretch md:gap-4;

  @apply p-2 sm:px-2 sm:py-4 md:px-3 md:py-6 lg:px-4 lg:py-8;
  /* @apply bg-dominant; */

  @apply md:rounded-3xl;
}

.my-account-nav > hr {
  @apply hidden md:block;
}

.my-account-nav .nav-link {
  @apply p-2 md:py-1 lg:px-4 lg:py-2;
  @apply flex flex-row justify-between;
  @apply font-semibold;

  @apply border-b-2 sm:border-b-0 sm:border-l-4 border-transparent;

  @apply text-sm lg:text-base;
}

.nav-link .nav-link-content {
  @apply flex flex-row gap-3;
}

.nav-link .nav-link-content .nav-link-label {
  @apply hidden md:block;
}

.nav-link > svg.nav-link-arrow {
  @apply hidden;
}

.active-link {
  @apply border-gold-500 !important;
  @apply font-extrabold !important;
}

.active-link svg.nav-link-arrow {
  @apply hidden md:block;
  @apply text-gold-500;
}

.active-link svg.nav-link-icon {
  @apply text-gold-500;
}

</style>