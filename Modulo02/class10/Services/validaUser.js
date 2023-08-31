function validaUser(user, users){
    let errors = [];


    //validação se o usuario ja existes
    if(users.some( u => u.username == user.username)){
        errors.push("Usuario ja cadastrado")
    }

    //// verificar a quantidade de caracteres inseridos dentro do campo password, sem distição de tipo; exeplo: number, string
    
    if(user.password.length < 4) {
        errors.push("A senha deve ter 4 ou mais Caracteres ")

    }

    return errors
        
}

module.exports = validaUser;