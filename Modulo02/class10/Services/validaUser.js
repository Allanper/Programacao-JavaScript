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
    
    //verificando se há espaços vazios entre Strings no capo nome do cadastro de usuario.
    if(user.username.indexOf(' ') >= 0 ){
        errors.push("Nome nao Pode haver espacos")
    }

    return errors
        
}

module.exports = validaUser;