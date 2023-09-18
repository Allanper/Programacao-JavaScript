const mongoose = require("mongoose");

let strConexao =
  "mongodb+srv://dojo:dojo@cluster0.p9pacqw.mongodb.net/?retryWrites=true&w=majority";

async function toy() {
    await mongoose.connect(strConexao);

    const Cao = criarModel();

 //  await gravar(Cao);

   // await listarTodosCaes(Cao);
    
    //listar todo por raça
   await listarTodos(Cao)

}

toy()

function criarModel() {
    return mongoose.model("Cao", {
        raca: String,
        cor: String,
        peso: Number,
    });
}

async function listarTodosCaes(Cao) {
    const todosOsCaes = await Cao.find();

    console.log("Todos os cães encontrados no banco de dados:");
    console.log(todosOsCaes);
}

async function gravar(Cao) {
    const novoCao = new Cao({ raca: "A", cor: "pink", peso: 10 });
    const novoCao1 = new Cao({ raca: "B", cor: "blue", peso: 15 });
    const novoCao2 = new Cao({
        raca: "C",
        cor: "red",
        peso: 10,
    });
    const novoCao3 = new Cao({ raca: "D", cor: "purple", peso: 30 });

    //2) salvar no banco
    await novoCao.save();
    await novoCao1.save();
    await novoCao2.save();
    await novoCao3.save();

    console.log("Cão salvo no MongoDB!");
}
async function listarTodos(Cao){
  lista = await Cao.find({ raca: 'Rafeiro'})
  console.log(lista)
}