<template>
  <div>
    <h1>Medicines</h1>
    <form @submit.prevent="addMedicine">
      <div>
        <label for="medicineName">Medicine Name:</label>
        <input type="text" id="medicineName" v-model="newMedicine.medicineName" required>
      </div>
      <div>
        <label for="dosage">Dosage:</label>
        <input type="text" id="dosage" v-model="newMedicine.dosage" required>
      </div>
      <div>
        <label for="instructions">Instructions:</label>
        <input type="text" id="instructions" v-model="newMedicine.instructions" required>
      </div>
      <button type="submit">Add Medicine</button>
    </form>
    <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
    <p v-if="error" style="color: red;">{{ error }}</p>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Dosage</th>
        <th>Instructions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="medicine in medicines" :key="medicine.id">
        <td>{{ medicine.id }}</td>
        <td>{{ medicine.medicineName }}</td>
        <td>{{ medicine.dosage }}</td>
        <td>{{ medicine.instructions }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MedicinesList',
  data() {
    return {
      medicines: [],
      newMedicine: {
        medicineName: '',
        dosage: '',
        instructions: ''
      },
      successMessage: '',
      error: ''
    };
  },
  created() {
    this.fetchMedicines();
  },
  methods: {
    getAuthHeaders() {
      const token = localStorage.getItem('authToken');
      return { Authorization: `Bearer ${token}` };
    },
    fetchMedicines() {
      axios.get('http://localhost:8081/api/v1/medicines/getAllMedicines', { headers: this.getAuthHeaders() })
          .then(response => {
            if (response && response.data) {
              this.medicines = response.data;
            } else {
              this.error = 'Received an undefined response from the server';
            }
          })
          .catch(error => {
            this.error = 'Error fetching medicines: ' + (error.response?.data.message || error.message);
          });
    },
    addMedicine() {
      axios.post('http://localhost:8081/api/v1/medicines/createMedicine', this.newMedicine, { headers: this.getAuthHeaders() })
          .then(response => {
            this.medicines.push(response.data);
            this.newMedicine.medicineName = '';
            this.newMedicine.dosage = '';
            this.newMedicine.instructions = '';
            this.successMessage = 'Medicine added successfully!';
            this.error = '';
          })
          .catch(error => {
            this.error = 'Error adding medicine: ' + (error.response?.data.message || error.message);
            this.successMessage = '';
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
</style>
