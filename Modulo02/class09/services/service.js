users = []

function auth(username,password) {
    let exists = users.some((u) => u.username == username && u.password == password)
    return exists
}

function cad(id, username, password){
    let newCad = {
        id,
        username,
        password
    }
    users.push(newCad);
    
    return newCad 
}

function listar() {
    return(users)
}

function alterar(id,username, password){
    let index = users.findIndex(u=> u.id== id) 
  
    let obj = users[index];

    obj.username = username;
    obj.password = password;
  
        
    return obj;
    
}

function deletar(id){
    let index = users.findIndex(u=> u.id== id) 

    let obj = users[index];
    users.splice(obj, 1)

    return "Cliente Deletado com sucesso"

}


module.exports = {
    auth,
    cad,
    listar,
    alterar,
    deletar
  } 
