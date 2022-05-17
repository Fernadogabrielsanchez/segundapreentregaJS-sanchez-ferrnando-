const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit" , validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value
     
    const respuesta = document.getElementById("respuesta");
    respuesta.textContent = `Bienvenido ${nombre} este es un juego preparado para que pienses y disfrutes a la vez`

}
//inicio de test

const contenedor = document.getElementById("test");
const botonRes = document.getElementById("boton");
const resultadoTest = document.getElementById("resultado");

const preguntas = [
  {
    pregunta: "1. cual es la varita mas poderosa de la saga?",
    respuestas: {
      a: "sauco",
      b: "pluma fenix",
      c: "basilisco",
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "2.nombre del colegio?",
    respuestas: {
      a: "tecnica 6",
      b: "kennedy",
      c: "wogwarts",
    },
    respuestaCorrecta: "c",
  },
  {
    pregunta: "3. nombre del protagonista?",
    respuestas: {
      a: "harry",
      b: "ron",
      c: "malfoy",
      
    },
    respuestaCorrecta: "a",
  },
  {
    pregunta: "4.cual es el hechizo mas conocido?",
    respuestas: {
      a: "abada kadabra",
      b: "espectro patronus",
      c: "matamoscas",
    },
    respuestaCorrecta: "a",
  },
];

function mostrarTest() {
  const preguntasYrespuestas = [];

  preguntas.forEach((preguntaActual, numeroDePregunta) => {
    const respuestas = [];

    for (letraRespuesta in preguntaActual.respuestas) {
      respuestas.push(
        `<label>
                  <input type="radio" name="${numeroDePregunta}" value="${letraRespuesta}" />
                  ${letraRespuesta} : ${preguntaActual.respuestas[letraRespuesta]}
              </label>`
      );
    }

    preguntasYrespuestas.push(
      `<div class="cuestion">${preguntaActual.pregunta}</div>
          <div class="respuestas"> ${respuestas.join("")} </div>
          `
    );
  });

  contenedor.innerHTML = preguntasYrespuestas.join("");
}

mostrarTest();

function mostrarResultado() {
    const respuestas = contenedor.querySelectorAll(".respuestas");
    let respuestasCorrectas = 0;
     
    preguntas.forEach((preguntaActual, numeroDePregunta) => {
      const todasLasRespuestas = respuestas[numeroDePregunta];
      const checkboxRespuestas = `input[name='${numeroDePregunta}']:checked`;
      const respuestaElegida = (
        todasLasRespuestas.querySelector(checkboxRespuestas) || {}
      ).value;
  
      if (respuestaElegida === preguntaActual.respuestaCorrecta) {
        respuestasCorrectas+=1;
  
        respuestas[numeroDePregunta].style.color = "blue";
      } else {
        respuestas[numeroDePregunta].style.color = "red";
      }
    });
  
    resultadoTest.innerHTML =
      "Usted ha acertado " +
      respuestasCorrectas +
      " preguntas de un total de " +
      preguntas.length;
  }
  
  botonRes.addEventListener("click", mostrarResultado);

