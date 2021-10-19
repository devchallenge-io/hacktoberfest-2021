window.addEventListener('resize', calculaMargin);

function calculaMargin() {
  var main = document.getElementsByTagName('main')[0];

  var novaMargin = (window.innerWidth - 1260) / 2;

  if(novaMargin > 0) {
    main.style.marginLeft = novaMargin
  }
}

calculaMargin();

//////////////////////

const url = 'https://rickandmortyapi.com/api/character/';

function listarPersonagem() {
  let req = fetch(url)
  let dado = req.then((response) => {
    return response.json()
  })
     
  dado.then((dado) => {
    dado.results.forEach(element => {

    // criar lista de personagens
      criarPersonagem(element)
    });
  })
}

function criarPersonagem(personagem) {
  let lista = document.getElementById('lista');

  // container sobre o personagem
  let contPersonagem = document.createElement('div')
  
  contPersonagem.addEventListener("click", () => {
    pegarInfoPersonagem(personagem.id)

    window.location.href = "#info"
  });

  contPersonagem.classList.add("item");

  let imagem = document.createElement('img');
  imagem.src = personagem.image;
  imagem.alt = personagem.name;

  contPersonagem.appendChild(imagem);

  // informações
  let divInfo = document.createElement('div');

  createAndAppend('h2', `${personagem.id} - ${personagem.name}`, divInfo)
  createAndAppend('h3', 'Status', divInfo)
  createAndAppend('p', `${personagem.status}`, divInfo)
  createAndAppend('h3', 'Especie', divInfo)
  createAndAppend('p', `${personagem.species}`, divInfo)

  contPersonagem.appendChild(divInfo);

  lista.appendChild(contPersonagem)
}

// criar elemento filho e adicionar ao elemento pai
function createAndAppend(tag, conteudo, pai) {
  let elemento = document.createElement(tag);

  elemento.textContent = conteudo
  pai.appendChild(elemento)

  return elemento
}

// pegar informações do personagem
function pegarInfoPersonagem(id) {
  let req = fetch(url + id)
  let dado = req.then((response) => {
    return response.json()
  })

  dado.then((dado) => {
    setarCamposEditar(dado) 
  })
}

function setarCamposEditar(dados) {
  let nome = document.getElementById("nome")
  let status = document.getElementById("status")
  let especie = document.getElementById("especie")
  let imagem = document.getElementById("imagem")
  let origin = document.getElementById("origin")
  let location = document.getElementById("location")
  let listaEpisodio = document.getElementById('episodios')

  nome.innerText = `${dados.id} - ${dados.name}`
  status.innerText = dados.status
  especie.innerText = dados.species
  origin.innerText = dados.origin.name
  location.innerText = dados.location.name

  imagem.src = dados.image
  imagem.alt = dados.name

  listaEpisodio.innerHTML = "";

  // lista de episodios
  dados.episode.forEach(function(item) {
    adicionaEpisodio(item)
  })
}

function adicionaEpisodio(episodio) {
  let a = document.createElement('a');
  let div = document.createElement('div');
  let listaEpisodio = document.getElementById('episodios');

  numEpi = episodio.substr(episodio.indexOf('episode/') + 8);

  a.href = episodio;
  a.innerText = `Episódio ${numEpi}`

  div.appendChild(a)
  listaEpisodio.appendChild(div)
}


listarPersonagem()