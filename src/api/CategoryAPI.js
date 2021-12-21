import api from './api';
const endpoint = '/category';
export default {
  get() {
    return api.get(`${endpoint}`);
  },
}