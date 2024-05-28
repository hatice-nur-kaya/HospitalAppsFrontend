<template>
  <div>
    <h1>Appointments</h1>
    <form @submit.prevent="addAppointment">
      <div>
        <label for="appointmentDate">Date:</label>
        <input type="datetime-local" id="appointmentDate" v-model="newAppointment.date">
      </div>
      <div>
        <label for="doctorName">Doctor:</label>
        <input type="text" id="doctorName" v-model="newAppointment.doctor">
      </div>
      <div>
        <label for="patientName">Patient:</label>
        <input type="text" id="patientName" v-model="newAppointment.patient">
      </div>
      <div>
        <label for="status">Status:</label>
        <select id="status" v-model="newAppointment.status">
          <option>Planned</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>
      <button type="submit">Add Appointment</button>
    </form>
    <table>
      <thead>
      <tr>
        <th>ID</th>
        <th>Date</th>
        <th>Doctor</th>
        <th>Patient</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="appointment in appointments" :key="appointment.id">
        <td>{{ appointment.id }}</td>
        <td>{{ appointment.date }}</td>
        <td>{{ appointment.doctor }}</td>
        <td>{{ appointment.patient }}</td>
        <td>{{ appointment.status }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AppointmentsList',
  data() {
    return {
      appointments: [
        { id: 1, date: '2024-05-28T10:00', doctor: 'Dr. John Doe', patient: 'Alice Johnson', status: 'Completed' },
        { id: 2, date: '2024-05-29T11:00', doctor: 'Dr. Jane Smith', patient: 'Bob Brown', status: 'Planned' }
      ],
      newAppointment: {
        date: '',
        doctor: '',
        patient: '',
        status: 'Planned'
      }
    };
  },
  methods: {
    addAppointment() {
      const newId = this.appointments.length + 1;
      this.appointments.push({ id: newId, ...this.newAppointment });
      this.newAppointment.date = '';
      this.newAppointment.doctor = '';
      this.newAppointment.patient = '';
      this.newAppointment.status = 'Planned';
    }
  }
};
</script>

