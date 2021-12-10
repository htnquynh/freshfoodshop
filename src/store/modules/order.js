import axios from "axios";

const state = {
    orders: [],
};

const getters = {
    orders: (state) => state.orders,
    pendingOrders: (state) => state.orders.filter((order) => order.status == 'Pending'),
    approvedOrders: (state) => state.orders.filter((order) => order.status == 'Approved'),
    pickupOrders: (state) => state.orders.filter((order) => order.status == 'Pick-up'),
    deliveringOrders: (state) => state.orders.filter((order) => order.status == 'Delivering'),
    receivedOrders: (state) => state.orders.filter((order) => order.status == 'Received'),
    cancelOrders: (state) => state.orders.filter((order) => order.status == 'Cancel'),
};

const actions = {
    async getOrders({ commit }) {
        let token = JSON.parse(sessionStorage.getItem("user_login"));
        let config = {
            headers: { Authorization: "bearer " + token },
        };

        await axios
            .get("http://localhost:5000/api/getOrdersByUser", config)
            .then((res) => {
                commit("SET_ORDERS", res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    async updateOrderStatus({ dispatch }, {order_id, status}) {
        let token = JSON.parse(sessionStorage.getItem("user_login"));
        let config = {
            headers: { Authorization: "bearer " + token },
        };

        await axios
        .patch(
            `http://localhost:5000/api/orders/updateStatus/${order_id}`,
            { status },
            config
        )
        .then((res) => {
            console.log(res);
            dispatch('getOrders');
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
