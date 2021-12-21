import api from './api';
const endpoint = '/cart';
export default {
  getUserCart(config) {
    return api.get(`${endpoint}/user-cart`, config);
  },

  add(items, config) {
    return api.post(`${endpoint}/add`, { items }, config);
  },

  update(new_cart, config) {
    return api.post(`${endpoint}/update`, { new_cart }, config);
  },

  removeByProductId(product_id, config) {
    return api.post(`${endpoint}/remove-product`, { product_id }, config);
  },

  clear(config) {
    return api.get(`${endpoint}/clear`, config);
  }
}