<template>
  <div>
    <h1>Examinations</h1>
    <form @submit.prevent="addExamination">
      <div>
        <label for="examinationDate">Date:</label>
        <input type="datetime-local" id="examinationDate" v-model="newExamination.date">
      </div>
      <div>
        <label for="doctorName">Doctor:</label>
        <input type="text" id="doctorName" v-model="newExamination.doctor">
      </div>
      <div>
        <label for="patientName">Patient:</label>
        <input type="text" id="patientName" v-model="newExamination.patient">
      </div>
      <div>
        <label for="diagnosis">Diagnosis:</label>
        <input type="text" id="diagnosis" v-model="newExamination.diagnosis">
      </div>
      <button type="submit">Add Examination</button>
    </form>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Doctor</th>
        <th>Patient</th>
        <th>Diagnosis</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="examination in examinations" :key="examination.id">
        <td>{{ examination.id }}</td>
        <td>{{ examination.date }}</td>
        <td>{{ examination.doctor }}</td>
        <td>{{ examination.patient }}</td>
        <td>{{ examination.diagnosis }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ExaminationsList',
  data() {
    return {
      examinations: [
        { id: 1, date: '2024-05-28T10:00', doctor: 'Dr. John Doe', patient: 'Alice Johnson', diagnosis: 'Flu' },
        { id: 2, date: '2024-05-29T11:00', doctor: 'Dr. Jane Smith', patient: 'Bob Brown', diagnosis: 'Migraine' }
      ],
      newExamination: {
        date: '',
        doctor: '',
        patient: '',
        diagnosis: ''
      }
    };
  },
  methods: {
    addExamination() {
      const newId = this.examinations.length + 1;
      this.examinations.push({ id: newId, ...this.newExamination });
      this.newExamination.date = '';
      this.newExamination.doctor = '';
      this.newExamination.patient = '';
      this.newExamination.diagnosis = '';
    }
  }
};
</script>

