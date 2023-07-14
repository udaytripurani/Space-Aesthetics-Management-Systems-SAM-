import axios from 'axios';

class AuthService {
  login(email, password) {
    return axios.get(`http://localhost:8082/check?un=${email}&pw=${password}`)
      .then(response => {
        if (response.data === 'PASS') {
          const userData = { email: email, name: 'User', accessToken: 'someAccessToken' }; // Replace 'User' and 'someAccessToken' with actual values if needed
          localStorage.setItem('user', JSON.stringify(userData));
          return { status: 'success' };
        } else {
          return { status: 'failure' };
        }
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
