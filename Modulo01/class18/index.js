let usuarios = []

function cadastrarUsuario(){

     
   let nome = document.getElementById('nome').value
   let idade= parseInt(document.getElementById('idade').value)

   let usuario = { nome:nome, idade:idade}

   usuarios.push(usuario);

   
}


function listarUsuarios(){

    for (i=0; i< usuarios.length; i++){
        console.log(usuarios[i]) 
    }

}
