import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/homeView.vue';
import JobDetails from './components/jobDetails.vue';
import EditJob from './components/EditJob.vue';
import AddJob from './components/addJob.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/job-details/:id', component: JobDetails, props: true },
    { path: '/edit-job/:id', component: EditJob, props: true },
    { path: '/add-job', component: AddJob },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;