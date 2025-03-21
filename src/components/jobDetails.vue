<template>
    <div class="jobDetails" v-if="job">
        <h1>{{job.title}}</h1>
        <p>Description: {{job.description}}</p>
        <p>Salaire: {{ job.salaire }}</p>
        <p>Date de création: {{ job.creation }}</p>
        <button @click="editJob(job.id)">Edit Job</button>
    </div>
</template>
<script>
export default {
    data() {
    return {
        jobs: [],
      job: null,
    };
  },
  async mounted() {
    const jobId = this.$route.params.id;
    try {
      const response = await fetch(`http://localhost:3000/jobs/${jobId}`); // Fetch only the needed job
      this.job = await response.json();
    } catch (error) {
      console.error("Erreur de chargement des emplois:", error);
    }
  },
  methods: {
    async editJob(id) {
      this.$router.push(`/EditJob/${id}`);
      
    },
  },
};
</script>