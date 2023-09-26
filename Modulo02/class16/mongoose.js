const mongoose = require("mongoose");

let strConexao =
  "mongodb+srv://thiagosilvats804:iIBlKR1N3iMM8FBf@cluster0.edcnhtx.mongodb.net/?retryWrites=true&w=majority";

const Cao = criarModelCao();

const Pessoa = criarModelPessoa();

const SuperHero = criarModelSuperHero();

const Power = criarModelPowers();




async function toy() {
    await mongoose.connect(strConexao);

   // let newPower2 = { nome: "Ciberpatia", descricao: "interagir com computadores diretamente através da mente e/ou controlar computadores mentalmente", forca: 10 }

    // let newPower3 = { nome: "Apêndices", descricao: "O personagem tem braços extras", forca: 2 }

    //let newPower4 = { nome: "Camuflagem", descricao: "mudar a cor e a aparência da pele", forca: 3 }

    //let newPower5 = { nome: "Consciência Dimensional Cruzada", descricao: " detectar ações e eventos em outras dimensões do Multiverso", forca: 4 }

    //let newPower6 = { nome: "Manipulação de Doenças", descricao: "A capacidade de controlar doenças", forca: 5 }

    //let newPower7 = { nome: "Manipulação de holográficos", descricao: "O poder de manipular hologramas", forca: 6 }

    //let newPower8 = { nome: "Controle da Mente ", descricao: "A capacidade de forçar uma pessoa a ser boa através do controle da mente", forca: 7 }

    //let newPower9 = { nome: "Regeneração", descricao: " capacidade de sobreviver a lesões graves que não seriam capazes de lidar", forca: 8 }

    //let newPower10 = { nome: "Viagem no Tempo", descricao: "pode viajar para frente e para trás através do tempo", forca: 9 }

    //await alterarPower("65120897f36ebd9a6087997d", {descricao: "capacidade de sobreviver a lesões graves que não seriam capazes de lidar"})



    //listPower();




    // -----------------------------------------------------------------------

    let caoDoVirmerson = { raca: "Labrador", cor: "chocolate", peso: 40 }
    let donoDoCao = {nome:"Virmerson", idade:42}

    // await gravar(caoDoVirmerson, donoDoCao);
    //await gravarPower(newPower10);
    


    // deletar("uiudsud0ds9d0sds0dsds")
    // await alterar ("6508abde57b0cb56cb1ddbbd", {cor:"blue"})
    // listar todo por raça
     //await listarTodosCaes();
    // await deletar("6508b16cf24d77461ad2049e");
     //let caoEncontrado = await buscarPorId("650b54fb0002101982a69b5d")
     //console.log(caoEncontrado)
    

}

toy()


//findByIdAndUpdate
async function alterarPower(id, obj){

    try{
     await Power.findByIdAndUpdate(id, obj)
     console.log( "Atualizado com sucesso")

    }catch(error){
        console.log(error)
    }

    
}

async function gravarSuperHero(objSuperHero) {

    const newHero = new SuperHero(objSuperHero)
    const power = mongoose.SchemaType.populate.objPower.Power



}

async function gravar(objCao, objPessoa) {
   
    const novaPessoa = new Pessoa(objPessoa)
    await novaPessoa.save()

    const novoCao = new Cao(objCao);
    novoCao.dono = novaPessoa._id
    await novoCao.save();

    console.log("Cão salvo no MongoDB!");
}


async function listPower() {
    const allPower = await  Power.find()
    console.log(allPower)
}

async function gravarPower(objPower) {
    const power = new Power(objPower)
    await power.save()
}


function criarModelPowers(){
    return mongoose.model("Power", {
        nome: String,
        descricao: String,
        forca: Number
    })
}


function criarModelSuperHero() {
    return mongoose.model("Hero", {
        nome: String,
        sexo: String,
        idade: Number,
        imortal: Boolean,
        poderes: {type: mongoose.Schema.Types.ObjectId, ref: "Power" }
    })
}

// ----------------------------------------------------------------------------

function criarModelCao() {
    return mongoose.model("Cao", {
        raca: String,
        cor: String,
        peso: Number,
        dono:{type: mongoose.Schema.Types.ObjectId, ref:'Pessoa'}
    });
}

function criarModelPessoa() {
    return mongoose.model("Pessoa", {
        nome: String,
        idade:Number
    });
}

async function listarTodosCaes() {
    const todosOsCaes = await Cao.find();

    console.log("Todos os cães encontrados no banco de dados:");
    console.log(todosOsCaes);
}

async function gravar(objCao, objPessoa) {
   
    const novaPessoa = new Pessoa(objPessoa)
    await novaPessoa.save()

    const novoCao = new Cao(objCao);
    novoCao.dono = novaPessoa._id
    await novoCao.save();

    console.log("Cão salvo no MongoDB!");
}

async function listarTodosPorRaca(raca){
  lista = await Cao.find({ raca: raca})
  console.log(lista)
}

//findByIdAndDelete

async function deletar(id){

    try {
        await Cao.findByIdAndDelete(id) 
        console.log('Deletado com Sucesso!')
    } catch(error) {
        console.log(error)
    }
}


//findByIdAndUpdate
async function alterar(id, obj){

    try{
     await Cao.findByIdAndUpdate(id, obj)
     console.log( "Atualizado com sucesso")

    }catch(error){
        console.log(error)
    }

    
}


   async function buscarPorId(id){
     try {
       return await Cao.findById(id).populate("dono")
      
     }catch (error){
        console.log(error)
     }
}
    