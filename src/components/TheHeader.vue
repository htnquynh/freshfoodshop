<template>
  <div class="header-wrapper">
    <div class="header">
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
                  fill="#392A23"/>
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
            <div class="header-action-search">
              <svg @click="clickSearch()" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
              <input type="search" v-model="search" v-on:keyup.enter="enterSearch()" placeholder="Search ...">
            </div>
          </li>
          <li v-show="is_login" class="header-action-item">
            <router-link to="/account">
              <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="currentColor"/>
                  <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="currentColor"/>
                  </svg>
              </a>
            </router-link>
          </li>
          <li v-show="is_login" class="header-action-item wishlist">
            <router-link to="/wishlist">
              <a>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1 9.1C22 5.7 19.3 3 15.9 3C14.8 3 13.1 3.8 12.4 5.1C12.3 5.4 11.9 5.4 11.8 5.1C11 3.9 9.4 3.1 8.2 3.1C4.9 3.1 2.1 5.8 2 9.1V9.2V9.3C2 11 2.7 12.6 3.9 13.8C3.9 13.8 3.9 13.8 3.9 13.9C4 14 8.8 18.2 11 20.1C11.6 20.6 12.5 20.6 13.1 20.1C15.3 18.2 20 14 20.2 13.9C20.2 13.9 20.2 13.9 20.2 13.8C21.4 12.7 22.1 11.1 22.1 9.3V9.1Z" fill="currentColor"/>
                </svg>
                <div class="badge">
                  <span>{{ wishlist_length }}</span>
                </div>
              </a>
            </router-link>
          </li>
          <li v-show="is_login" class="header-action-item">
            <a @click="toggleMiniCart()">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31579 2H15.6842C19.1723 2 22 4.82768 22 8.31579V15.6842C22 19.1723 19.1723 22 15.6842 22H8.31579C4.82768 22 2 19.1723 2 15.6842V8.31579C2 4.82768 4.82768 2 8.31579 2ZM9.10944 10.4202C9.8853 11.1645 10.9251 11.5699 12 11.5474C14.2402 11.5944 16.0956 9.81903 16.1474 7.57895C16.1474 7.14293 15.7939 6.78947 15.3579 6.78947C14.9219 6.78947 14.5684 7.14293 14.5684 7.57895C14.5114 8.94453 13.3661 10.01 12 9.96842C10.6357 10.0099 9.49353 8.94289 9.44211 7.57895C9.44211 7.14293 9.08865 6.78947 8.65263 6.78947C8.21662 6.78947 7.86316 7.14293 7.86316 7.57895C7.88526 8.65385 8.33358 9.67591 9.10944 10.4202Z" fill="currentColor"/>
              </svg>
              <div class="badge">
                <span>{{ noItems }}</span>
              </div>
            </a>
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
            <a @click="toggleMiniCart()">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31579 2H15.6842C19.1723 2 22 4.82768 22 8.31579V15.6842C22 19.1723 19.1723 22 15.6842 22H8.31579C4.82768 22 2 19.1723 2 15.6842V8.31579C2 4.82768 4.82768 2 8.31579 2ZM9.10944 10.4202C9.8853 11.1645 10.9251 11.5699 12 11.5474C14.2402 11.5944 16.0956 9.81903 16.1474 7.57895C16.1474 7.14293 15.7939 6.78947 15.3579 6.78947C14.9219 6.78947 14.5684 7.14293 14.5684 7.57895C14.5114 8.94453 13.3661 10.01 12 9.96842C10.6357 10.0099 9.49353 8.94289 9.44211 7.57895C9.44211 7.14293 9.08865 6.78947 8.65263 6.78947C8.21662 6.78947 7.86316 7.14293 7.86316 7.57895C7.88526 8.65385 8.33358 9.67591 9.10944 10.4202Z" fill="currentColor"/>
              </svg>

              <div class="badge">
                  <span>{{ noItems }}</span>
                </div>
            </a>
        </div>
      </div>

      <ul class="header-mobile-main-menu" :class="{'header-mobile-menu-open': is_menu_open}">
        <li class="header-mobile-menu-item">
          <div class="header-action-search">
            <svg @click="clickSearch()" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
            <input type="search" v-model="search" placeholder="Search ...">
          </div>
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
          <router-link to="/account">
            <a>Account</a>
          </router-link>
        </li>
        <li class="header-mobile-menu-item">
          <router-link to="/wishlist">
            <a>Wishlist</a>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="header-bottom">
      <p>Welcome to Fresh Food Shop</p>
      <div class="flex flex-row gap-4">
        <router-link v-if="!is_login" to="/login">
          <a class="underline">Login</a>
        </router-link>
        <router-link v-if="!is_login" to="/signup">
          <a class="underline">Sign Up</a>
        </router-link>
        <a v-if="is_login" @click="logout()" class="underline">Logout</a>
      </div>
    </div>
    <div class="header-line">
    </div>
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
    ...mapGetters(["is_login", "keyword", "noItems", "wishlist_length"]),
  },
  methods: {
    ...mapActions(["setKeyword", "setVisibleMiniCart", "logoutUser", "logoutWishlist", "logoutCart", "start_load", "stop_load"]),
    toggle_menu() {
      this.is_menu_open = !this.is_menu_open;
    },
    toggleMiniCart() {
      if (this.is_login) {
        this.setVisibleMiniCart();
        console.log("Toggle");
      } else {
        this.$router.push({
          name: "Login",
        });
      }
    },
    enterSearch() {
      this.setKeyword(this.search);
      if (this.$router.currentRoute.path != "/shop") {
        this.$router.push("/shop");
      }
    },
    clickSearch() {
      this.setKeyword(this.search);
      if (this.$router.currentRoute.path != "/shop") {
        this.$router.push("/shop");
      }
    },
    logout() {
      this.$swal.fire({
        title: 'Are you sure you want to logout?',
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
              });
            });
          });
          
          if (this.$router.currentRoute.path != "/") {
            this.$router.push("/");
          }
          this.$swal.fire(
            'Goodbye!',
            'Successful Logout!',
            'success'
          )
        } 
      })
    },
  }
}
</script>

