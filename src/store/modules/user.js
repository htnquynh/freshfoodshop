
import UserAPI from "../../api/UserAPI";

const state = {
  user_login: {},
  is_login: false,
};

const getters = {
  userLogin: (state) => state.user_login,
  is_login: (state) => state.is_login,
};

const actions = {
  async check_username(username ) {
    await UserAPI.getUserByUsername(username)
    .then((res) => {
      return JSON.stringify(res.data);
    })
    .catch((err) => {
      console.log(err);
      return "error";
    });
  },
  setUser({ commit }, userLogin) {
    commit("SET_USER", userLogin);
  },
  logoutUser({ commit }) {
    commit("CLEAR_USER");
  },
};

const mutations = {
  SET_USER(state, userLogin) {
    state.user_login = userLogin;
    state.is_login = true;
  },
  CLEAR_USER(state) {
    state.user_login = {};
    state.is_login = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
