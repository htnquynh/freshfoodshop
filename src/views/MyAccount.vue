<template>
  <div class="shop-page">
    <ul class="my-account-nav">
      <li @click="setTab('my-account')">
        <a :class="{'active-link': isCurrentTab('my-account')}" class="nav-link">
          <span class="content">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z" />
            </svg>
            My Account 
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <rect fill="none" height="24" width="24" />
            <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
          </svg>
        </a>
      </li>
      <li @click="setTab('my-order')">
        <a :class="{'active-link': isCurrentTab('my-order')}" class="nav-link">
          <span class="content">
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <path d="M0,0h24v24H0V0z" fill="none" />
              <g>
                <path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                <rect height="2" width="6" x="9" y="7" />
                <rect height="2" width="2" x="16" y="7" />
                <rect height="2" width="6" x="9" y="10" />
                <rect height="2" width="2" x="16" y="10" />
              </g>
            </svg>

            My Order
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <rect fill="none" height="24" width="24" />
            <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
          </svg>
        </a>
      </li>

      <li @click="setTab('change-password')">
        <a :class="{'active-link': isCurrentTab('change-password')}" class="nav-link">
          <span class="content">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
              <g fill="none">
                <path d="M0 0h24v24H0V0z" />
                <path d="M0 0h24v24H0V0z" opacity=".87" />
              </g>
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
            </svg>

          Change Password
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
            <rect fill="none" height="24" width="24" />
            <path d="M15,5l-1.41,1.41L18.17,11H2V13h16.17l-4.59,4.59L15,19l7-7L15,5z" />
          </svg>
        </a>
      </li>

      <hr>

      <li>
        <router-link to="/shopping-cart">
          <a class="nav-link">
            <span class="content">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 3c0 .55.45 1 1 1h1l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.67-1.43c-.16-.35-.52-.57-.9-.57H2c-.55 0-1 .45-1 1zm16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
              </svg>

              Shopping Cart
            </span>
          </a>
        </router-link>
      </li>

      <li>
        <router-link to="/wishlist">
          <a class="nav-link">
            <span class="content">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19.66 3.99c-2.64-1.8-5.9-.96-7.66 1.1-1.76-2.06-5.02-2.91-7.66-1.1-1.4.96-2.28 2.58-2.34 4.29-.14 3.88 3.3 6.99 8.55 11.76l.1.09c.76.69 1.93.69 2.69-.01l.11-.1c5.25-4.76 8.68-7.87 8.55-11.75-.06-1.7-.94-3.32-2.34-4.28zM12.1 18.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
              </svg>
              My Wishlist
            </span>
          </a>
        </router-link>
      </li>

      <hr>

      <li @click="logout()">
          <a class="nav-link">
            <span class="content">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
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
              Logout
            </span>
          </a>
      </li>
    </ul>

    <div :class="{'active-tab': isCurrentTab('my-account')}" class="my-account-wrapper">
      <div class="my-account">
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

    <div :class="{'active-tab': isCurrentTab('change-password')}" class="my-account-wrapper">
      <div class="my-account">
        <div class="account-info">
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
      </div>
    </div>

    <div :class="{'active-tab': isCurrentTab('my-order')}" class="my-account-wrapper">
      <div class="list-order">
        <Order v-for="order in myOrders"
              :key="order._id"
              :order="order"/>
      </div>
      <div class="order-filter">
        <div class="filter">
          <div class="filter-title">
            <h3>Filter order by status</h3>
          </div>

          <div class="group-radio-box">
            <label class="radio-box">
              <input type="radio" name="order-status" 
                                        id="all" value="All"
                                        v-model="selectedStatus"/>
              <span class="design"></span>
              <span class="text">All</span>
            </label>

            <label class="radio-box">
              <input type="radio" name="order-status" 
                                        id="pending" value="Pending"
                                        v-model="selectedStatus"/>
              <span class="design"></span>
              <span class="text">Pending</span>
            </label>

            <label class="radio-box">
              <input type="radio" name="order-status" 
                                        id="approved" value="Approved"
                                        v-model="selectedStatus"/>
              <span class="design"></span>
              <span class="text">Approved</span>
            </label>

            <label class="radio-box">
              <input type="radio" name="order-status" 
                                        id="pickup" value="Pick-up"
                                        v-model="selectedStatus"/>
              <span class="design"></span>
              <span class="text">Pick-up</span>
            </label>

            <label class="radio-box">
              <input type="radio" name="order-status" 
                                        id="delivering" value="Delivering"
                                        v-model="selectedStatus"/>
              <span class="design"></span>
              <span class="text">Delivering</span>
            </label>

            <label class="radio-box">
              <input type="radio" name="order-status" 
                                        id="received" value="Received"
                                        v-model="selectedStatus"/>
              <span class="design"></span>
              <span class="text">Received</span>
            </label>

            <label class="radio-box">
              <input type="radio" name="order-status" 
                                        id="cancel" value="Cancel"
                                        v-model="selectedStatus"/>
              <span class="design"></span>
              <span class="text">Cancel</span>
            </label>
          </div>
        </div>

        <div class="filter">
          <div class="filter-title">
            <h3>Sort order by</h3>
          </div>

          <div class="group-radio-box">
            <label class="radio-box">
              <input type="radio" value="newest" name="order-sort"/>
              <span class="design"></span>
              <span class="text">Newest</span>
            </label>

            <label class="radio-box">
              <input type="radio" value="oldest" name="order-sort"/>
              <span class="design"></span>
              <span class="text">Oldest</span>
            </label>

            <label class="radio-box">
              <input type="radio" value="price-low-to-high" name="order-sort"/>
              <span class="design"></span>
              <span class="text">Price: Low to High</span>
            </label>

            <label class="radio-box">
              <input type="radio" value="price-high-to-low" name="order-sort"/>
              <span class="design"></span>
              <span class="text">Price: High to Low</span>
            </label>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Order from '../components/Order.vue';
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  components: {
    Order,
  },
  data() {
    return {
      currentTab: 'my-account',
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
    ...mapActions(["logoutUser", "setUser", "getOrders"]),
    setTab(newTab) {
      this.currentTab = newTab;
    },
    isCurrentTab(name_tab) {
      return this.currentTab == name_tab;
    },
    logout() {
      this.$swal.fire({
          title: 'Are you sure you want to logout?',
          showCancelButton: true,
          confirmButtonText: 'Logout',
        }).then((result) => {
          if (result.isConfirmed) {
            this.logoutUser({});
            sessionStorage.removeItem("user_login");
            this.$router.push("/");
            this.$swal.fire(
                  'Goodbye!',
                  'Successful Logout!',
                  'success'
                )
          } 
        })
    },
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

.shop-page {
  @apply max-w-6xl mx-auto;
  @apply p-4 pt-8 pb-16 md:pb-24;
  @apply flex flex-col gap-4 md:flex-row md:gap-0 items-start;
}

.my-account-nav {
  @apply flex-shrink-0;
  @apply w-72;
  @apply flex flex-col justify-start gap-4;
  @apply px-4 py-8;
  @apply bg-white;

  @apply rounded-3xl;
}

.my-account-nav .nav-link {
  @apply px-4 py-2;
  @apply flex flex-row justify-between;
  @apply font-semibold;

  @apply border-l-4 border-transparent;
}

.nav-link .content {
  @apply flex flex-row gap-3;
}

.nav-link > svg {
  @apply hidden;
}

.active-link {
  @apply border-l-4 border-gold-500 !important;
  @apply font-extrabold !important;
}

.active-link svg {
  @apply block;
  @apply text-gold-500;
}

.my-account-wrapper {
  @apply w-full;
  @apply flex-col gap-8 lg:flex-row sm:gap-2 lg:gap-0;
  /* @apply relative; */
  @apply hidden;
}

.active-tab {
  @apply flex;
}

.my-account {
  @apply w-full sm:w-1/2;
  @apply md:px-4 lg:px-8;
  @apply flex flex-col items-center gap-8;
}

.account-info {
  @apply w-min;
  @apply flex flex-col gap-2;
}

.account-info .account-title {
  @apply w-full;
  /* @apply border-b border-secondary; */
  @apply pb-1 pt-2 mb-4;
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
  @apply rounded-xl;
}

.account-summary {
  @apply w-full sm:w-1/2 max-w-sm mx-auto;
  @apply flex flex-col gap-4;

  @apply order-first md:order-last;
}

.my-avatar {
  @apply flex flex-col items-center gap-2;
}

.my-avatar img {
  @apply w-40 h-40 md:w-56 md:h-56;
  @apply object-contain;
  @apply rounded-full;
}

.input-avatar {
  @apply flex flex-row gap-2;
  @apply px-4 py-2;
  @apply bg-white;
  @apply rounded-xl;
  @apply border;
}

.input-avatar input[type='file']{
  @apply hidden;
}

.input-avatar span.text {
  @apply font-semibold capitalize;
}

.fixed-info {
  @apply w-72 mx-auto;
  @apply p-4;
  @apply rounded-xl;
  @apply bg-white;
  @apply flex flex-col gap-3;
}

.fixed-info-item {
  @apply flex flex-col;
}

.fixed-info-item label {
  @apply text-base font-semibold opacity-60;
}

.fixed-info-item span {
  @apply text-base font-semibold;
}

.list-order {
  @apply w-full;
  @apply md:px-8 lg:px-16;
  @apply flex flex-col gap-4 md:gap-8;
}

.list-order > .order {
  @apply w-full max-w-md mx-auto !important;
  @apply border;
}

.order-filter {
  @apply order-first lg:order-last;
  @apply flex-shrink-0;
  @apply w-max mx-auto;
  @apply px-2 md:px-3 xl:px-4;
  @apply flex flex-col gap-y-6 lg:gap-y-8;
}

.filter {
  @apply w-full;
  @apply flex flex-col gap-2 md:gap-4;
}

.filter > .group-radio-box {
  @apply pl-4 !important;
}

.filter .filter-title {
  @apply text-lg md:text-xl font-bold;
}


</style>