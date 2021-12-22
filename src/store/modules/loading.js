const state = {
  isLoading: false,
};

const getters = {
  isLoading: (state) => state.isLoading,
};

const actions = {
  start_load({ commit }) {
    commit("SET_LOADING", true);
  },
  stop_load({ commit }) {
    commit("SET_LOADING", false);
  },
};

const mutations = {
  SET_LOADING(state, isLoading) {
    state.isLoading = isLoading;
  },
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
