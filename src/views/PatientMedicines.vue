<template>
  <div>
    <h1>Patient Medicines</h1>
    <form @submit.prevent="addPatientMedicine">
      <div>
        <label for="patientId">Patient ID:</label>
        <input type="number" id="patientId" v-model="newPatientMedicine.patientId">
      </div>
      <div>
        <label for="medicineId">Medicine ID:</label>
        <input type="number" id="medicineId" v-model="newPatientMedicine.medicineId">
      </div>
      <button type="submit">Add Patient Medicine</button>
    </form>
    <table>
      <thead>
      <tr>
        <th>Patient ID</th>
        <th>Medicine ID</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="patientMedicine in patientMedicines" :key="`${patientMedicine.patientId}-${patientMedicine.medicineId}`">
        <td>{{ patientMedicine.patientId }}</td>
        <td>{{ patientMedicine.medicineId }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PatientMedicinesList',
  data() {
    return {
      patientMedicines: [
        { patientId: 1, medicineId: 1 },
        { patientId: 2, medicineId: 2 }
      ],
      newPatientMedicine: {
        patientId: '',
        medicineId: ''
      }
    };
  },
  methods: {
    addPatientMedicine() {
      this.patientMedicines.push({ ...this.newPatientMedicine });
      this.newPatientMedicine.patientId = '';
      this.newPatientMedicine.medicineId = '';
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