<style lang="postcss" scoped>
.header-wrapper {
  @apply flex flex-col;
}

.header-bottom {
  @apply flex flex-row justify-between items-center gap-4;
  @apply py-2 px-4 md:px-8;
  @apply bg-secondary;
  @apply text-dominant;
  /* background-color: #F9D9CA;
  @apply text-secondary; */
  @apply font-light text-sm font-playfair;
  /* @apply italic; */
  @apply order-first;
}

.header-line {
  @apply h-2 w-full;
  background-color: #F27C4D;
  @apply relative;
}

.header {
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
  @apply text-secondary;
}

.header-action-item a {
  @apply flex flex-row items-center gap-2;
  /* @apply p-2; */
  @apply relative;
}

.header-action-item a svg {
  @apply w-7 h-7;
  @apply opacity-80;
  transition: 0.3s;
}

.header-action-item:hover a svg {
  @apply text-gold-500;
  @apply transform scale-125;
}

.header-action-item:hover a .badge {
  @apply bg-white text-gold-500;
}

.header-action-item a .badge {
  @apply bg-gold-500 text-white;
  @apply rounded-full;
  @apply w-5 h-5;
  @apply p-1;
  @apply text-xs font-medium text-center leading-3;
  @apply absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2;

  transition: 0.3s;
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

.header-mobile-menu svg, .cart a svg {
  @apply w-7 h-7;
}

.cart a {
  @apply flex flex-row items-center gap-2;
  @apply relative;
}

.cart > a > .badge {
  @apply bg-gold-500 text-white;
  @apply rounded-full;
  @apply w-5 h-5;
  @apply p-1;
  @apply text-xs font-medium text-center leading-3;
  @apply absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2;
}

.header-mobile-main-menu {
  @apply absolute;
  @apply w-full;
  /* @apply hidden flex-col; */
  @apply flex flex-col;
  @apply bg-white;
  @apply px-7 py-4;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  @apply transform scale-y-0 origin-top transition ease-in-out duration-500 sm:duration-700;

  @apply z-10;
}

.header-mobile-menu-item {
  @apply py-2;
}

.header-mobile-menu-open {
  @apply flex flex-col;
  @apply z-10;

  @apply transform scale-y-100 transition ease-in-out duration-500 sm:duration-700;
}

.btn-login {
  @apply bg-peach-500 text-white;
  @apply px-4 mx-2;
  @apply uppercase font-bold text-sm;
}

.btn-signup {
  @apply bg-gold-100;
  @apply px-4 mx-2;
  @apply uppercase font-bold text-sm;
}

</style>