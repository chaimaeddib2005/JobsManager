import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/homeView.vue';
import JobDetails from './components/jobDetails.vue';
import EditJob from './components/EditJob.vue';
import AddJob from './components/addJob.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/jobDetails/:id', component: JobDetails, props: true },
    { path: '/editJob/:id', component: EditJob, props: true },
    { path: '/addJob', component: AddJob },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;