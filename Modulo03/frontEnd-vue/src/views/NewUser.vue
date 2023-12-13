<template>

    <v-sheet width="300" class="mx-auto">
        <h1> Novo usuário  </h1>

        
  
        <v-alert
             v-model="exibeAlerta.show"
             dismissible
            closable="true"
            color="success"
            icon="$success"
            title="Sucesso"
            text="Cadastro com sucesso!"
            ></v-alert>

        <v-text-field label="Username" variant="outlined" v-model="user.username"></v-text-field>
        <v-text-field label="Password" type="Password" variant="outlined" v-model="user.password"></v-text-field>
        <v-btn   class="mt-2" @click="cadastrar" >Cadastrar</v-btn>
    
        <!-- 5 -->
        <v-card class="mx-auto" max-width="500">
         <v-list lines="two">
            <v-list-item v-for="u in users" :key="u._id" :title="u.username"    :subtitle="Subtitle">
             <template v-slot:prepend>
                <v-icon icon="mdi-account"></v-icon>
             </template>

             <template v-slot:append>
                <v-btn color="grey-lighten-1" icon="mdi-delete" variant="text"></v-btn>

                <v-btn color="grey-lighten-1" icon="mdi-pencil" variant="text"></v-btn>
             </template>

            </v-list-item>
         </v-list>
        </v-card>
        
    </v-sheet> 
</template>
<script>
//importacao de um modulo do vue que criar objeto reativos
import {ref, onBeforeMount } from "vue"
import axios from "axios"
export default{
    name:"NewUser",
    setup(){
         //objeto reativo
         const user = ref({})
         const users = ref([]) //reflexivo
         const exibeAlerta = ref({show:false})
        async function cadastrar(){
            try {  
                await axios.post('http://localhost:3001/user/cadastrar',
                {
                    username:user.value.username, 
                    password:user.value.password  
                }
            ) 
            exibeAlerta.value={show:true}
        } catch(error){
            exibeAlerta.value={show:false}
            alert(error)
        }

            
        }

        async function buscarUsuarios(){
            let response = await axios.get("http://localhost:3001/user/listar")
            users.value = await response.data
        }
        onBeforeMount(() => {
            buscarUsuarios()
        })

        return {user, users, cadastrar, exibeAlerta} 
       
       
        
    }
}

</script>