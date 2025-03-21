<template>
    <div>
        <FilterNav @filter-jobs="updateFilteredJobs" />
        <div v-for="job in filteredJobs" :key="job.id">
            <h1>{{ job.title }}</h1>
            <p>{{ job.description }}</p>
            <p>{{ job.salaire }}</p>
            <p>{{ job.creation }}</p>
            <router-link :to="'/jobDetails/' + job.id">Details</router-link>
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
            const response = await fetch("http://localhost:3000/jobs");
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
