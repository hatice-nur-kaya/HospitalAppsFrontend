<template>
  <div>
    <h1>Doctors</h1>
    <form @submit.prevent="addDoctor">
      <div>
        <label for="doctorName">Name:</label>
        <input type="text" id="doctorName" v-model="newDoctor.name">
      </div>
      <div>
        <label for="doctorSpecialty">Specialty:</label>
        <input type="text" id="doctorSpecialty" v-model="newDoctor.specialty">
      </div>
      <button type="submit">Add Doctor</button>
    </form>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Specialty</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="doctor in doctors" :key="doctor.id">
        <td>{{ doctor.id }}</td>
        <td>{{ doctor.name }}</td>
        <td>{{ doctor.specialty }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DoctorsList',
  data() {
    return {
      doctors: [
        { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology' },
        { id: 2, name: 'Dr. Jane Smith', specialty: 'Neurology' }
      ],
      newDoctor: {
        name: '',
        specialty: ''
      }
    };
  },
  methods: {
    addDoctor() {
      const newId = this.doctors.length + 1;
      this.doctors.push({ id: newId, ...this.newDoctor });
      this.newDoctor.name = '';
      this.newDoctor.specialty = '';
    }
  }
};
</script>
