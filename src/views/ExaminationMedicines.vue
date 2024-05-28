<template>
  <div>
    <h1>Examination Medicines</h1>
    <form @submit.prevent="addExaminationMedicine">
      <div>
        <label for="examinationId">Examination ID:</label>
        <input type="number" id="examinationId" v-model="newExaminationMedicine.examinationId">
      </div>
      <div>
        <label for="medicineId">Medicine ID:</label>
        <input type="number" id="medicineId" v-model="newExaminationMedicine.medicineId">
      </div>
      <button type="submit">Add Examination Medicine</button>
    </form>
    <table>
      <thead>
      <tr>
        <th>Examination ID</th>
        <th>Medicine ID</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="examinationMedicine in examinationMedicines" :key="`${examinationMedicine.examinationId}-${examinationMedicine.medicineId}`">
        <td>{{ examinationMedicine.examinationId }}</td>
        <td>{{ examinationMedicine.medicineId }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ExaminationMedicinesList',
  data() {
    return {
      examinationMedicines: [
        { examinationId: 1, medicineId: 1 },
        { examinationId: 2, medicineId: 2 }
      ],
      newExaminationMedicine: {
        examinationId: '',
        medicineId: ''
      }
    };
  },
  methods: {
    addExaminationMedicine() {
      this.examinationMedicines.push({ ...this.newExaminationMedicine });
      this.newExaminationMedicine.examinationId = '';
      this.newExaminationMedicine.medicineId = '';
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
