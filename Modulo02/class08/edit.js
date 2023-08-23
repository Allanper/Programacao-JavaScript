let users = [  {id:10, username:"jao", password:"123"} , {id:11, username:"zé", password:"abc"}, {id:12 , username:"maria", password:"xyz"}  ]


// function auth( user){
//     //user.username
//     //user.password
//     return true
// }
//auth ( {username:"vir", password:"123"} )

//let user= {username:"vir", password:"123"} 
//auth (user)

function auth( username, password){
    
   return users.some( (u) => u.username=== username && u.password==password  )
   
}

//console.log( auth ( "jao","123") )


//ref find
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

//ref some
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some


let user = {id:12, username:"Mario da Silva"}
function edit (user){
    //localizar

    let index = users.findIndex( u=> u.id==user.id) 
    //alteracao somente campos que possuem dados

    let obj = users[index]
   
    if (user.username) obj.username = user.username
    if (user.password) obj.password= user.password

    return obj
    

}

console.log(edit (user))