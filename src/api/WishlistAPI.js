import api from './api';
const endpoint = '/wishlist';
export default {
  get(config) {
    return api.get(`${endpoint}`, config);
  },

  add(items, config) {
    return api.post(`${endpoint}/add`, { items }, config);
  },
}