import api from './api';
const endpoint = '/product';
export default {
  async get() {
    return api.get(`${endpoint}`);
  },
  getProductById(id) {
    return api.get(`${endpoint}/${id}`);
  },
}