<template>
    <fieldset>
        <legend>Modifier un emploi</legend>
        <label>Job title</label>
        <input v-model="title" type="text">
        <br>
        <label>Job Description</label>
        <textarea v-model="description"></textarea>
        <br>
        <label>Salaire</label>
        <input v-model="salaire" type="number">
        <br>
        <label>Date de création</label>
        <input v-model="creation" type="date">
        <br>
        <button @click="editJob">Modifier</button>
    </fieldset>
</template>
<script>
export default{
    data(){
        return{
            title: '',
            description: '',
            salaire: '',
            creation: ''
        }
    },
    async mounted(){
        const jobId = this.$route.params.id
        try{
            const response = await fetch("http://localhost:3000/jobs")
            const jobs = await response.json()
            const job = jobs.find(job => job.id == jobId)
            this.title = job.title
            this.description = job.description
            this.salaire = job.salaire
            this.creation = job.creation
        }catch(error){
            console.error('Erreur de chargement de l\'emploi:', error)
        }
    },
    methods:{
        async editJob(){
            const jobId = this.$route.params.id
            const editedJob = {
                id: jobId,
                title: this.title,
                description: this.description,
                salaire: this.salaire,
                creation: this.creation
            }
            try{
                const response = await fetch('http://localhost:3000/jobs/:id', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(editedJob)
                })
                if(response.ok){
                    this.$router.push('/')
                }
            }catch(error){
                console.error('Erreur lors de la modification de l\'emploi:', error)
            }
        }
    }
}
</script>