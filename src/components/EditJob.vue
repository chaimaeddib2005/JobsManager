<template>
    <fieldset style="width: 100%;align-items: center;display: flex;flex-direction: column;">
        <legend style="font-weight:bold;color:red;text-decoration:underline;">Modifier un emploi</legend>
        <label>Job title</label>
        <input v-model="titre" type="text">
        <br>
        <label>Job Description</label>
        <textarea v-model="description" style="width:90%;height:4vw"></textarea>
        <br>
        <label>Salaire</label>
        <input v-model="salaire" type="number">
        <br>
        <label>Date de création</label>
        <input v-model="creation" type="date">
        <br>
        <button @click="editJob" style="background-color:green;width:30%;height:3vw">Modifier</button>
    </fieldset>
</template>
<script>
export default{
    data(){
        return{
            titre: '',
            description: '',
            salaire: '',
            creation: ''
        }
    },
    async mounted(){
        const jobId = this.$route.params.id
        try{
            const response = await fetch(`http://localhost:3002/jobs/${jobId}`)
            const jobs = await response.json()
            const job = jobs.find(job => job.id == jobId)
            this.id = job.id
            this.titre = job.titre
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
                const response = await fetch(`http://localhost:3002/jobs/${jobId}`, {
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