<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/departments">Departments</router-link>
      <router-link to="/medicines">Medicines</router-link>
      <router-link to="/patient-medicines">Patient Medicines</router-link>
      <router-link to="/examination-medicines">Examination Medicines</router-link>
      <template v-if="userType === 'doctor'">
        <router-link to="/doctor-dashboard">Dashboard</router-link>
        <router-link to="/appointments">Appointments</router-link>
        <router-link to="/examinations">Examinations</router-link>
      </template>
      <template v-else-if="userType === 'patient'">
        <router-link to="/patient-dashboard">Dashboard</router-link>
        <router-link to="/appointments">Appointments</router-link>
      </template>
    </nav>
    <router-view @user-logged-in="setUserType"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userType: null // This will be set upon login
    };
  },
  methods: {
    setUserType(role) {
      this.userType = role;
    }
  }
};
</script>

<style>
nav {
  padding: 10px;
  background-color: #333;
  color: white;
}

nav a {
  margin-right: 10px;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
