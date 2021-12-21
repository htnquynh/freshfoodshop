import api from './api';
const endpoint = '/order';
export default {
  getUserOrder(config) {
    return api.get(`${endpoint}/user`, config);
  },
  create(order, config) {
    return api.post(`${endpoint}/create`, order, config)
  },
  updateStatus(id, status, config) {
    return api.patch(`${endpoint}/${id}/updateStatus`, { status }, config);
  },
}