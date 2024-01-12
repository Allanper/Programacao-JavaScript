<template>

    <v-sheet width="300" class="mx-auto" v-if="token.autenticado">
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
        <v-btn   class="mt-2" @click="acaoSalvar" > Salvar </v-btn>
    
        <!-- 5 -->
        <v-card class="mx-auto" max-width="500">
         <v-list lines="two">
            <v-list-item v-for="(u, index) in users" :key="u._id" :title="u.username"    :subtitle="u.fullname">
             <template v-slot:prepend>
                <v-icon icon="mdi-account"></v-icon>
             </template>

             <template v-slot:append>
                <v-btn color="grey-lighten-1" icon="mdi-delete" variant="text" @click="deletar(u._id)"></v-btn>

                <v-btn color="grey-lighten-1" icon="mdi-pencil" variant="text" @click="editar(index)"></v-btn>

                <v-btn color="grey-lighten-1" icon="mdi-cancel" variant="text" @click="cancelar()" v-if="user._id"></v-btn>

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
         const token = ref({autenticado:true})
         
        async function cadastrar(){
            try {  
                await axios.post('http://localhost:3001/user/cadastrar',
                {
                    username:user.value.username, 
                    fullname:user.value.fullname,
                    age:user.value.age,
                    email:user.value.email, 
                    password:user.value.password  
                }
            ) 
            exibeAlerta.value={show:true};
            resetCampos();
            buscarUsuarios()
            
        } catch(error){
            if (error.response && error.response.status === 409) {
            errorMessage.value = 'Usuário já existe. Por favor, escolha outro nome de usuário.';
            } else {
            errorMessage.value = 'Cadastro incorreto, Tente novamente.';
            }
                exibeAlerta.value={show:false}
                alert(error)
            }
            
        }

        async function buscarUsuarios(){
            let response = await axios.get("http://localhost:3001/user/listar")
            users.value = await response.data
        }
        async function alterar(id){
            try{
                await axios.put("http://localhost:3001/user/alterar/"+id, {
                username: user.value.username,
                fullname: user.value.fullname,
                age: user.value.age, 
                email: user.value.email,
                password: user.value.password
                })
                exibeAlerta.value={show:true}

            }catch(error){
                exibeAlerta.value={show:false}
                alert(error)
            }

            buscarUsuarios()
        }

        async function deletar(id) {
            let response = await axios.delete("http://localhost:3001/user/deletar/"+id)
            let mensagem = await response.data
            alert(mensagem)
            buscarUsuarios()
        }

        async function acaoSalvar() {

                if(user.value._id){
                    alterar(user.value._id)

                }else {
                    cadastrar()
                    
                }
                //cancelar()
                resetCampos()
        }

        async function cancelar() {
            user.value={}
        }

        async function editar(index){
            user.value._id = users.value[index]._id
            user.value.username = users.value[index].username
            user.value.fullname = users.value[index].fullname
            user.value.age = users.value[index].age
            user.value.email = users.value[index].email
        }

        function resetCampos() {
            user.value = { username: '', fullName: '', age: '', email: '', password: '' };
        }

        onBeforeMount(() => {
            //ler o localStorage
            const tokenLocal = localStorage.getItem("token")
            
           
            if(tokenLocal){
                token.value={autenticado:true }
                buscarUsuarios()
            }else {
                 token.value={autenticado:false }
            }

        })

        return {user, users, cadastrar, exibeAlerta, deletar, editar, alterar, acaoSalvar, cancelar, token } 
       
       
        
    }
}

</script>