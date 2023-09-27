let jwt = require('jsonwebtoken');

let payload = {
    id: 123, name: "Jão"
}

let token = jwt.sign(payload, 'banana-nanica')


console.log(token)