const url = 'https://apifrases.herokuapp.com/frases/random';
const voiceSelect = document.getElementById('voices');
const btnFalar = document.getElementById('btn');
let voices;
let currentVoice;

function apresentarFrase() {
  let req = fetch(url)

  let dado = req.then((response) => {
    return response.json()
  })
     
  dado.then((dado) => {

    criarFrase(dado)
  })
 
}

function populateVoices() {
  const availableVoices = speechSynthesis.getVoices();

  voiceSelect.innerHTML = '';

  availableVoices.forEach(voice => {
      const option = document.createElement('option');
        let optionText = `${voice.name} (${voice.lang})`;

      if (voice.default) {
          optionText += ' [default]';

          if (typeof currentVoice === 'undefined') {
              currentVoice = voice;
              option.selected = true;
          }
      }

      if (currentVoice === voice) {
          option.selected = true;
      }

      option.textContent = optionText;
      voiceSelect.appendChild(option);
  });

  voices = availableVoices;
};

populateVoices();
speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener('change', event => {
  const selectedIndex = event.target.selectedIndex;
  currentVoice = voices[selectedIndex];
});


function criarFrase(infofrase) {
  let div = document.getElementById('frase');
  
  let frase = document.createElement('p');
  let h2 = document.createElement('h2');

  h2.textContent = `- ${infofrase.autor}`;
  
  frase.textContent = infofrase.frase;

  frase.id = "textoFrase";
  
  div.innerHTML = "";

  div.appendChild(frase)
  div.appendChild(h2)

  lerFrase()
}

function lerFrase() {
  let frase = document.getElementById('textoFrase');
  let toSay = frase.textContent.trim();

  const utterance = new SpeechSynthesisUtterance(toSay);

  utterance.voice = currentVoice;
  speechSynthesis.speak(utterance);
}

