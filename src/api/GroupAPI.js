import api from './api';
const endpoint = '/group';
export default {
  get() {
    return api.get(`${endpoint}`);
  },
  getGroupById(id) {
    return api.get(`${endpoint}/${id}`);
  },
}