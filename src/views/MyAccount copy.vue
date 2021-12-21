<template>
  <div class="home relative">
    <TheHeader class="header-page"/>
    <MiniCart/>
    <div class="page-content">
      <div class="shop-page">
        <ul class="my-account-nav">
          <li @click="setTab('my-account')">
            <a :class="{'active-link': isCurrentTab('my-account')}" class="nav-link">
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
          </li>
          <li @click="setTab('my-order')">
            <a :class="{'active-link': isCurrentTab('my-order')}" class="nav-link">
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
          </li>

          <li @click="setTab('change-password')">
            <a :class="{'active-link': isCurrentTab('change-password')}" class="nav-link">
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

        <!-- <div :class="{'active-tab': isCurrentTab('my-account')}" class="my-account-wrapper">
          <div class="account-summary-wrapper account-col">          
            <div class="account-summary">
              <div class="my-avatar">
                <img
                  v-if="userLogin.avatar"
                  :src="previewImage"
                  alt="Account Image Placeholder"
                  class="image-placeholder"
                />
                <img
                  v-else
                  src="../assets/image/avatar-placeholder.png"
                  alt="Account Image Placeholder"
                  class="image-placeholder"
                />

                <label class="input-avatar">
                  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                    <g>
                      <rect fill="none" height="24" width="24" />
                    </g>
                    <g>
                      <path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M7,9l1.41,1.41L11,7.83V16h2V7.83l2.59,2.58L17,9l-5-5L7,9z" />
                    </g>
                  </svg>

                  <input
                    type="file"
                    name="avatar"
                    accept="image/*"
                    ref="fileInput"
                    id="account-image-upload"
                    @input="pickFile"
                    @change="selectFile"
                  />
                  <span class="text">Upload your avatar</span>
                </label>
              </div>

              <div class="fixed-info">
                <div class="fixed-info-item">
                  <label>Email</label>
                  <span>{{ userLogin.email }}</span>
                </div>
                <div class="fixed-info-item">
                  <label>Username</label>
                  <span>{{ userLogin.username }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="my-account account-col">
            <div class="account-info">

              <h3 class="account-title">My Information</h3>

              <div class="input-text">
                <label for="">Fullname</label>
                <input type="text" v-model="full_name">
              </div>

              <div class="input-text">
                <label for="">Address</label>
                <input type="text" v-model="address">
              </div>

              <div class="input-text">
                <label for="">Phone</label>
                <input type="text" v-model="phone">
              </div>

              <div class="input-text">
                <label for="">Birthdate</label>
                <input type="text" v-model="birthdate">
              </div>

              <a class="btn-update-info" @click="changeInfo()">Update Info</a>
            </div>
          </div>
        </div> -->

        <!-- <div :class="{'active-tab': isCurrentTab('change-password')}" class="my-change-password-wrapper">
          <div class="my-change-password">
              <h3 class="account-title">Change Password</h3>
              <div class="input-text">
                <label for="">Old Password</label>
                <input type="password" v-model="password" required>
              </div>

              <div class="input-text">
                <label for="">New Password</label>
                <input type="password" v-model="new_password" required>
              </div>

              <div class="input-text">
                <label for="">Confirm Password</label>
                <input type="password" v-model="retype_new_password" required>
              </div>

              <a class="btn-change-password" @click="changePassword()">Change Password</a>
          </div>
        </div> -->

        <div :class="{'active-tab': isCurrentTab('my-order')}" class="my-order-wrapper">
          <div class="order-filter">
            <div class="filter">
              <div class="select-box">
                <svg 
                  class="select-box-icon" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M4 7.39038H10C10.5523 7.39038 11 6.94267 11 6.39038C11 5.8381 10.5523 5.39038 10 5.39038H4C3.44772 5.39038 3 5.8381 3 6.39038C3 6.94267 3.44772 7.39038 4 7.39038Z" 
                    fill="currentColor"/>
                  <path 
                    d="M4 13.2804H6C6.46352 14.2043 7.5012 14.6886 8.50704 14.4504C9.51288 14.2122 10.2232 13.314 10.2232 12.2804C10.2232 11.2467 9.51288 10.3486 8.50704 10.1104C7.5012 9.87222 6.46352 10.3565 6 11.2804H4C3.44772 11.2804 3 11.7281 3 12.2804C3 12.8327 3.44772 13.2804 4 13.2804Z" 
                    fill="currentColor"/>
                  <path 
                    d="M13.7198 8.46034C14.4937 8.45919 15.2106 8.05332 15.6098 7.39034H19.9998C20.5521 7.39034 20.9998 6.94262 20.9998 6.39034C20.9998 5.83806 20.5521 5.39034 19.9998 5.39034H15.7798C15.3573 4.35131 14.2288 3.7878 13.1444 4.07435C12.0599 4.36089 11.3571 5.40832 11.503 6.52044C11.6489 7.63255 12.5982 8.46323 13.7198 8.46034Z" 
                    fill="currentColor"/>
                  <path 
                    d="M10 17.4904H4C3.44772 17.4904 3 17.9381 3 18.4904C3 19.0426 3.44772 19.4904 4 19.4904H10C10.5523 19.4904 11 19.0426 11 18.4904C11 17.9381 10.5523 17.4904 10 17.4904Z" 
                    fill="currentColor"/>
                  <path 
                    d="M20.0001 17.4903H16.0601C15.6705 16.5276 14.6703 15.9589 13.6438 16.1165C12.6172 16.2742 11.8337 17.1167 11.7508 18.152C11.668 19.1872 12.3077 20.1436 13.2961 20.4625C14.2845 20.7813 15.3624 20.3789 15.9001 19.4903H16.0001H20.0001C20.5524 19.4903 21.0001 19.0426 21.0001 18.4903C21.0001 17.938 20.5524 17.4903 20.0001 17.4903Z" 
                    fill="currentColor"/>
                  <path 
                    d="M20 11.2804H12C11.4477 11.2804 11 11.7281 11 12.2804C11 12.8327 11.4477 13.2804 12 13.2804H20C20.5523 13.2804 21 12.8327 21 12.2804C21 11.7281 20.5523 11.2804 20 11.2804Z" 
                    fill="currentColor"/>
                </svg>
                <select v-model="selectedStatus">
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Pick-up">Pick-up</option>
                    <option value="Delivering">Delivering</option>
                    <option value="Received">Received</option>
                    <option value="Cancel">Cancel</option>
                </select>
              </div>
            </div>

            <div class="filter">
              <div class="select-box">
                <svg 
                  class="select-box-icon" 
                  width="24" height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M22.2939 13.08L17.6439 8.44001C17.4593 8.2516 17.2077 8.14377 16.9439 8.14001C16.6766 8.14112 16.421 8.24916 16.2339 8.44001L11.5839 13.08C11.3946 13.2678 11.2881 13.5234 11.2881 13.79C11.2881 14.0567 11.3946 14.3122 11.5839 14.5C11.7717 14.6893 12.0272 14.7958 12.2939 14.7958C12.5605 14.7958 12.8161 14.6893 13.0039 14.5L15.9439 11.56V20C15.9439 20.5523 16.3916 21 16.9439 21C17.4962 21 17.9439 20.5523 17.9439 20V11.56L20.8739 14.5C21.266 14.8921 21.9018 14.8921 22.2939 14.5C22.686 14.1079 22.686 13.4721 22.2939 13.08Z" 
                    fill="currentColor"/>
                  <path 
                    d="M12.0041 9.29C11.8163 9.10069 11.5607 8.9942 11.2941 8.9942C11.0275 8.9942 10.7719 9.10069 10.5841 9.29L7.65409 12.23V4C7.65409 3.44772 7.20638 3 6.65409 3C6.10181 3 5.65409 3.44772 5.65409 4V12.23L2.71409 9.29C2.32197 8.89788 1.68621 8.89788 1.29409 9.29C0.901969 9.68212 0.901969 10.3179 1.29409 10.71L5.94409 15.35C6.33413 15.7377 6.96405 15.7377 7.35409 15.35L12.0041 10.71C12.1934 10.5222 12.2999 10.2666 12.2999 10C12.2999 9.73336 12.1934 9.47777 12.0041 9.29Z" 
                    fill="currentColor"/>
                </svg>

                <select v-model="selectedSort">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="price-low-to-high">Price: Low to High</option>
                    <option value="price-high-to-low">Price: High to Low</option>
                </select>
              </div>
            </div>

          </div>
          
          <div class="list-order">
            <Order v-for="order in myOrders"
                  :key="order._id"
                  :order="order"/>
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

import Order from '../components/Order.vue';
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  components: {
    TheHeader,
    TheFooter,
    TheSubscribe,
    MiniCart,
    Order,
  },
  data() {
    return {
      currentTab: 'my-order',
      previewImage: "",
      new_avatar: "",
      full_name: "",
      address: "",
      phone: "",
      birthdate: "",

      password: "",
      new_password: "",
      retype_new_password: "",

      list: 5,
      myOrders: [],
      selectedStatus: 'All',
      selectedSort: 'newest',
    }
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
    selectedStatus: function () {
      // this.getOrders();
      this.filterOrdersByStatus();
    },
    orders: function () {
      // this.getOrders();
      this.filterOrdersByStatus();
    }
  },
  created() {
    this.getImg();
    this.full_name = this.userLogin.full_name;
    this.address = this.userLogin.address;
    this.phone = this.userLogin.phone;
    this.birthdate = this.userLogin.birthdate;

    this.getOrders();
    this.myOrders = this.orders;
  },
  computed: {
    ...mapGetters(
      [
        "userLogin",
        "orders", 
        "pendingOrders", 
        "approvedOrders", 
        "pickupOrders", 
        "deliveringOrders", 
        "receivedOrders", 
        "cancelOrders"
      ]),
  },
  methods: {
    ...mapActions(["logout", "setUser", "getOrders"]),
    setTab(newTab) {
      this.currentTab = newTab;
    },
    isCurrentTab(name_tab) {
      return this.currentTab == name_tab;
    },
    // logout() {
    //   this.$swal.fire({
    //       title: 'Are you sure you want to logout?',
    //       showCancelButton: true,
    //       confirmButtonText: 'Logout',
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         this.logout();
    //         sessionStorage.removeItem("user_login");
    //         this.$router.push("/");
    //         this.$swal.fire(
    //               'Goodbye!',
    //               'Successful Logout!',
    //               'success'
    //             )
    //       } 
    //     })
    // },
    getImg() {
      this.previewImage = `http://localhost:5000/avatar/${this.userLogin.avatar}`;
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
    selectFile(e) {
      this.new_avatar = e.target.files[0];
    },
    async changeInfo() {
      const formData = new FormData();
      formData.append("full_name", this.full_name);
      formData.append("address", this.address);
      formData.append("phone", this.phone);
      formData.append("birthdate", this.birthdate);
      formData.append("old_avatar", this.userLogin.avatar);
      formData.append("avatar", this.new_avatar);

      await axios
        .patch(
          `http://localhost:5000/api/users/${this.userLogin._id}`,
          formData
        )
        .then((res) => {
          this.setUser(res.data.userUpdated);
          this.$swal.fire(
                  'Update',
                  'Successful update!',
                  'success'
                )
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async changePassword() {
      if (this.new_password !== this.retype_new_password) {
        this.$alert(
          "Retype new password is incorect!",
          "Change password",
          "error"
        );
        return;
      }
      await axios
        .patch(
          `http://localhost:5000/api/user/changepassword/${this.userLogin._id}`,
          { password: this.password, new_password: this.new_password }
        )
        .then((res) => {
          this.$router.push({
            name: "MyInfo",
            params: { message: res.data.message },
          });
          this.$alert(
            "Successful change password!",
            "Change password",
            "success"
          );
        })
        .catch((err) => {
          this.$alert(err.message, "Change password", "error");
        });
    },
    filterOrdersByStatus() {
      switch (this.selectedStatus) {
        case "Pending":
            this.myOrders = this.pendingOrders;
            break;
        case "Approved":
            this.myOrders = this.approvedOrders;
            break;
        case "Pick-up":
            this.myOrders = this.pickupOrders;
            break;
        case "Delivering":
            this.myOrders = this.deliveringOrders;
            break;
        case "Received":
            this.myOrders = this.receivedOrders;
            break;
        case "Cancel":
            this.myOrders = this.cancelOrders;
            break;
        default:
            this.myOrders = this.orders;
            break;
      }
    }
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

  @apply sm:divide-x;
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

.active-tab {
  @apply grid !important;
}

.my-account-wrapper {
  @apply w-full max-w-full;
  /* @apply flex-col gap-8 md:flex-row; */

  @apply grid grid-cols-1 place-items-center sm:grid-cols-2 sm:place-items-start;
  @apply p-3 sm:py-2 md:px-2 lg:px-4;
  /* @apply relative; */
  @apply hidden;
}

.account-col {
  @apply max-w-xs;
  /* @apply mx-auto; */
}

.account-summary-wrapper {
  @apply w-full;
  /* @apply md:px-2 lg:px-4; */
}

.account-summary {
  /* @apply w-full; */
  @apply flex flex-col gap-4;

  @apply bg-dominant;

  @apply p-4;
}

.my-avatar {
  @apply flex flex-col items-center gap-3;
}

.my-avatar img {
  @apply p-1  sm:p-2 lg:p-4;
  @apply bg-white;
  @apply w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-56 lg:h-56;
  @apply object-contain;
  @apply rounded-full;
}

.input-avatar {
  @apply flex flex-row items-center gap-2;
  @apply px-4 py-2;
  @apply bg-white;
  /* @apply rounded-xl; */
  /* @apply border; */

  box-shadow: rgba(57, 42, 35, 0.05) 0px 12px 10px -10px;
}

.input-avatar input[type='file']{
  @apply hidden;
}

.input-avatar svg {
  @apply w-5 h-5;
}

.input-avatar span.text {
  @apply w-full;
  @apply text-sm font-semibold capitalize;
  @apply truncate;
}

.fixed-info {
  @apply w-full;
  @apply p-4;
  @apply rounded-xl;
  @apply bg-white;
  @apply flex flex-col gap-3;
}

.fixed-info-item {
  @apply w-full;
  @apply flex flex-col;
}

.fixed-info-item label {
  @apply text-base font-semibold opacity-60;
}

.fixed-info-item span {
  @apply text-base font-semibold;
  @apply truncate;
}

.my-account {
  @apply w-full;
  @apply p-4 sm:py-0;
  @apply flex flex-col items-center gap-8;
}

.account-info {
  @apply w-full;
  @apply flex flex-col gap-2;
}

.account-info .input-text {
  @apply w-full;
  @apply flex-grow-0;
}

.account-info .account-title {
  @apply w-full;
  /* @apply border-b border-secondary; */
  @apply pb-3 pt-2;
  @apply text-lg font-extrabold uppercase;
}

a.btn-update-info,
a.btn-change-password {
  @apply mt-4;
  @apply w-max self-end;
  @apply flex flex-row justify-center items-center gap-2;
  @apply px-8 py-2;
  @apply bg-gold-500 text-white;
  @apply text-base font-semibold;
  /* @apply rounded-xl; */

  box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;
}

/* Change Password Tab */
.my-change-password-wrapper {
  @apply w-full;
  @apply p-3 sm:py-2 md:px-2 lg:px-4;
  @apply hidden;
}

.my-change-password {
  @apply w-full max-w-xs mx-auto;
  @apply flex flex-col gap-2;
  /* @apply bg-dominant; */
}

.my-change-password .input-text {
  @apply w-full;
  @apply flex-grow-0;
}

.my-change-password .account-title {
  @apply w-full;
  @apply pb-3 pt-2;
  @apply text-lg font-extrabold uppercase;
}

/* --------------------- */

/* Order Tab */

.my-order-wrapper {
  @apply w-full max-w-full;
  @apply grid grid-cols-1;
  @apply hidden;
  @apply p-3 sm:py-2 md:px-4;
}

.list-order {
  @apply w-full;
  @apply p-2 lg:p-4;
  @apply flex flex-col gap-4 sm:gap-6 lg:gap-8;
}

.order-filter {
  @apply flex-shrink-0;
  @apply w-full;
  @apply p-2 lg:p-4;
  @apply flex flex-row justify-between items-center gap-4;
}

.filter {
  @apply w-max;
}

.select-box {
  @apply relative inline-flex self-center;
}

.select-box .select-box-icon {
  @apply text-secondary;
  @apply pointer-events-none;
  @apply absolute top-0 right-0 m-1;
  @apply rounded;
  @apply w-8 h-8;
  @apply p-1;
}

.select-box > select {
  @apply font-bold;
  @apply bg-dominant;
  @apply w-full h-10;
  @apply pl-4 pr-10;
  @apply border border-secondary;
  @apply focus:outline-none appearance-none;
}

</style>