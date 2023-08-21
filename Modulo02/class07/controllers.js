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

function calculos(req, res) {
  res.json(historico);
}
function limpar(req, res) {
  historico = [];
  res.send("Historico limpo");
}

function calcMedia(req, res) {
  let somaValores = 0;

  for (let i = 0; i < historico.length; i++) {
    somaValores = somaValores + historico[i];
  }

  let media = somaValores / historico.length;

  res.json(media);
}

function calcPares(req, res) {
  let pares = historico.filter((numero) => numero % 2 == 0);
  res.json(pares);
}

function calcImpares(req, res) {
  let impares = historico.filter((numero) => numero % 2 != 0);
  res.json(impares);
}
function calcMaior(req, res) {
  if (historico.length == 0) {
    res.send("Não possui nenhum número no historico");
  } else {
    let maior = historico[0];

    for (let i = 1; i < historico.length; i++) {
      if (historico[i] > maior) {
        maior + historico[i];
      }
    }
    res.json({ maior: maior });
  }
}

module.exports = {
  somar,
  calculos,
  limpar,
  calcMedia,
  calcPares,
  calcImpares,
  calcMaior,
};
