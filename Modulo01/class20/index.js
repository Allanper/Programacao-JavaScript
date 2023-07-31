let arreyCarros = [    /// arrey de Objetos de carros
    {
        marca: "Honda",
        modelo: "CR-X",
        ano: 1987,
        imagem: "https://cdn.e-konomista.pt/uploads/2019/07/765_360_93463-crx_1531843349.jpg" 
        },
    {
        marca: "Honda",
        modelo: "R-TYPE",
        ano: 1985,
        imagem: "https://cdn.e-konomista.pt/uploads/2019/07/765_360_93526-integra-type-r_1531905209.jpg"
    },
    {
        marca: "Honda",
        modelo: "S-2000",
        ano: 1999,
        imagem: "https://media-manager.noticiasaominuto.com/1920/naom_625e560a93ee2.jpg"
    },
    {
        marca: "Honda",
        modelo: "Prelude",
        ano: 1978,
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNu7vtUXYc_hsVbTAgqY3Tt34E2Q9NAxPqqAh7dQT_NeEPR902Gi9LbCGvZfiMc5yNCM&usqp=CAU"
    },
    {
        marca: "Honda",
        modelo: "Civic-SI Mugen",
        ano: 2008,
        imagem: "https://i.ytimg.com/vi/nA5VXRTlYVg/maxresdefault.jpg"
    },
    {
        marca: "Honda",
        modelo: "CR-X Vermelho",
        ano: 1987,
        imagem: "https://www.planetcarsz.com/assets/uploads/images/VEICULOS/H/HONDA/1989_HONDA_CRX//HONDA_CRX_1989_01.jpg"
       },
       {
        marca: "Honda",
        modelo: "R-TYPE Amarelo",
        ano: 1985,
        imagem: "https://honda-automoveis.pt/blog/wp-content/uploads/2019/12/Integra-Type-R-Amarelo-Frontal-752x470.jpg"
       },
       {
        marca: "Honda",
        modelo: "S-2000 Vermelho",
        ano: 1999,
        imagem: "https://ireland.apollo.olxcdn.com/v1/files/o11brx7ltkxd-PT/image;s=1955x1359"
       },
       {
        marca: "Honda",
        modelo: "Prelude Branco",
        ano: 1978,
        imagem: "https://www.torque-gt.co.uk/media/catalog/product/i/m/img_1440as-min_2.jpg?width=1200&height=800&store=default&image-type=image"
       },
       {
        marca: "Honda",
        modelo: "Civic-SI Mugen Preto",
        ano: 2008,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_685403-MLB28679704136_112018-O.webp"
       },
];
let  velho = 0;
let novo = 0;

function cadastrar() {
//Ao clicar no botão cadastrar, chama uma funcao que uma crie um objeto contendo os dados de um carro e o insere no array ----- ok

    let marcaCarro =  document.getElementById("marca").value;  
    let modeloCarro = document.getElementById("modelo").value;
    let anoCarro = document.getElementById("ano").value;
    let imagemCarro = document.getElementById("imagem").value;

    let objetoCarro = {
        marca: marcaCarro,
        modelo: modeloCarro,
        ano: anoCarro,
        imagem: imagemCarro
    }
    arreyCarros.push(objetoCarro);

    alert("Veiculo Cadastrado com Sucesso!!")
}

function listar() {
    //Ao clicar no botão listar, todos os carros devem ser exibidos na tela.
    let html = '';

    for(i = 0; i < arreyCarros.length; i++){
        html = html + `
            <br />
            <img width="100" src="${arreyCarros[i].imagem}"><br />
            ${arreyCarros[i].marca} <br />
            ${arreyCarros[i].modelo}<br />
            ${arreyCarros[i].ano}<br />
            <br />
        `
    }
    document.getElementById("resultado").innerHTML = html;
}

function maisVelho() {
  velho = arreyCarros[0].ano;
  let p;

  for(i = 0; i < arreyCarros.length; i++) {
    if(arreyCarros[i].ano < velho) {
        velho = arreyCarros[i].ano;
        p = arreyCarros[i];
    }
  } 
    
  let html = `<div>
  <img  width="100" src="${p.imagem}"/> <br>
            ${p.ano}    <br>
            ${p.marca}  <br>
            ${p.modelo} <br>
     
  </div>`
    
    document.getElementById("resultado").innerHTML = html;
}

function maisNovo() {
    novo = arreyCarros[0].ano;
    let p;
    
    for( i = 1; i < arreyCarros.length; i++) {
        if(arreyCarros[i].ano > novo){
        novo = arreyCarros[i].ano;
        p = arreyCarros[i];
        }
    }
    let html = `<div>
                    <img width="100" src="${p.imagem}"/><br>
                    ${p.ano}<br>
                    ${p.marca}<br>
                    ${p.modelo}<br>
                </div>`

    document.getElementById("resultado").innerHTML = html;

}

function mediaIdade() {
    let soma = 0;
    for( i = 0; i < arreyCarros.length; i++){
       soma = parseInt(arreyCarros[i].ano) + soma;
    }
            media = soma / arreyCarros.length;
            let html = `<div> A media dos Anos Dos carros Cadastrados é: ${media}</div>`

        document.getElementById("resultado").innerHTML = html;
}
function filtroAno() {
    let anoDigitado = parseInt(document.getElementById("filtro").value);
    let html = "";
       const anos = arreyCarros.filter(a => a.ano === anoDigitado);
         
       for(i=0; i < anos.length; i++){
        html = html + `
        <br />
        <img width="100" src="${anos[i].imagem}"><br />
        ${anos[i].modelo} <br />
        ${anos[i].marca}<br />
        ${anos[i].ano}<br />
       `
        
       }
        
       
        
       
       document.getElementById("resultado").innerHTML = html;
}