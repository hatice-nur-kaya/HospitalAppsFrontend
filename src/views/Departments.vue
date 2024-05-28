<template>
  <div>
    <h1>Departments</h1>
    <form @submit.prevent="addDepartment">
      <div>
        <label for="departmentName">Department Name:</label>
        <input type="text" id="departmentName" v-model="newDepartment.name">
      </div>
      <button type="submit">Add Department</button>
    </form>
    <p v-if="successMessage">{{ successMessage }}</p>
    <p v-if="error">{{ error }}</p>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="department in departments" :key="department.id">
        <td>{{ department.id }}</td>
        <td>{{ department.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DepartmentsList',
  data() {
    return {
      departments: [],
      newDepartment: {
        name: ''
      },
      successMessage: '',
      error: ''
    };
  },
  created() {
    this.fetchDepartments();
  },
  methods: {
    fetchDepartments() {
      axios.get('http://localhost:8081/api/v1/departments/getAllDepartments', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
          .then(response => {
            console.log(response.data);  // API yanıtını konsola logla
            if (response && response.data) {
              this.departments = response.data;
            } else {
              this.error = 'Received an undefined response from the server';
            }
          })
          .catch(error => {
            console.error('Fetching error:', error);
            this.error = 'Network error: ' + (error.message || 'Unknown error');
            this.successultMessage = '';
          });
    },

    addDepartment() {
      axios.post('http://localhost:8081/api/v1/departments/createDepartment', {
        name: this.newDepartment.name
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
          .then(response => {
            this.departments.push(response.data);
            this.newDepartment.name = '';  // Formu temizle
            this.successMessage = 'Department added successfully!';
            this.error = '';  // Eski hata mesajını temizle
          })
          .catch(error => {
            this.error = 'Error adding department: ' + (error.response.data.message || error.message);
            this.successMessage = '';  // Eski başarı mesajını temizle
          });
    }
  }
};
</script>

<style scoped>
form {
  margin-bottom: 20px;
}

form div {
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

p {
  color: green;
}

p {
  color: red;
}
</style>