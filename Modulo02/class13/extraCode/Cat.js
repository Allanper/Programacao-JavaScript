//Orientacao a Objetos - OO
//class -  objeto

class Cat {

    constructor(obj){
        this.name=obj.name
        this.raca=obj.raca
        this.local=obj.local
    }

    miar(){
        console.log("miaoowww " + this.name + " "+ this.raca + " "+ this.local)
    }
    save(){
        //banco
        //colletion
        //insert
    }
    find(p){
        //ler o parametro 
        // montar um fitro
        //inserir num array
        //retornar o resultado

    }
    update(){}
}

let cat1 = new Cat({name: "Pedro Alvares Cabral",raca: "frajola", local:"Porto"})
cat1.miar()
cat1.save()

Cat.find({name:'Pedro ...'})

let cat2 =  new Cat({name:"Colombo", raca:"siamês", local:"Lisboa"})
cat2.miar()
cat2.save()

let cat3 =  new Cat({name:"Dom Pedro I",raca:"rafeiro", local:"Setúbal"})
cat3.miar()