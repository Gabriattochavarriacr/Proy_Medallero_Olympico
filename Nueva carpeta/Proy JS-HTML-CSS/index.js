window.onload = function () {
    var generarBtn = document.getElementById("generarBtn");
    generarBtn.style.display = "none";
    generarBtn.style.backgroundColor = "red";
}

function crearTabla() {
    var numPaises = parseInt(document.getElementById("numPaises").value);

    if (numPaises >= 2) {
        var generarBtn = document.getElementById("generarBtn");
        generarBtn.style.display = "block";
        generarBtn.style.backgroundColor = "";

        var tabla = "<h2>Tabla de posicionamiento de " + numPaises + " países</h2>";
        tabla += "<table>";
        tabla += "<tr><th>Pais participante</th><th>Oro</th><th>Plata</th><th>Bronce</th></tr>";

        for (var i = 0; i < numPaises; i++) {
            var pais = prompt("Ingrese país participante");
            tabla += "<tr><td>" + pais + "</td>";
            tabla += "<td><input type='number' id='oro" + i + "'></td>";
            tabla += "<td><input type='number' id='plata" + i + "'></td>";
            tabla += "<td><input type='number' id='bronce" + i + "'></td></tr>";
        }
        tabla += "</table>";

        document.getElementById("tablaPosicionamiento").innerHTML = tabla;
    } else {
        alert("Debe ingresar al menos 2 países para crear la tabla de posicionamiento.");
    }
}

function generarResultados() {
    var numPaises = parseInt(document.getElementById("numPaises").value);
    var resultadoTabla = "<h2>Resultados del puntaje obtenido</h2>";
    resultadoTabla += "<table><tr><th>Pais participante</th><th>Oro</th><th>Plata</th><th>Bronce</th><th>Puntos Obtenidos</th><th>Sumatoria de Puntos</th></tr>";

    var totalPuntos = 0;
    var ganadorIndex = 0;
    var maxPuntaje = 0;
    var paisGanador = "";

    var todosCamposValidos = true;

    for (var i = 0; i < numPaises; i++) {
        var oro = parseInt(document.getElementById("oro" + i).value);
        var plata = parseInt(document.getElementById("plata" + i).value);
        var bronce = parseInt(document.getElementById("bronce" + i).value);

        if (isNaN(oro) || isNaN(plata) || isNaN(bronce)) {
            todosCamposValidos = false;
            alert("Por favor, ingrese números válidos en Oro, Plata y Bronce para todos los países.");
            break;
        }

        var puntos = oro + plata + bronce;
        totalPuntos += puntos;

        var pais = document.getElementById("oro" + i).parentNode.previousSibling.textContent;
        resultadoTabla += "<tr><td>" + pais + "</td>";
        resultadoTabla += "<td>" + oro + "</td>";
        resultadoTabla += "<td>" + plata + "</td>";
        resultadoTabla += "<td>" + bronce + "</td>";
        resultadoTabla += "<td>" + puntos + "</td>";
        resultadoTabla += "<td>" + (oro * 3 + plata * 2 + bronce) + "</td></tr>";

        if (puntos > maxPuntaje) {
            maxPuntaje = puntos;
            ganadorIndex = i;
            paisGanador = pais;
        }
    }

    if (todosCamposValidos) {
        document.getElementById("tablaPosicionamiento").innerHTML = resultadoTabla;

        var paisGanadorElement = document.createElement("p");
        paisGanadorElement.innerHTML = "El país ganador con el puntaje más alto es: " + paisGanador;
        document.getElementById("tablaPosicionamiento").appendChild(paisGanadorElement);
    }
}

var image = document.getElementById("image");


var imageNames = ["./img/e9.png", "./img/2.png"];
var currentIndex = 0;


function rotateImage() {
    currentIndex = (currentIndex + 1) % imageNames.length;
    var nextImageName = imageNames[currentIndex];

    image.src = nextImageName;
    image.style.transform = "rotateY(0deg)";
}

setInterval(rotateImage, 3000);