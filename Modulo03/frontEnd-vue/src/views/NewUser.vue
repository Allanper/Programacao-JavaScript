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

        <v-text-field label="Full Name" variant="outlined" v-model="user.fullname"></v-text-field>

        <v-text-field label="Age" variant="outlined" v-model="user.age"></v-text-field>

        <v-text-field label="Email" variant="outlined" v-model="user.email"></v-text-field>

        <v-text-field label="Password" type="Password" variant="outlined" v-model="user.password"></v-text-field>
        <v-btn   class="mt-2" @click="cadastrar" >Cadastrar</v-btn>
    
        <!-- 5 -->
        <v-card class="mx-auto" max-width="500">
         <v-list lines="two">
            <v-list-item v-for="u in users" :key="u._id" :title="u.username"    :subtitle="u.fullname">
             <template v-slot:prepend>
                <v-icon icon="mdi-account"></v-icon>
             </template>

             <template v-slot:append>
                <v-btn color="grey-lighten-1" icon="mdi-delete" variant="text" @click="deletar(u._id)"></v-btn>

                <v-btn color="grey-lighten-1" icon="mdi-pencil" variant="text"></v-btn>
             </template>

            </v-list-item>
         </v-list>

         <div class="text-center">
            <v-container>
            <v-row justify="center">
                <v-col cols="8">
                <v-container class="max-width">
                    <v-pagination
                    v-model="user._id"
                    class="my-1"
                    :length="15"
                    ></v-pagination>
                </v-container>
                </v-col>
            </v-row>
            </v-container>
        </div>
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
                    username:user.value.fullname,
                    username:user.value.age,
                    username:user.value.email, 
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

        async function deletar(id) {
            let response = await axios.delete("http://localhost:3001/user/deletar/"+id)
            let mensagem = await response.data
            alert(mensagem)
            buscarUsuarios()
        }

        onBeforeMount(() => {
            buscarUsuarios()
        })

        return {user, users, cadastrar, exibeAlerta, deletar} 
       
       
        
    }
}

</script>