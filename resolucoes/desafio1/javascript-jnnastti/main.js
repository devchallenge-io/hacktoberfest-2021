// Carrossel

const gap = 16;

const carousel = document.getElementById("carousel"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));


// Alinhar main no centro
window.addEventListener('resize', calculaMargin);

function calculaMargin() {
  var main = document.getElementsByTagName('main')[0];

  main.style.marginLeft = (window.innerWidth - 1060) / 2
}

calculaMargin();


// Listagem de filmes
function listarFilme() {
  var content = document.getElementById('content');

  FilmesCartaz.forEach(function(item) {
    content.appendChild(this.adicionarItemFilme(item));
  });

}

// Adicionar filme a lista do carrossel
function adicionarItemFilme(filme) {
  var img = document.createElement('img');

  img.src = filme.Imagem;
  img.alt = filme.Nome;

  img.classList.add('item')

  img.addEventListener('click', () => {
    this.setarInfos(filme);

    window.location.href = "#info"
  })

  return img;
}

// Setar infos do filme no popup
function setarInfos(filme) {
  var img = document.getElementById('imgFilme'),
      nome = document.getElementById('nomeFilme'),
      legendado = document.getElementById('legendadoFilme'),
      dublado = document.getElementById('dubladoFilme'),
      descricao = document.getElementById('descricaoFilme');

  img.src = filme.Imagem;
  img.alt = filme.Nome;

  nome.innerText = filme.Nome;
  legendado.innerText = filme.Legendado ? "Sim" : "Não";
  dublado.innerText = filme.Dublado ? "Sim" : "Não";
  descricao.innerText = filme.Descricao;

}

listarFilme();


// Listagem de melhores filmes
function listarMelhoresFilme() {
  var melhores = document.getElementById('melhores');

  MelhoresFilmes.forEach(function(item) {
    melhores.appendChild(this.adicionarItemMelhoresFilme(item));
  });

}

// Adicionar melhores filmes a lista
function adicionarItemMelhoresFilme(filme) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  var divImg = document.createElement('div');

  img.src = filme.Imagem;
  img.alt = filme.Nome;

  for(let i = 0; i < filme.Avaliacao; i++) {
    divImg.appendChild(this.adicionaEstrela())
  }
  
  img.classList.add('item')
  
  div.appendChild(img);
  div.appendChild(divImg);

  return div;
}

// Estrelinhas
function adicionaEstrela() {
  var img = document.createElement('img');

  img.src="./assets/img/star.svg";

  return img;
}

listarMelhoresFilme();