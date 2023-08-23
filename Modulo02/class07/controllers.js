const calcService = require('./services')

let historico = [];
const numerosInseridos = [];

function somar(req, res) {
  let n1 = req.body.n1;
  let n2 = req.body.n2;
  let op = req.body.op

 let r = calcService(n1,n2,op)

 res.json(r)

}