<template>
  <div id="app">
    <router-view/>
    <LoadScreen :isLoading="isLoading"/>
  </div>
</template>
<script>
import LoadScreen from "./components/LoadScreen.vue"
import { mapGetters } from "vuex";
export default {
  components: {
    LoadScreen
  },
  data() {
    return {
    }
  },
  created() {
    console.log("In App.vue: " + this.isLoading);
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
}
</script>
<style>

</style>
