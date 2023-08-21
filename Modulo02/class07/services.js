historico=[]
function calcService(n1,n2, op){
  if (op == "soma") {
    r = n1 + n2;
    historico.push(r);
    return r;
  }

  if (op == "sub") {
    r = n1 - n2;
    historico.push(r);
    return r;
  }

  if (op == "div") {
    r = n1 / n2;
    historico.push(r);
    return r;
  }

  if (op == "mult") {
    r = n1 * n2;
    historico.push(r);
    return r
  } else {
    return "Erro"
  }
}

module.exports = calcService