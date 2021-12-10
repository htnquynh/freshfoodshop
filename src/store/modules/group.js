import axios from "axios";

const state = {
  groups: [],
  selectedGroup: {},
};

const getters = {
  groups: (state) => state.groups.filter((g) => g.status == "Enable"),
  selectedGroup: (state) => state.selectedGroup,
};

const actions = {
  async getGroups({ commit }) {
    await axios
      .get("http://localhost:5000/api/group/all")
      .then((res) => {
        commit("SET_GROUPS", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getSelectedGroup({ commit, state }, group_id) {
    const group = state.groups.filter((g) => g._id == group_id)[0];
    commit("SET_SELECTED_GROUP", group);
  },
};

const mutations = {
  SET_GROUPS(state, groups) {
    state.groups = groups;
  },
  SET_SELECTED_GROUP(state, group) {
    state.selectedGroup = group;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
