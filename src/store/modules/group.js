import GroupAPI from "../../api/GroupAPI";

const state = {
  groups: [],
  selectedGroup: {},
};

const getters = {
  groups: (state) => state.groups,
  selectedGroup: (state) => state.selectedGroup,
};

// function sortGroupByDate(list) {
//   return list.sort(function(a,b){
//     return new Date(b.createdAt) - new Date(a.createdAt);
//   });
// }

const actions = {
  async getGroups({ commit }) {
    await GroupAPI.get()
      .then((res) => {
        let groups = res.data.reverse();
        // groups = sortGroupByDate(groups);
        commit("SET_GROUPS", groups);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setSelectedGroup({ commit, state }, group_id) {
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
