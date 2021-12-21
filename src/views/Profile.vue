<template>
  <div class="my-account-wrapper">
    <div class="account-summary-wrapper account-col">          
      <div class="account-summary">
        <div class="my-avatar">
          <img
            v-if="new_avatar"
            :src="previewImage"
            alt="Account Image Placeholder"
            class="image-placeholder"
          />
          <img
            v-else-if="userLogin.avatar"
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
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";
import UserAPI from "../api/UserAPI";

export default {
  components: {
  },
  data() {
    return {
      previewImage: "",
      new_avatar: "",
      full_name: "",
      address: "",
      phone: "",
      birthdate: "",
    }
  },
  created() {
    this.getImg();
    this.full_name = this.userLogin.full_name;
    this.address = this.userLogin.address;
    this.phone = this.userLogin.phone;
    this.birthdate = this.userLogin.birthdate;
  },
  computed: {
    ...mapGetters(["userLogin"]),
  },
  methods: {
    ...mapActions(["setUser"]),
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
      console.log("Change Profile");
      
      const formData = new FormData();
      formData.append("full_name", this.full_name);
      formData.append("address", this.address);
      formData.append("phone", this.phone);
      formData.append("birthdate", this.birthdate);
      formData.append("old_avatar", this.userLogin.avatar);
      formData.append("avatar", this.new_avatar);

      UserAPI.update(this.userLogin._id, formData)
      .then((res) => {
        this.setUser(res.data.userUpdated);
        this.$swal.fire(
          'Success!',
          'You have successfully updated your information',
          'success'
        )
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

.my-account-wrapper {
  @apply w-full max-w-full;
  @apply grid grid-cols-1 place-items-center sm:grid-cols-2 sm:place-items-start;
  @apply p-3 sm:py-2 md:px-2 lg:px-4;
}

.account-col {
  @apply max-w-xs;
}

.account-summary-wrapper {
  @apply w-full;
}

.account-summary {
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
  @apply pb-3 pt-2;
  @apply text-lg font-extrabold uppercase;
}

a.btn-update-info {
  @apply mt-4;
  @apply w-max self-end;
  @apply flex flex-row justify-center items-center gap-2;
  @apply px-8 py-2;
  @apply bg-gold-500 text-white;
  @apply text-base font-semibold;
  box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;
}
</style>