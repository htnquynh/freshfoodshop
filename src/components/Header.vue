<template>
  <div class="header-wrapper">
    <div class="header-desktop">
      <nav class="header-nav">
        <div class="logo">
          <router-link to="/">
            <svg width="114" height="22" viewBox="0 0 114 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M1.34375 18H4.89773V12.8864H9.9858V10.0227H4.89773V7.77273H10.5483V4.90909H1.34375V18ZM11.8555 18H15.4094V13.679H16.6367L18.9379 18H22.7987L20.1396 13.1165C21.533 12.4453 22.364 11.1733 22.364 9.35795C22.364 6.57102 20.4144 4.90909 17.506 4.90909H11.8555V18ZM15.4094 10.9176V7.74716H16.6623C17.9087 7.74716 18.6566 8.23295 18.6566 9.35795C18.6566 10.4766 17.9087 10.9176 16.6623 10.9176H15.4094ZM23.8789 18H33.288V15.1364H27.4329V12.8864H32.8278V10.0227H27.4329V7.77273H33.3136V4.90909H23.8789V18ZM42.133 9H45.5336C45.5208 6.4304 43.5392 4.73011 40.3688 4.73011C37.2559 4.73011 35.057 6.40483 35.0762 8.89773C35.0698 10.9432 36.4888 12.081 38.8091 12.5795L40.1131 12.8608C41.5705 13.1804 42.0691 13.5447 42.0819 14.1392C42.0691 14.7848 41.481 15.2386 40.3432 15.2386C38.9817 15.2386 38.1763 14.5994 38.1188 13.3977H34.7438C34.7566 16.6832 36.981 18.1534 40.3944 18.1534C43.7118 18.1534 45.6998 16.7216 45.7125 14.1392C45.6998 12.1449 44.5108 10.745 41.6216 10.125L40.5478 9.89489C39.3077 9.63281 38.7516 9.26847 38.7836 8.64205C38.79 8.06676 39.2694 7.64489 40.3688 7.64489C41.5194 7.64489 42.0627 8.14986 42.133 9ZM47.0645 18H50.6184V12.8864H55.323V18H58.877V4.90909H55.323V10.0227H50.6184V4.90909H47.0645V18Z" 
                fill="#FFC928"/>
              <path 
                d="M61.3438 18H64.8977V12.8864H69.9858V10.0227H64.8977V7.77273H70.5483V4.90909H61.3438V18ZM84.5373 11.4545C84.5373 7.08239 81.7248 4.73011 78.1708 4.73011C74.5913 4.73011 71.8043 7.08239 71.8043 11.4545C71.8043 15.8011 74.5913 18.179 78.1708 18.179C81.7248 18.179 84.5373 15.8267 84.5373 11.4545ZM80.881 11.4545C80.881 13.8068 79.935 15.0852 78.1708 15.0852C76.4066 15.0852 75.4606 13.8068 75.4606 11.4545C75.4606 9.10227 76.4066 7.82386 78.1708 7.82386C79.935 7.82386 80.881 9.10227 80.881 11.4545ZM98.8635 11.4545C98.8635 7.08239 96.051 4.73011 92.497 4.73011C88.9174 4.73011 86.1305 7.08239 86.1305 11.4545C86.1305 15.8011 88.9174 18.179 92.497 18.179C96.051 18.179 98.8635 15.8267 98.8635 11.4545ZM95.2072 11.4545C95.2072 13.8068 94.2612 15.0852 92.497 15.0852C90.7328 15.0852 89.7868 13.8068 89.7868 11.4545C89.7868 9.10227 90.7328 7.82386 92.497 7.82386C94.2612 7.82386 95.2072 9.10227 95.2072 11.4545ZM105.545 18C109.533 18 112.065 15.5455 112.065 11.4545C112.065 7.36364 109.533 4.90909 105.494 4.90909H100.508V18H105.545ZM104.062 14.983V7.92614H105.315C107.36 7.92614 108.485 8.71875 108.485 11.4545C108.485 14.1903 107.36 14.983 105.417 14.983H104.062Z" 
                fill="#393939"/>
            </svg>
          </router-link>
        </div>
        <ul class="main-menu">
          <li>
            <router-link to="/shop">
              <a>Shop</a>
            </router-link>
          </li>
          <li>
            <router-link to="/recommend-menu">
              <a>Recommend Menu</a>
            </router-link>
          </li>
        </ul>
      </nav>
      <ul class="header-action">
        <li class="header-action-item">
          <form class="header-action-search">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input type="search" v-model="search" @keypress="sendKeyword" placeholder="Search ...">
          </form>
        </li>
        <li class="header-action-item">
          <router-link to="/my-account">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
              </svg>
            </a>
          </router-link>
        </li>
        <li class="header-action-item">
          <router-link to="/">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
              </svg>
            </a>
          </router-link>
        </li>
        <li class="header-action-item">
          <router-link to="/shopping-cart">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </a>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="header-mobile">
      <div class="header-mobile-item header-mobile-menu"
        @click="toggle_menu()">

        <svg :class="{'hidden': is_menu_open, 'block': !is_menu_open}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
        </svg>

        <svg :class="{'hidden': !is_menu_open, 'block': is_menu_open}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
        </svg>
      </div>

      <div class="header-mobile-item">
        <router-link to="/">
          <svg width="114" height="22" viewBox="0 0 114 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M1.34375 18H4.89773V12.8864H9.9858V10.0227H4.89773V7.77273H10.5483V4.90909H1.34375V18ZM11.8555 18H15.4094V13.679H16.6367L18.9379 18H22.7987L20.1396 13.1165C21.533 12.4453 22.364 11.1733 22.364 9.35795C22.364 6.57102 20.4144 4.90909 17.506 4.90909H11.8555V18ZM15.4094 10.9176V7.74716H16.6623C17.9087 7.74716 18.6566 8.23295 18.6566 9.35795C18.6566 10.4766 17.9087 10.9176 16.6623 10.9176H15.4094ZM23.8789 18H33.288V15.1364H27.4329V12.8864H32.8278V10.0227H27.4329V7.77273H33.3136V4.90909H23.8789V18ZM42.133 9H45.5336C45.5208 6.4304 43.5392 4.73011 40.3688 4.73011C37.2559 4.73011 35.057 6.40483 35.0762 8.89773C35.0698 10.9432 36.4888 12.081 38.8091 12.5795L40.1131 12.8608C41.5705 13.1804 42.0691 13.5447 42.0819 14.1392C42.0691 14.7848 41.481 15.2386 40.3432 15.2386C38.9817 15.2386 38.1763 14.5994 38.1188 13.3977H34.7438C34.7566 16.6832 36.981 18.1534 40.3944 18.1534C43.7118 18.1534 45.6998 16.7216 45.7125 14.1392C45.6998 12.1449 44.5108 10.745 41.6216 10.125L40.5478 9.89489C39.3077 9.63281 38.7516 9.26847 38.7836 8.64205C38.79 8.06676 39.2694 7.64489 40.3688 7.64489C41.5194 7.64489 42.0627 8.14986 42.133 9ZM47.0645 18H50.6184V12.8864H55.323V18H58.877V4.90909H55.323V10.0227H50.6184V4.90909H47.0645V18Z" 
              fill="#FFC928"/>
            <path 
              d="M61.3438 18H64.8977V12.8864H69.9858V10.0227H64.8977V7.77273H70.5483V4.90909H61.3438V18ZM84.5373 11.4545C84.5373 7.08239 81.7248 4.73011 78.1708 4.73011C74.5913 4.73011 71.8043 7.08239 71.8043 11.4545C71.8043 15.8011 74.5913 18.179 78.1708 18.179C81.7248 18.179 84.5373 15.8267 84.5373 11.4545ZM80.881 11.4545C80.881 13.8068 79.935 15.0852 78.1708 15.0852C76.4066 15.0852 75.4606 13.8068 75.4606 11.4545C75.4606 9.10227 76.4066 7.82386 78.1708 7.82386C79.935 7.82386 80.881 9.10227 80.881 11.4545ZM98.8635 11.4545C98.8635 7.08239 96.051 4.73011 92.497 4.73011C88.9174 4.73011 86.1305 7.08239 86.1305 11.4545C86.1305 15.8011 88.9174 18.179 92.497 18.179C96.051 18.179 98.8635 15.8267 98.8635 11.4545ZM95.2072 11.4545C95.2072 13.8068 94.2612 15.0852 92.497 15.0852C90.7328 15.0852 89.7868 13.8068 89.7868 11.4545C89.7868 9.10227 90.7328 7.82386 92.497 7.82386C94.2612 7.82386 95.2072 9.10227 95.2072 11.4545ZM105.545 18C109.533 18 112.065 15.5455 112.065 11.4545C112.065 7.36364 109.533 4.90909 105.494 4.90909H100.508V18H105.545ZM104.062 14.983V7.92614H105.315C107.36 7.92614 108.485 8.71875 108.485 11.4545C108.485 14.1903 107.36 14.983 105.417 14.983H104.062Z" 
              fill="#393939"/>
          </svg>
        </router-link>
      </div>


      <div class="header-mobile-item cart">
        <router-link to="/shopping-cart">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </a>
        </router-link>
      </div>
    </div>

    <ul class="header-mobile-main-menu" :class="{'header-mobile-menu-open': is_menu_open}">
      <li class="header-mobile-menu-item">
        <form class="header-action-search">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
          <input type="search" placeholder="Search ...">
        </form>
      </li>
      <li class="header-mobile-menu-item">
        <router-link to="/shop">
          <a>Shop</a>
        </router-link>
      </li>
      <li class="header-mobile-menu-item">
        <router-link to="/recommend-menu">
          <a>Recommend Menu</a>
        </router-link>
      </li>
      <li class="header-mobile-menu-item">
        <router-link to="/my-account">
          <a>Account</a>
        </router-link>
      </li>
      <li class="header-mobile-menu-item">
        <router-link to="/">
          <a>Wishlist</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      is_menu_open: false,
      search: '',
    }
  },
  created() {
    this.search = this.keyword;
  },
  computed: {
    ...mapGetters(["keyword"]),
  },
  methods: {
    ...mapActions(["setKeyword"]),
    toggle_menu() {
      this.is_menu_open = !this.is_menu_open;
    },
    sendKeyword(e) {
      if(e.key === "Enter"){
        this.setKeyword(this.search);
        if (this.$router.currentRoute.path != "/shop") {
          this.$router.push("/shop");
        }
      }
    },
  }
}
</script>

