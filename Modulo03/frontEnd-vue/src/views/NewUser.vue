<template>

    <v-sheet width="300" class="mx-auto">
        <h1> Novo usuário  </h1>

        


        <v-text-field label="Username" variant="outlined" v-model="user.username"></v-text-field>
        <v-text-field label="Password" type="Password" variant="outlined" v-model="user.password"></v-text-field>
        <v-btn   class="mt-2" @click="cadastrar" > Cadastrar </v-btn>
       
    </v-sheet>
   
</template>

<script>
//importacao de um modulo do vue que criar objeto reativos
import {ref} from "vue"
import axios from "axios"

export default{
    name:"NewUser",
    setup(){
         //objeto reativo
         const user = ref({username:"X", password:"y"})

        async function cadastrar(){``

               //thunder
            await axios.post('http://localhost:3001/user/cadastrar',
                {
                    username:user.value.username, 
                    password:user.value.password  
                }
            )    
        }

        return {user, cadastrar} 
       
       
        
    }
}

</script>