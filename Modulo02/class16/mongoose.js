const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

let strConexao =
  "mongodb+srv://thiagosilvats804:iIBlKR1N3iMM8FBf@cluster0.edcnhtx.mongodb.net/?retryWrites=true&w=majority";


//criando uma Tabela Cão Atravez de uma Function pronta
const Cao = criarModelCao();


//criando uma Tabela Pessoa Atravez de uma Function pronta
const Pessoa = criarModelPessoa();


//criando uma Tabela SuperHero Atravez de uma Function pronta
const SuperHero = criarModelSuperHero();


//criando uma Tabela Power Atravez de uma Function pronta
const Power = criarModelPowers();




async function toy() {
    await mongoose.connect(strConexao);

    //--------------------------------------------------------------------------
    // comando usado para gravar um novo usuario no banco
    //await gravarPower(newPower10);
    //let newPower8 = { nome: "Controle da Mente ", descricao: "A capacidade de forçar uma pessoa a ser boa através do controle da mente", forca: 7 }


    //-------------------------------------------------------------------------
    //Usado para Editar um campo do model

    //await alterarPower("65120897f36ebd9a6087997d", {descricao: "capacidade de sobreviver a lesões graves que não seriam capazes de lidar"})

     
    //-------------------------------------------------------------------------
     //usado para listar os usuarios desse model
    //listPower();
    
    //-------------------------------------------------------------------------
   
   let novoSuper = {
        nome: "Mafaldaaa",
        sexo: 'Feminino',
        idade: 24,
        imortal: false,
        poderes: new mongoose.Types.ObjectId('65120897f36ebd9a6087997d')
    }
    await gravarSuperHero(novoSuper)

    //------------------------------------------------------------------------
    
    // comando Populate que agrega masi informações
    //let heroComPopulate = await buscarHeroPorId('6513588536f888cc46ece342')
    //console.log(heroComPopulate)

   //----------------------------------------
    await listarTodosPorNome('Mafaldaaa')


    // -----------------------------------------------------------------------

    let caoDoVirmerson = { raca: "Labrador", cor: "chocolate", peso: 40 }
    let donoDoCao = {nome:"Virmerson", idade:42}

    // await gravar(caoDoVirmerson, donoDoCao);
    
    


    // deletar("uiudsud0ds9d0sds0dsds")

    // await alterar ("6508abde57b0cb56cb1ddbbd", {cor:"blue"})

    // listar todo por raça
     //await listarTodosCaes();

    // await deletar("6508b16cf24d77461ad2049e");

     //let caoEncontrado = await buscarPorId("650b54fb0002101982a69b5d")
     //console.log(caoEncontrado)
    

}

toy()


async function listarTodosPorNome(nome){
    lista = await SuperHero.find({ nome: nome })
    console.log(lista)
  }
  

//Populate 
async function buscarHeroPorId(id){
    try {
      return await SuperHero.findById(id).populate("poderes")
     
    }catch (error){
       console.log(error)
    }
}

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
    try {
        //const poderesTabela = await Power.findOne(obj);
        
        const newHero = new SuperHero(objSuperHero);
       // newHero.poderes = poderesTabela._id
        await newHero.save()
       
      }catch(erro){
           console.log(erro)
      }
     
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
    