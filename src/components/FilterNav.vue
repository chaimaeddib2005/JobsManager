<template>
    <div class="filternav">
        <input type="text" v-model="search" placeholder="Search" @input="Filterjobs"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            jobs: []
        };
    },
    async mounted() {
        try {
            const response = await fetch('http://localhost:3000/jobs');
            this.jobs = await response.json();
            this.$emit('filter-jobs', this.jobs); // Send initial jobs
        } catch (error) {
            console.error('Erreur de chargement des emplois:', error);
        }
    },
    methods: {
        Filterjobs() {
            const filtered = this.search
                ? this.jobs.filter(job =>
                    job.title.toLowerCase().includes(this.search.toLowerCase())
                  )
                : this.jobs;
            this.$emit('filter-jobs', filtered); // Emit filtered jobs to parent
        }
    }
};
</script>
