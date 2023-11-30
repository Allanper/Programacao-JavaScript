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
        <div id="lista">

               <div v-for="u in users">
                    {{u.username}} --------
                    <button style="border:1px solid black"> excluir</button>
                  
               </div>
        </div>
        
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