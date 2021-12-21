import WishlistAPI from "../../api/WishlistAPI";

const state = {
  wishlist_items: [],
};

const getters = {
  wishlist: (state) => state.wishlist_items,
  wishlist_length: (state) => state.wishlist_items.length,
};

const actions = {
  async getWishlist({ commit }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };

    WishlistAPI.get(config)
    .then((res) => {

      if(res.data.items) {
        commit("SET_WISHLIST", res.data.items);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  },
  async addItemToWishlist({ commit }, product) {
    commit("ADD_ITEM_TO_WISHLIST", product);
  },
  async deleteWishlistItem({ commit }, product_id) {
    commit("DELETE_ITEM_TO_WISHLIST", product_id);
  },
  async addItemsToWishlist({ dispatch, state }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    let items = state.wishlist_items.map((product) => product._id);

    WishlistAPI.add(items, config)
    .then((res) => {
      console.log(res);
      dispatch("getWishlist");
    })
    .catch((err) => {
      console.log(err);
    });
  },
  logoutWishlist({ commit }) {
    commit("SET_WISHLIST", []);
  }
};

const mutations = {
  SET_WISHLIST(state, items) {
    state.wishlist_items = items;
  },
  ADD_ITEM_TO_WISHLIST(state, product) {
    state.wishlist_items.push(product);
  },
  DELETE_ITEM_TO_WISHLIST(state, product_id) {
    state.wishlist_items = state.wishlist_items.filter((item) => item._id != product_id);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
