<template>
  <div>
    <h1>Patients</h1>
    <form @submit.prevent="addPatient">
      <div>
        <label for="patientName">Name:</label>
        <input type="text" id="patientName" v-model="newPatient.name">
      </div>
      <div>
        <label for="birthDate">Birth Date:</label>
        <input type="date" id="birthDate" v-model="newPatient.birthDate">
      </div>
      <button type="submit">Add Patient</button>
    </form>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Birth Date</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="patient in patients" :key="patient.id">
        <td>{{ patient.id }}</td>
        <td>{{ patient.name }}</td>
        <td>{{ patient.birthDate }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PatientsList',
  data() {
    return {
      patients: [
        { id: 1, name: 'Alice Johnson', birthDate: '1990-04-12' },
        { id: 2, name: 'Bob Brown', birthDate: '1985-07-19' }
      ],
      newPatient: {
        name: '',
        birthDate: ''
      }
    };
  },
  methods: {
    addPatient() {
      const newId = this.patients.length + 1;
      this.patients.push({ id: newId, ...this.newPatient });
      this.newPatient.name = '';
      this.newPatient.birthDate = '';
    }
  }
};
</script>

