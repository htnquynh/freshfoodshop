import ProductAPI from "../../api/ProductAPI";
import CategoryAPI from "../../api/CategoryAPI";

const state = {
  category: [],
  products: [],

  keyword: "",
  filteredProduct: [],
  selectedProduct: {},
  compareProducts: [],
};

const getters = {
  products: (state) => state.products,
  category: (state) => state.category,
  selectedProduct: (state) => state.selectedProduct,
  keyword: (state) => state.keyword,
  filteredProduct: (state) => state.filteredProduct,
  compareProducts: (state) => state.compareProducts,
};

function sortProductByDate(list) {
  return list.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}

const actions = {
  async getProducts({ commit }) {
    await ProductAPI.get()
      .then((res) => {
        let products = res.data.filter((item) => item.quantity_remaining > 0);
        products = sortProductByDate(products);
        commit("SET_PRODUCTS", products);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  async getCategory({ commit }) {
    await CategoryAPI.get()
    .then((res) => {
      commit("SET_CATEGORY", res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  },

  getSelectedProduct({ commit, state }, product_id) {
    const product = state.products.filter((p) => p._id == product_id)[0];
    commit("SET_SELECTED_PRODUCT", product);
  },

  setKeyword({ commit, dispatch }, keyword) {
    commit("SET_KEYWORD", keyword);
    dispatch("getFilteredProduct");
  },

  getCompareProducts({ commit, state }, product_id) {
    const product = state.products.find((item) => item._id == product_id);
    commit("SET_COMPARE_PRODUCTS", product);
  },

  deleteCompareProduct({ commit }, product_id) {
    commit("DELETE_COMPARE_PRODUCT", product_id);
  },

  getFilteredProduct({ commit, state }) {
    let filteredList = state.products;
    filteredList = filteredList.filter((p) => {
      return p.name.toLowerCase().includes(state.keyword.toLowerCase());
    });
    commit("SET_FILTERED_PRODUCT", filteredList);
  },
};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products;
  },
  SET_CATEGORY(state, category) {
    state.category = category;
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
