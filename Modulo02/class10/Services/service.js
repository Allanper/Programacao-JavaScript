let users = []
let id = 1

const validaUser= require('./validaUser');

function cad(username, password){
           let newUser = {username,password}
           let validaErro= validaUser(newUser , users )

           if (validaErro.length>0){
            return validaErro
           }
           else{
            let newCad = {
                id,
                username,
                password
            }
            users.push(newCad);
            id++
            return {msg:"Cadastrado com Sucesso"}
           }
    

       
}


module.exports = {
    cad
}