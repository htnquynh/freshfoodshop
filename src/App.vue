<template>
  <div id="app">
    <router-view/>
    <LoadScreen :isLoading="isLoading"/>
  </div>
</template>
<script>
import LoadScreen from "./components/LoadScreen.vue"
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    LoadScreen
  },
  data() {
    return {
    }
  },
  created() {
    // this.start_load();
    console.log("In App.vue: " + this.isLoading);
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
  methods: {
    ...mapActions(['start_load']),
  },
}
</script>
<style>

</style>
