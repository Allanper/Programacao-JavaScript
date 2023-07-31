let produtos = [

    {
     nomeProduto:'Banana', 
     precoProduto:'4',
     imagemProduto:'https://media.gettyimages.com/id/157375066/pt/foto/banana-tra%C3%A7ado-de-recorte.jpg?s=612x612&w=gi&k=20&c=N5nolmZZnL88q312ST-uaD6AHPqcDcvBUW1kJfXYP8g='
    },
    {
     nomeProduto:'Alface',
     precoProduto:'2',
     imagemProduto:'https://thumbs.web.sapo.io/?W=800&H=0&delay_optim=1&epic=NGNl88jzGknot26JMojOuazXgJK7LxXKMWes/sScQk5fBN0SWv2+xq8Og5AdjwcYXZJl2CwN0AY5Ofv1E2o6thyTdQ=='
    },
    {
     nomeProduto:'Pera',
     precoProduto:'5',
     imagemProduto:'https://clubedeprodutores.continente.pt/fotos/produtos/cfp_381637407604b7466c3d64.png'},

] 


function cadastrar(){

    //ler dados da tela
    let nomeProduto = document.getElementById("nome").value;
    let precoProduto = document.getElementById("preco").value;
    let imagemProduto = document.getElementById("image").value;

    //criar um objeto produto 
    let novoItem = {nomeProduto, precoProduto, imagemProduto}
    

    //inserir no array

    produtos.push(novoItem)
}


function listar (){

    let html = ''
    
    for (i=0; i < produtos.length; i++){    

       html = html +  `<div>

            <img width="100" src="${produtos[i].imagemProduto}">
            ${produtos[i].nomeProduto}
            € ${produtos[i].precoProduto}
        
        </div>`
    }
    document.getElementById("resultado").innerHTML= html
}



function exibirMaisCaro(){
    let maisCaro=produtos[0].precoProduto;
    let p;
    
    for (i=1; i < produtos.length;i ++ ){

        if (produtos[i].precoProduto > maisCaro){
            maisCaro= produtos[i].precoProduto ;

            //dados que preciso
            p = produtos[i] 
        }

    }

    //console.log(p)

    let html = `<div>

        <img width="100" src="${p.imagemProduto}">
        ${p.nomeProduto}
        € ${p.precoProduto}

    </div>`

    document.getElementById("resultado").innerHTML= html

}

function exibirMaisBarato(){
    let maisBarato = produtos[0].precoProduto;
    let p;
    
    for (i=1; i < produtos.length; i++) {

        if (produtos[i].precoProduto < maisBarato){
            maisBarato= produtos[i].precoProduto

            //dados que preciso
            p = produtos[i] 
        }

    }

    //console.log(p)

    let html = `<div>

        <img width="100" src="${p.imagemProduto}">
        ${p.nomeProduto}
        € ${p.precoProduto}

    </div>`

    document.getElementById("resultado").innerHTML= html

}
