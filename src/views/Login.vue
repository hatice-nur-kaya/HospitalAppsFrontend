<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:8081/api/v1/auth/authenticate', {
          username: this.username,
          password: this.password
        });
        // Token'i ve rol bilgisini localStorage'a kaydet
        if (response.data && response.data.token) {
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('userRole', response.data.role || 'user'); // Varsayılan rol 'user' olarak ayarlandı
          this.$router.push('/medicines'); // Login başarılıysa Medicines sayfasına yönlendir
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          this.error = 'Invalid username or password. Please try again.';
        } else {
          this.error = 'There was a problem with your login. Please try again later.';
        }
      }
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

form div {
  margin-bottom: 10pj0;
}

form label {
  display: block;
  margin-bottom: 5px;
}

form input, form button {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

p {
  color: red;
}
</style>
