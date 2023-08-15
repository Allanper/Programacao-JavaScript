const pessoa = {
    nome:'Thiago',
    idade: 39,
    nif:123456789,
    
    classificar: function(){
            if (this.idade < 65) {
                return "adulto"
            }   else {
            return "idoso"
            }
    },
    imprimirDados: function( f ){
        console.log( f ( this.nome ) +"\n"+  this.idade + "\n"+this.nif+"\n"+ f( this.classificar() )  )
    }
}

// -------------------------------------------------------------------------------------

const calc= {
    somar:function(n1,n2){
        return n1+n2
    } ,
    subtrair:function(n1,n2){
        return n1-n2
    }
}

 //crie um novo objeto "media", que tem um método calcularMedia que recebe 3 numeros,  calcula e retorna a media
const media={
    calcMedia:function(n1,n2,n3){
        let r=n1+n2+n3
        return r/3
    }

}




module.exports.pessoa = pessoa;
module.exports.calc = calc;
module.exports.media= media;
