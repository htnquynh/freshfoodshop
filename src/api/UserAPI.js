import api from "./api";
const endpoint = "/user";
export default {
  login(username, password) {
    return api.post(`${endpoint}/login`, { username, password });
  },
  login_with_google(user) {
    return api.post(`${endpoint}/login-with-google`, user);
  },
  signup(data) {
    return api.post(`${endpoint}/create`, data);
  },
  getUserByUsername(username) {
    return api.get(`${endpoint}/username/${username}`);
  },
  getUserByEmail(email) {
    return api.get(`${endpoint}/email/${email}`);
  },
  update(user_id, data) {
    return api.patch(`${endpoint}/${user_id}`, data);
  },
  changePassword(user_id, old_password, new_password) {
    return api.patch(`${endpoint}/${user_id}/change-password`, {
      password: old_password,
      new_password: new_password,
    });
  },

  verifyUser(verifyCode) {
    return api.post(`${endpoint}/verify-user`, { verifyCode });
  },
  forgotPassword(email) {
    return api.post(`${endpoint}/forgot-password`, { email });
  },
  verifyResetPassword(verifyCode) {
    return api.post(`${endpoint}/verify-reset-password`, { verifyCode });
  },
  resetPassword(email, new_password) {
    return api.post(`${endpoint}/${email}/reset-password`, { new_password });
  },
};
