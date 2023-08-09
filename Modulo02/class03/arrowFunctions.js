function somar (n1, n2, cb){
    let r = n1 +n2;
    cb(r)
}

somar(10, 20 , function(r) { console.log("a soma é: "+ r )}) // forma extença;

somar(10, 20, (r) => { console.log("Arrow Function: A soma é "+ r)})