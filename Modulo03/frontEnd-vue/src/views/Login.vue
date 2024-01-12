<template>
    <v-sheet width="300" class="mx-auto">
        <h1> Logar </h1>

        <v-text-field label="Nome Do Usuario" variant="outlined" v-model="user.username"></v-text-field>

        <v-text-field label="Password" type="Password" variant="outlined" v-model="user.password"></v-text-field>
        <v-btn   class="mt-2" @click="logar"> Logar </v-btn>

    </v-sheet>   
    
</template>

<script>
import axios from "axios"
import { ref } from "vue"
export default {
    name: "Login",
    setup() {
        const user = ref({})

        async function logar() {
         try {
              const response = await axios.post('http://localhost:3001/user/autenticar', {

                username:user.value.username,
                password: user.value.password
              
            })
            const data = await response.data
            localStorage.setItem("token", data.token)

         } catch(err){
            console.log(err)
         }
        }
        return { logar, user }
    }
}

</script>