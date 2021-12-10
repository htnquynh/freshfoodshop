const state = {
  user_login: {},
  is_login: false,
};

const getters = {
  userLogin: (state) => state.user_login,
  is_login: (state) => state.is_login,
};

const actions = {
  setUser({ commit }, userLogin) {
    commit("SET_USER", userLogin);
  },
  logoutUser({ commit }, user) {
    commit("LOG_OUT", user);
  },
};

const mutations = {
  SET_USER(state, userLogin) {
    state.user_login = userLogin;
    state.is_login = true;
  },
  LOG_OUT(state, user) {
    state.user_login = user;
    state.is_login = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
