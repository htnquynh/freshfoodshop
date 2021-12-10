import axios from "axios";

const state = {
  category: [],
  productList: [],
  keyword: "",
  filteredProduct: [],
  selectedProduct: {},
  compareProducts: [],
};

const getters = {
  productList: (state) =>
    state.productList.filter((item) => item.status == "Enable"),
  selectedProduct: (state) => state.selectedProduct,
  keyword: (state) => state.keyword,
  filteredProduct: (state) => state.filteredProduct,
  category: (state) => state.category,
  compareProducts: (state) => state.compareProducts,
};

const actions = {
  async getProducts({ commit }) {
    await axios
      .get("http://localhost:5000/api/getallproducts")
      .then((res) => {
        commit("GET_PRODUCTS", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getSelectedProduct({ commit, state }, product_id) {
    const product = state.productList.filter((p) => p._id == product_id)[0];
    commit("SET_SELECTED_PRODUCT", product);
  },
  async getCategory({ commit }) {
    await axios
      .get("http://localhost:5000/api/getallcategory")
      .then((res) => {
        commit("SET_CATEGORY", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  setKeyword({ commit, dispatch }, keyword) {
    commit("SET_KEYWORD", keyword);
    dispatch("getFilteredProduct");
  },
  getCompareProducts({ commit, state }, product_id) {
    const product = state.productList.find((item) => item._id == product_id);
    commit("SET_COMPARE_PRODUCTS", product);
  },
  deleteCompareProduct({ commit }, product_id) {
    commit("DELETE_COMPARE_PRODUCT", product_id);
  },
  getFilteredProduct({ commit, state }) {
    let filteredList = state.productList.filter(
      (item) => item.status == "Enable"
    );
    filteredList = filteredList.filter((p) => {
      return p.name.toLowerCase().includes(state.keyword.toLowerCase());
    });
    commit("SET_FILTERED_PRODUCT", filteredList);
  },
};

const mutations = {
  GET_PRODUCTS(state, products) {
    state.productList = products;
  },
  SET_SELECTED_PRODUCT(state, product) {
    state.selectedProduct = product;
  },
  SET_FILTERED_PRODUCT(state, list) {
    state.filteredProduct = list;
  },
  SET_KEYWORD(state, keyword) {
    state.keyword = keyword;
  },
  SET_CATEGORY(state, category) {
    state.category = category;
  },
  SET_COMPARE_PRODUCTS(state, product) {
    state.compareProducts.push(product);
  },
  DELETE_COMPARE_PRODUCT(state, product_id) {
    state.compareProducts = state.compareProducts.filter(
      (item) => item._id != product_id
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
