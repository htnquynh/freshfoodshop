import CartAPI from "../../api/CartAPI";

const state = {
  cart: {
    user: "",
    cartItems: [],
  },
  visibleMiniCart: false,
};

const getters = {
  cart: (state) => state.cart,
  totalPrice: (state) => {
    let cartTotalPrice = 0;

    state.cart.cartItems.forEach((item) => {
      cartTotalPrice += parseInt(item.price);
    });

    return cartTotalPrice;
  },
  noItems: (state) => state.cart.cartItems.length,
  visibleMiniCart: (state) => state.visibleMiniCart,
};

const actions = {
  async setVisibleMiniCart({ commit }) {
    commit("TOGGLE_VISIBLE_MINI_CART");
  },
  async getUserCart({ commit }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };

    await CartAPI.getUserCart(config)
    .then((res) => {
      if(res.data) {
        commit("SET_CART", res.data);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  },
  async addItemToCart({ dispatch }, new_item) {
    // Get Token
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    // Calc price = unit_price * qty
    let total_price = parseInt(new_item.price) * new_item.quantity;
    total_price = total_price.toString();
    console.log(total_price);
    let items = [];
    items.push({product: new_item.id, quantity: new_item.quantity, price: total_price});
    await CartAPI.add(items, config)
      .then((res) => {
        console.log(res.data);
        dispatch("getUserCart").then(() => {
          return true;
        });
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  },
  async addAllToCart({ dispatch }, items) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    items.forEach((item) => {
      item.price = (parseInt(item.price) * item.quantity).toString();
    });
    await CartAPI.add(items, config)
      .then((res) => {
        console.log(res.data);
        dispatch("getUserCart").then(() => {
          return true;
        });
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  },
  async removeByProductId({ dispatch }, product_id) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };

    await CartAPI.removeByProductId(product_id, config)
    .then((res) => {
        console.log(res.data.message);
        dispatch("getUserCart");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async clearCart({ commit }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    await CartAPI.clear(config).then(() => {
      commit("CLEAR_CART");
    }).catch((error) => {
      console.log(error);
    });
  },
  logoutCart({ commit }) {
    commit("SET_CART", { user: '',cartItems: [], });
  }
};

const mutations = {
  SET_CART(state, cart) {
    state.cart = cart;
  },
  CLEAR_CART(state) {
    state.cart.cartItems = [];
  },
  TOGGLE_VISIBLE_MINI_CART(state) {
    state.visibleMiniCart = !state.visibleMiniCart;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
