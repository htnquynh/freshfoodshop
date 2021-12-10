import axios from "axios";

const state = {
  items: [],
};

const getters = {
  wishlist: (state) => state.items,
  total_item: (state) => state.items.length,
};

const actions = {
  async getWishList({ commit }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    await axios
      .get("http://localhost:5000/api/getwishlist", config)
      .then((res) => {
        commit("GET_WISHLIST", res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async addItem({ commit }, product) {
    commit("ADD_ITEM_TO_WISHLIST", product);
  },
  async deleteItem({ commit }, product_id) {
    commit("DELETE_ITEM_TO_WISHLIST", product_id);
  },
  async addItemsToWishlist({ dispatch, state }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    let items = state.items.map((product) => product._id);
    await axios
      .post("http://localhost:5000/api/additemtowishlist", { items }, config)
      .then((res) => {
        console.log(res.data);
        dispatch("getWishList");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

const mutations = {
  GET_WISHLIST(state, items) {
    state.items = items;
  },
  ADD_ITEM_TO_WISHLIST(state, product) {
    state.items.push(product);
  },
  DELETE_ITEM_TO_WISHLIST(state, product_id) {
    state.items = state.items.filter((item) => item._id != product_id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
