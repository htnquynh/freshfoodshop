import axios from "axios";
// import alert from "vue-simple-alert";

const state = {
  cartItems: [],
  visibleMiniCart: false,
};

const getters = {
  cartItems: (state) => state.cartItems,
  totalPrice: (state) => {
    let cartTotalPrice = 0;
    state.cartItems.forEach((item) => {
      cartTotalPrice += parseInt(item.total_price);
    });
    return cartTotalPrice;
  },
  noItems: (state) => state.cartItems.length,
  visibleMiniCart: (state) => state.visibleMiniCart,
};

const actions = {
  async setVisibleMiniCart({ commit }) {
    commit("SET_VISIBLE_MINI_CART");
  },
  async getCartItems({ commit }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };

    await axios
      .get("http://localhost:5000/api/getCartItems", config)
      .then((res) => {
        commit("GET_CART_ITEMS", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async updateCart({ dispatch }, { product_id, quantity, itemPrice }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    let price = parseInt(itemPrice) * quantity;
    price = price.toString();
    let cartItems = {
      cartItems: [
        {
          product: product_id,
          quantity,
          price,
        },
      ],
    };
    await axios
      .post("http://localhost:5000/api/addToCart", cartItems, config)
      .then((res) => {
        console.log(res.data);
        dispatch("getCartItems");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async addItemToCart(
    { state, dispatch },
    { product_id, quantity, itemPrice }
  ) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    const selectItem = state.cartItems.filter((item) => item._id == product_id);

    if (selectItem.length != 0) {
      quantity += selectItem[0].quantity;
    }

    let price = parseInt(itemPrice) * quantity;
    price = price.toString();
    let cartItems = {
      cartItems: [
        {
          product: product_id,
          quantity,
          price,
        },
      ],
    };
    await axios
      .post("http://localhost:5000/api/addToCart", cartItems, config)
      .then((res) => {
        console.log(res.data);
        // alert.alert("Add To Cart Successfully!", "Add To Cart", "success");
        dispatch("getCartItems");
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async removeCartItem({ dispatch }, product_id) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    await axios
      .post("http://localhost:5000/api/removeCartItem", { product_id }, config)
      .then((res) => {
        console.log(res.data);
        dispatch("getCartItems");
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  GET_CART_ITEMS(state, cartItems) {
    state.cartItems = cartItems;
  },
  SET_VISIBLE_MINI_CART(state) {
    state.visibleMiniCart = !state.visibleMiniCart;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
