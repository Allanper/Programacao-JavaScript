let promiseSumo = new Promise (function fazerSumoDeLaranja(resolve, reject) {
    let temLaranja = true;

    if(temLaranja){
        console.log("Iniciando a Confecção do Sumo")
        setTimeout(() => resolve("sumo de laranja concluido"), 5000 * 3);
    }else {
        reject("Não tem Laranja")
    }
});


let promisePeixe = new Promise(function fritar(resolve, reject) {
    let temPeixe = true;

    if(temPeixe) {
        console.log("Iniciando a Confecção do Peixe Frito.")
        setTimeout(() => resolve("Peixe Frito com Sucesso"), 1000 * 5);
    } else {
        reject("Nao tem peixe!")
    }
});



promisePeixe.then((r) => { console.log(r)

promiseSumo.then((r) => {console.log(r)})
            .catch(console.log(error))

}).catch((error) => console.log(error))
