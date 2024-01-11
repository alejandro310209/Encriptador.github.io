const texArea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");

// Matriz, un arreglo multidimensional
// toLowerCase() es para convertir la letra a minúscula
// Con el método replaceAll() se sustituyen todos los caracteres
/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

function btnEncriptador() {
  const textoEncriptado = encriptador(texArea.value);
  mensaje.value = textoEncriptado;
  texArea.value = "";
  mensaje.style.backgroundImage = "none";
 
}

function encriptador(stringEncriptar) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringEncriptar = stringEncriptar.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptar.includes(matrizCodigo[i][0])) {
      stringEncriptar = stringEncriptar.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptar;
}


function desencriptar(stringDesencriptado) {
    let matrizCodigo = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"]
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase();
  
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringDesencriptado.includes(matrizCodigo[i][1])) {
        stringDesencriptado = stringDesencriptado.replaceAll(
          matrizCodigo[i][1],
          matrizCodigo[i][0]
        );
      }
    }
    
    return stringDesencriptado;
  }
  
  function btndesencriptador() {
    const textoDesencriptado = desencriptar(texArea.value);
    mensaje.value = textoDesencriptado;
    texArea.value = "";
  }
  

  

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}