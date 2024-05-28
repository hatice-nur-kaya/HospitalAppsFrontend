import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home.vue';
import DoctorsList from '../views/Doctors.vue';
import PatientsList from '../views/Patients.vue';
import AppointmentsList from '../views/Appointments.vue';
import ExaminationsList from '../views/Examinations.vue';
import DoctorDashboard from '../views/DoctorDashboard.vue';
import PatientDashboard from '../views/PatientDashboard.vue';
import Login from '../views/Login.vue';
import DepartmentsList from '../views/Departments.vue';
import MedicinesList from '../views/Medicines.vue';
import PatientMedicinesList from '../views/PatientMedicines.vue';
import ExaminationMedicinesList from '../views/ExaminationMedicines.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/doctors',
        name: 'Doctors',
        component: DoctorsList
    },
    {
        path: '/patients',
        name: 'Patients',
        component: PatientsList
    },
    {
        path: '/appointments',
        name: 'Appointments',
        component: AppointmentsList
    },
    {
        path: '/examinations',
        name: 'Examinations',
        component: ExaminationsList
    },
    {
        path: '/doctor-dashboard',
        name: 'DoctorDashboard',
        component: DoctorDashboard
    },
    {
        path: '/patient-dashboard',
        name: 'PatientDashboard',
        component: PatientDashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/departments',
        name: 'Departments',
        component: DepartmentsList
    },
    {
        path: '/medicines',
        name: 'Medicines',
        component: MedicinesList
    },
    {
        path: '/patient-medicines',
        name: 'PatientMedicines',
        component: PatientMedicinesList
    },
    {
        path: '/examination-medicines',
        name: 'ExaminationMedicines',
        component: ExaminationMedicinesList
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
