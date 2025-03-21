<template>
    <div>
        <fieldset>
            <legend>Ajouter un emploi</legend>
            <label>Job title</label>
            <input v-model="title" type="text" required>
            <br>
            <label>Job Description</label>
            <textarea v-model="description" required></textarea>
            <br>
            <label>Salaire</label>
            <input v-model="salaire" type="number" required>
            <br>
            <label>Date de création</label>
            <input v-model="creation" type="date" required>
            <br>
            <button @click="addJob">Ajouter</button>
        </fieldset>
    </div>
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
    methods:{
        async addJob(){
            const newJob = {
                title: this.title,
                description: this.description,
                salaire: Number(this.salaire),
                creation: this.creation
            }
            try{
                const response = await fetch("http://localhost:3000/jobs", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newJob)
                })
                if(response.ok){
                    this.$router.push('/')
                }
            }catch(error){
                console.error('Erreur lors de l\'ajout de l\'emploi:', error);
                alert("Impossible d'ajouter l'emploi. Vérifiez la connexion au serveur.");
            }
        }
    }
}
</script>