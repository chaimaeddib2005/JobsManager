<template>
    <div>
    <div style="text-align: center; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; background-color: pink;margin: 2vw;padding: 1vw;">
        
        <div>
            <FilterNav @filter-jobs="updateFilteredJobs" />
        </div>
        <div>
            <router-link to="/addJob">Ajouter un emploi</router-link>
        </div>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px;">
        <div v-for="job in filteredJobs" :key="job.id" style="border: 2px solid blue;padding: 1vw;" >
            <h1>{{ job.titre }}</h1>
            <p>{{ job.description }}</p>
            <p>{{ job.salaire }}</p>
            <p>{{ job.creation }}</p>
            <router-link :to="`/jobDetails/${job.id}`" style="float:right">Details</router-link>

        </div>
    </div>
    </div>
</template>

<script>

import FilterNav from './FilterNav.vue';


export default {
    components: {
        FilterNav
    },
    data() {
        return {
            jobs: [],
            filteredJobs: []
        };
    },
    async mounted() {
        try {
            const response = await fetch("http://localhost:3002/jobs");
            this.jobs = await response.json();
            this.filteredJobs = this.jobs; // Initialize filtered jobs
        } catch (error) {
            console.error('Erreur de chargement des emplois:', error);
        }
    },
    methods: {
        updateFilteredJobs(filtered) {
            this.filteredJobs = filtered;  // Update the displayed jobs
        }
    }
};
</script>
