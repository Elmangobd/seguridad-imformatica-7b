const textoInput = document.getElementById("texto");
const offsetInput = document.getElementById("offset");
const accionSelect = document.getElementById("accion");
const accionButton = document.getElementById("accionButton");


function cifrarDescifrar() {
// Obtiene el valor del campo de entrada de texto
const texto = document.getElementById("texto").value;

// Obtiene el valor del campo de desplazamiento como un número entero
const offset = parseInt(document.getElementById("offset").value);

// Obtiene la acción seleccionada (encriptar o desencriptar) desde el menú desplegable
const accion = document.getElementById("accion").value;

// Define el alfabeto con "N" y "Ñ" en la misma posición
const alfabeto = "abcdefghijklmnopqrstuvwxyz";
const alfabetoMayusculas = alfabeto.toUpperCase();

// Inicializa una cadena para almacenar el resultado
let resultado = "";

// Recorre cada carácter en el texto de entrada
for (let i = 0; i < texto.length; i++) {
let char = texto[i];

// Comprueba si el carácter es una letra mayúscula o minúscula
if (char.match(/[a-zA-ZñÑ]/)) {
  const isUpperCase = char === char.toUpperCase();
  char = char.toLowerCase();

  // Cambia "ñ" a "s" antes del proceso
  if (char === "ñ") {
    char = "n";
  }
  const index = alfabeto.indexOf(char);

  if (accion === "encriptar") {
    // Encriptar (avanzar)
    let newIndex = (index + offset) % alfabeto.length;
    if (newIndex < 0) {
      newIndex += alfabeto.length;
    }
    let resultChar = isUpperCase
      ? alfabetoMayusculas[newIndex]
      : alfabeto[newIndex];

    // Agrega el carácter encriptado al resultado
    resultado += resultChar;
  } else {
    // Desencriptar (retroceder)
    let newIndex = (index - offset) % alfabeto.length;
    if (newIndex < 0) {
      newIndex += alfabeto.length;
    }
    let resultChar = isUpperCase
      ? alfabetoMayusculas[newIndex]
      : alfabeto[newIndex];

    // Agrega el carácter desencriptado al resultado
    resultado += resultChar;
  }
} else {
  // Si el carácter no es una letra, se agrega tal cual al resultado
  resultado += char;
}
}

// Establece el contenido del elemento con el ID "resultado" en la página con el resultado
document.getElementById("resultado").textContent = resultado;
}