let users = [  {username:"jao", password:"123"} , {username:"zé", password:"abc"}, {username:"maria", password:"xyz"}  ]


// function auth( user){
//     //user.username
//     //user.password
//     return true
// }
//auth ( {username:"vir", password:"123"} )

//let user= {username:"vir", password:"123"} 
//auth (user)

function auth( username, password){
    

   let existe=  users.some( (u) => u.username=== username && u.password==password  )
    return existe
}

console.log( auth ( "jao","123") )


//ref find
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

//ref some
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some