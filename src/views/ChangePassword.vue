<template>
  <div class="my-change-password-wrapper">
    <div class="my-change-password">
        <h3 class="account-title">Change Password</h3>
        <div class="input-text">
          <label for="">Old Password</label>
          <input type="password" v-model="password">
        </div>

        <div class="input-text">
          <label for="">New Password</label>
          <input type="password" v-model="new_password">
        </div>

        <div class="input-text">
          <label for="">Confirm Password</label>
          <input type="password" v-model="retype_new_password">
        </div>

        <a class="btn-change-password" @click="changePassword()">Change Password</a>
    </div>
  </div>
</template>

<script>
import UserAPI from "../api/UserAPI";
import { mapGetters } from "vuex";

export default {
  components: {
  },
  data() {
    return {
      password: "",
      new_password: "",
      retype_new_password: "",
    }
  },
  created() {
  },
  computed: {
    ...mapGetters(["userLogin"]),
  },
  methods: {
    async changePassword() {
      if (this.password == "" || this.new_password == "" || this.retype_new_password == "") {
        this.$swal.fire(
            'Uh oh!',
            'Please complete all information.',
            'error'
          );
        return;
      }

      if (this.new_password !== this.retype_new_password) {
        this.$swal.fire(
            'Uh oh!',
            'Confirm password does not match.',
            'error'
          );
        return;
      }

      UserAPI.changePassword(this.userLogin._id, this.password, this.new_password)
        .then((res) => {
          console.log(res.data.message);
          this.$swal.fire(
            'Success!',
            'You have successfully updated your password',
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

.my-change-password-wrapper {
  @apply w-full;
  @apply p-3 sm:py-2 md:px-2 lg:px-4;
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

a.btn-change-password {
  @apply mt-4;
  @apply w-max self-end;
  @apply flex flex-row justify-center items-center gap-2;
  @apply px-8 py-2;
  @apply bg-gold-500 text-white;
  @apply text-base font-semibold;
  box-shadow: rgba(255, 201, 40, 0.6) 0px 12px 10px -10px;
}
</style>