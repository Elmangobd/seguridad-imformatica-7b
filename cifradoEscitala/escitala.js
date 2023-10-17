function calcularCaracteres() {
    const lados = parseInt(document.getElementById("lados").value);
    const vueltas = parseInt(document.getElementById("vueltas").value);

    if (isNaN(lados) || isNaN(vueltas)) {
        alert("Por favor, ingresa números enteros válidos.");
        return;
    }

    const caracteresPermitidos = lados * vueltas;
    document.getElementById("caracteresPermitidos").textContent = caracteresPermitidos;
    document.getElementById("caracteresPermitidosLabel").textContent = caracteresPermitidos;

    // Habilitar el campo de texto del mensaje y establecer la longitud máxima
    document.getElementById("mensaje").disabled = false;
    document.getElementById("mensaje").maxLength = caracteresPermitidos;
}

function cifrarMensaje() {
    const mensaje = document.getElementById("mensaje").value;
    const lados = parseInt(document.getElementById("lados").value);

    if (mensaje.length === 0) {
        alert("Por favor, ingresa un mensaje.");
        return;
    }

    const mensajeCifrado = escitalaCifrar(mensaje, lados);
    document.getElementById("resultado").textContent = mensajeCifrado;
}

function descifrarMensaje() {
    const mensajeCifrado = document.getElementById("mensaje").value;
    const lados = parseInt(document.getElementById("lados").value);

    if (mensajeCifrado.length === 0) {
        alert("Por favor, ingresa un mensaje cifrado.");
        return;
    }

    const mensajeDescifrado = escitalaDescifrar(mensajeCifrado, lados);
    document.getElementById("resultado").textContent = mensajeDescifrado;
}

function escitalaCifrar(mensaje, lados) {
    const caracteresPorColumna = Math.ceil(mensaje.length / lados);
    const mensajeCifrado = [];

    for (let i = 0; i < caracteresPorColumna; i++) {
        for (let j = i; j < mensaje.length; j += caracteresPorColumna) {
            mensajeCifrado.push(mensaje[j]);
        }
    }

    return mensajeCifrado.join(''); // Devolver como una cadena
}

function escitalaDescifrar(mensajeCifrado, lados) {
    const caracteresPorColumna = Math.ceil(mensajeCifrado.length / lados);
    const filas = lados;
    const columnas = caracteresPorColumna;

    let k = 0;
    const matriz = new Array(filas);

    for (let i = 0; i < filas; i++) {
        matriz[i] = new Array(columnas);
    }

    for (let j = 0; j < columnas; j++) {
        for (let i = 0; i < filas; i++) {
            if (k < mensajeCifrado.length) {
                matriz[i][j] = mensajeCifrado[k];
                k++;
            }
        }
    }

    const mensajeDescifrado = [];
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            if (matriz[i][j]) {
                mensajeDescifrado.push(matriz[i][j]);
            }
        }
    }

    return mensajeDescifrado.join(''); // Devolver como una cadena
}