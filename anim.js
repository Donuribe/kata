// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "todo lo que quiero es nada mas", time: 9.5 },
  { text: "escuchar tu golpe en mi puerta", time: 16 },
  { text: "porque si pudiera ver tu rostro una vez mas", time: 23 },
  { text: "podria morir un hombre feliz, estoy seguro", time: 30 },
  { text: "cuando dijiste tu ultimo adios", time: 37 },
  { text: "mori un poco por dentro", time: 43 },
  { text: "me acoste en lagrimas en la cama toda la noche", time: 50 },
  { text: "solo, sin ti a mi lado", time: 57 },
  { text: "pero si me amabas, ¿porque me dejaste ir?", time:62  },
  { text: "lleva mi cuerpo, lleva mi cuerpo", time: 70 },
  { text: "todo lo que quiero es ", time: 78 },
  { text: "y todo lo que nececito es ", time: 80 },
  { text: "encontrar a alguien ", time: 83 },
  { text: "encontrar a alguien ", time: 86 },
  { text:  "como tu ", time:95 },
  { text: "oh,oh,oh", time: 97 },
  { text: "oh,oh,oh ", time: 104 },
  { text: "asi que sacaste lo mejor de mi", time: 123 },
  { text: "una parte de mi que nunca habia visto", time: 130 },
  { text: "tomaste mi alma y la limpiaste ", time: 136 },
  { text: "nuestro amor estaba hecho para pantallas de cine ", time: 143 },
  { text: "pero si me amabas, ¿por que me dejaste?", time: 149 },
  { text: "llevate mi cuerpo", time:155},
  { text: "llevate mi cuerpo", time:158},
  { text: "todo lo que quiero es ", time: 162 },
  { text: "y todo lo que necesito es", time: 166 },
  { text: "encontrar a alguien ", time: 170 },
  { text: "encontrar a alguien ", time: 172 },
  { text: "oh,oh,oh", time: 188 },
  { text: "oh,oh,oh.", time: 200 },
  {text:"perdon que no quedara cordinado al final pero es muy jodido dar con el segundo exapto", time:219},
  {text:"espero te halla gustado y porfa me avisas cuando hayas terminado y me dices que tal te parecio :)", time: 225},

  ]


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);