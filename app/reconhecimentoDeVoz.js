const elementoChute = document.getElementById('chute'); // Correção aqui

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
  const chute = e.results[0][0].transcript; // Declarar a variável chute com const
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
  `;
}

recognition.addEventListener ('end', () => recognition.start())