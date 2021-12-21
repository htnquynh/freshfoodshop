import OrderAPI from "../../api/OrderAPI";

const state = {
  orders: [],
};

const getters = {
  orders: (state) => state.orders,
  pendingOrders: (state) =>
    state.orders.filter((order) => order.status == "Pending"),
  approvedOrders: (state) =>
    state.orders.filter((order) => order.status == "Approved"),
  pickupOrders: (state) =>
    state.orders.filter((order) => order.status == "Pick-up"),
  deliveringOrders: (state) =>
    state.orders.filter((order) => order.status == "Delivering"),
  receivedOrders: (state) =>
    state.orders.filter((order) => order.status == "Received"),
  cancelOrders: (state) =>
    state.orders.filter((order) => order.status == "Cancel"),
};

function sortOrderByDate(list) {
  return list.sort(function(a,b){
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}

const actions = {
  async getOrders({ commit }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };
    OrderAPI.getUserOrder(config)
    .then((res) => {
      let orders = res.data;
      orders = sortOrderByDate(orders);
      commit("SET_ORDERS", orders);
    })
    .catch((err) => {
      console.log(err);
    });
  },
  
  async updateOrderStatus({ dispatch }, { order_id, status }) {
    let token = JSON.parse(sessionStorage.getItem("user_login"));
    let config = {
      headers: { Authorization: "bearer " + token },
    };

    OrderAPI.updateStatus(order_id, status, config)
    .then((res) => {
      console.log(res);
      dispatch("getOrders");
    })
    .catch((err) => {
      console.log(err);
    });
  },
};

const mutations = {
  SET_ORDERS(state, orders) {
    state.orders = orders;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
