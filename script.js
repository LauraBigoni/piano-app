// * Prendo tutti gli elementi dal DOM
const pianoKeys = document.querySelectorAll('.note');

// * Dichiaro l'interazione e preparo la logica
let interactionEvent;
if ('ontouchend' in document.documentElement) {
  interactionEvent = 'touchend';
} else {
  interactionEvent = 'click';
}

// * Preparo le note
const notes = {
  do: '01-do.mp3',
  dodiesis: '02-dodiesis.mp3',
  re: '03-re.mp3',
  rediesis: '04-rediesis.mp3',
  mi: '05-mi.mp3',
  fa: '06-fa.mp3',
  fadiesis: '07-fadiesis.mp3',
  sol: '08-sol.mp3',
  soldiesis: '09-soldiesis.mp3',
  la: '10-la.mp3',
  ladiesis: '11-ladiesis.mp3',
  si: '12-si.mp3'
};

// * Preparo la funzione playNote
function playNote(key) {
  const note = notes[key];
  const audio = new Audio('sounds/' + note);
  audio.currentTime = 0;
  audio.play();
}

// * Aggiunto l'event listener a tutti gli elementi
pianoKeys.forEach(function (keyElement) {
  keyElement.addEventListener(interactionEvent, function () {
    const key = keyElement.id;

    // * Passo la funzione playNote
    playNote(key);
  });
});
