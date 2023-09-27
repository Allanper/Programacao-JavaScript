let jwt = require('jsonwebtoken');

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJuYW1lIjoiSsOjbyIsImlhdCI6MTY5NTg0NTIzMX0.07GVy-_cR4ZPPC0cZF88nafnGldnhc8OWoEIHHAzkj4';
var decoded = jwt.verify(token,'banana-nanica');
console.log(decoded.name + "ID: " + decoded._id) 