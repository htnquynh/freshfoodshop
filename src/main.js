import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Tailwind
import "./tailwind.css";

// vuex
import store from "./store";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//firebase
import * as firebase from "firebase/app";

//Fb chat
import VueFbCustomerChat from "vue-fb-customer-chat";
const firebaseConfig = {
  apiKey: "AIzaSyC9P1HaTCbjot1u3RepAViBU6A8yaqTRdw",
  authDomain: "freshshop-1f7b3.firebaseapp.com",
  projectId: "freshshop-1f7b3",
  storageBucket: "freshshop-1f7b3.appspot.com",
  messagingSenderId: "975118991781",
  appId: "1:975118991781:web:3e264dd07ebebbab47284c",
};

firebase.initializeApp(firebaseConfig);
Vue.use(VueSweetalert2);
Vue.use(VueFbCustomerChat, {
  page_id: 112927988067091, //  change 'null' to your Facebook Page ID,
  theme_color: "#333333", // theme color in HEX
  locale: "en_US", // default 'en_US'
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  store,
}).$mount("#app");
