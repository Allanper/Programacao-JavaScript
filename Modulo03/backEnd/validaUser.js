function validaUser(user, users){

    let errors= []
   //user.username
   //user.password

//validacao se usuário já existe
    if (users.some(u => u.username == user.username)){
         errors.push("usuario já existe");
    }
   
   //validacao

//chamar a quantidade de conteudo dentro do array, sem distinção de diferenca de caracteris
   if (user.password.length < 3){
        errors.push ("Senha deve ter mais que 3 letras")
   }

   return errors; //error.length ==0   

}

module.exports = validaUser;



