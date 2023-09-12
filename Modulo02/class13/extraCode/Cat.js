class Cat {
    Contructor() {
        this.name = ""
    }

    miar(){
        console.log('Miaaow ' + this.name);
    }
}

let cat1 = new Cat()
cat1.name = "João"
cat1.miar();


let cat2 = new Cat()
cat2.name = "Maria"
cat2.miar();


let cat3 = new Cat()
Cat.name = "larica"
cat3.miar();
