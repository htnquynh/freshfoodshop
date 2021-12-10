<template>
  <div id="app">
    <Header/>
    
    <router-view/>

    <Service/>
    <Subscribe/>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Subscribe from './components/Subscribe.vue';
import Service from './components/Service.vue';
export default {
  components: {
    Header,
    Footer,
    Subscribe,
    Service
  }
}
</script>
<style>

</style>
