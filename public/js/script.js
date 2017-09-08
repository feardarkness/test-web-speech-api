const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'es-ES';
recognition.interimResults = false;

recognition.addEventListener('result', (e) => {
  let last = e.results.length -1;
  let text = e.results[last][0].transcript;
  let confidence = e.results[0][0].confidence;

  console.log(`Texto: ${text}`);
  console.log(`Confianza: ${confidence}`);
});

document.querySelector('button').addEventListener('click', () => {
  recognition.start();
});