<template>
    <div class="jobDetails" v-if="job" style="border: 2px solid blue;padding: 1vw;text-align:center;margin:5vw;">
        <h1 style="color:red;">{{job.titre}}</h1>
        <p><Span style="color:red;font-weight:bold">Description:</span> {{job.description}}</p>
        <p> <span style="color:red;font-weight:bold">Salaire</span>: {{ job.salaire }}</p>
        <p><span style="color:red;font-weight:bold">Date de création:</span> {{ job.creation }}</p>
        <button @click="editJob(job.id)" style="background-color:green">Edit Job</button>
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
      const response = await fetch(`http://localhost:3002/jobs/${jobId}`); // Fetch only the needed job
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