<style lang="postcss" scoped>
.header-wrapper {
  @apply h-16;
  @apply bg-white;
}

.header-desktop {
  @apply w-full h-full;
  @apply hidden md:flex flex-row justify-between;
  @apply px-6;
}

.header-mobile {
  @apply h-full;
  @apply flex md:hidden flex-row justify-between items-center;
  @apply px-4;
}

.header-nav {
  @apply flex flex-row items-center;
}

.logo {
  @apply px-2;
}

.main-menu {
  @apply flex flex-row;
}

.main-menu li {
  @apply px-4;
}

.header-action {
  @apply flex flex-row items-center;
}

.header-action-item {
  @apply p-2;

  @apply text-secondary opacity-80;
}

.header-action-search {
  @apply w-full md:w-40;
  @apply flex flex-row items-center gap-2;
  @apply px-3 py-2;
  @apply bg-dominant;
  @apply rounded-xl;
}

.header-action-search svg {
  @apply w-6 h-6;
  @apply text-secondary opacity-50;
}

.header-action-search input[type='search'] {
  @apply bg-transparent;
  @apply focus:outline-none;
  @apply w-full;
}

.header-mobile-item {
  @apply p-2;
}

.header-mobile-main-menu {
  @apply absolute;
  @apply w-full;
  @apply hidden flex-col;
  @apply bg-white;
  @apply px-7 py-4;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.header-mobile-menu-item {
  @apply py-2;
}

.header-mobile-menu-open {
  @apply flex flex-col;
}

</style>