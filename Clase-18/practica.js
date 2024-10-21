// Ejemplos de los tipos de datos abajo

// let nombreDeSuperHeroe = "Spider-man";
// let nombre = "Peter Parker";
// let poder = "Columpiarse";
// let maneja = true;
// let edad = 24;
// let trabajo = "Fotógrafo";
// let tiempoLibre = null;
// console.log("Nombre de super heroe:", nombreDeSuperHeroe);
// console.log("Nombre:", nombre);
// console.log("Poder:", poder);
// console.log("Maneja:", maneja);
// console.log("Edad:", edad);
// console.log("Trabajo:", trabajo);
// console.log("Tiempo Libre:", tiempoLibre);

// Ejemplos de operaciones abajo

// let numero1 = 7;
// let numero2 = 3;
// console.log("Suma=", numero1 + numero2);
// console.log("Resta=", numero1 - numero2);
// console.log("Multiplicación=", numero1 * numero2);
// console.log("División=", numero1 / numero2);
// console.log("Resto=", numero1 % numero2);

// Sacando promedios con operaciones concatenadas abajo

// let promedioParaAprobar = 6;
// let promedioDelAlumno = 4;
// console.log("Promedio mayor o igual que el requerido", promedioDelAlumno >= promedioParaAprobar);
// console.log(`Puntos que le faltaron al alumno para aprobar = ${promedioParaAprobar - promedioDelAlumno}`);

// Primer ejemplo de condicionales abajo

// const primerEjemplo = 3;
// if (primerEjemplo > 0) {
//   console.log("ElnúmeroEsPositivo");
// }

// Segundo ejemplo de condicionales abajo

// const segundoEjemplo = 2164;
// if (segundoEjemplo % 2 === 0) {
//   console.log("ElNúmeroEsPar");
// }
// else {
//   console.log("ElNúmeroEsImpar");
// }

// Tercer ejemplo de los condicionales abajo

// const tercerEjemplo = 13;
// if (tercerEjemplo <= 5) {
//   console.log("El nivel de membresía es básico");
// }
// else if (tercerEjemplo <= 10) {
//   console.log("El nivel de membresía es intermedio");
// }
// else if (tercerEjemplo <= 15) {
//   console.log("El nivel de membresía es avanzado");
// }
// else {
//   console.log("El nivel de membresía es VIP");
// }

// Ejemplos de estructuras de control de bucles abajo

// Ejemplo 1 abajo

// for (let ejemploBucle1 = 1; ejemploBucle1 <=10; ejemploBucle1++) {
//   console.log(ejemploBucle1);
// }

// Ejemplo 2 abajo

// for (let ejemploBucle2 = 10; ejemploBucle2 >=1; ejemploBucle2--) {
//   console.log(ejemploBucle2);
// }

// Ejemplo 3 abajo

// let ejemploResultado = 0;
// for (let ejemploBucle3 = 1; ejemploBucle3 <=50; ejemploBucle3++) {
//   ejemploResultado = ejemploResultado + ejemploBucle3;
// }
// console.log(ejemploResultado);

// Actividad 1

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log("Es par");
//   }
//   else {
//     console.log("Es impar");
//   }
// }

// Actividad 2

// let numeroPrincipal = 7;
// if (numeroPrincipal <= 10) {
//   console.log("El número es válido");
//   console.log(`La tabla del ${numeroPrincipal} es la siguiente`)
//   for (let i = 0; i <= 10; i++) {
//     console.log(`${numeroPrincipal} x ${i} = ${numeroPrincipal * i}`);
//   }
// }
// else {
//   console.log("El número no es válido, debe ser un número entre el 1 y el 10");
// }

// Actividad de arrays

// let miPrimerArray = [40, 12, 32, 67];
// let numeroArray = 0;
// for (let practicaDeArray of miPrimerArray) {
//   numeroArray = numeroArray + practicaDeArray;
// }
// console.log(numeroArray);

// Actidad 2 de arrays

// let miSegundoArray = [21, 54654 , 55 ,788, 209523];
// let maximoArray = 15;
// for (let unArray of miSegundoArray) {
//   if (unArray > maximoArray) {
//     maximoArray = unArray
//   }
// }
// console.log(`El mayor valor de mi array es ${maximoArray}`);

// Actividad 3 de arrays

// let miTercerArray = [14, 17, 15, 12];
// let numerosPares = [];
// for (nuevaVariable of miTercerArray) {
//   if (nuevaVariable % 2 === 0) {
//     numerosPares.push(nuevaVariable);
//   }
// }
// console.log(`Estos son los numeros pares de mi array: ${numerosPares}`);

// Actividad 1 de funciones

// let calculadoraBasica = function (numero1, numero2, operacion) {
  // let calculadoraMultiplicacion = numero1 * numero2;
//   let calculadoraDivision = numero1 / numero2;
//   console.log(`${operacion} ${calculadoraDivision}`)
// }
// calculadoraBasica(12, 3, "12 / 3=");

// Actividad 1 de funciones

// function filtroDeNumeros (arrayDenumeros, string) {
//   let arrayContenedor = [];
//   if (string === "par") {
//     for (let primerFiltro of arrayDenumeros) {
//       if (primerFiltro % 2 === 0) {
//         arrayContenedor.push(primerFiltro);
//       }
//     }
//   }
//   else if (string === "impar") {
//     for (let segundoFiltro of arrayDenumeros) {
//       if (segundoFiltro % 2 !== 1) {
//         arrayContenedor.push(segundoFiltro);
//       }
//     }
//   }
//   else {
//     console.log("No se puedo aplicar ningún filtro")
//     }
//     console.log(arrayContenedor);
//   }
// filtroDeNumeros([12, 15, 22, 37, 42, 55, 13], "par");

// Actividad 2 de funciones

// function promedioDeArray (promedio) {
//   let sumaArray = 0;
//   for (let suma of promedio) {
//     sumaArray = sumaArray + suma;
//   }
//   let promedioFinal = sumaArray / promedio.length;
//   console.log(`Este es el promedio: ${promedioFinal}`);
// }
// promedioDeArray([22, 13, 52, 71, 34, 23, 93, 54, 12, 87]);

// Actividad de objetos

// let pelicula = {
//   titulo: "Titanic",
//   director: "James Cameron",
//   genero: "Drama",
//   duracion: "3h 14m",
//   informacion: function () {
//     console.log(`La película llamada ${this.titulo} es una película de ${this.genero} dirigida por ${this.director} y dura ${this.duracion}.`)
//   }
// }
// console.log(pelicula.informacion());

// Actividad de objetos 2

// let calculadora = {
//   sumar : function () {
//     let operacionSuma = 42 + 51;
//     console.log(operacionSuma);
//   },
//   restar : function () {
//     let operacionResta = 72 - 31;
//     console.log(operacionResta);
//   },
//   multiplicar : function () {
//     let operacionMultiplicacion = 13 * 379;
//     console.log(operacionMultiplicacion);
//   },
//   dividir : function () {
//     let operacionDivision = 42 / 12;
//     console.log(operacionDivision);
//   }
// }
// console.log(calculadora.dividir());

// Actividad con el método split

// let laPalabraMasLarga = "";
// function encontrarPalabraMasLarga (palabra) {
//   let arrayDePalabras = palabra.split (" ");
//   for (let palabrasSeparadas of arrayDePalabras) {
//     if (palabrasSeparadas.length > laPalabraMasLarga.length) {
//       laPalabraMasLarga = palabrasSeparadas;
//     }
//   }
//   console.log(laPalabraMasLarga);
// }
// encontrarPalabraMasLarga("El elefante es un muy grande");

// Actividad de objetos 3

// let persona1 = {
//   nombre: "Pedro",
//   edad: 15
// };

// let persona2 = {
//   nombre: "Ana",
//   edad: 28
// };

// function esMayorDeEdad (personas) {
//   if (personas.edad > 18) {
//     console.log(`${personas.nombre} es mayor de edad`);
//   }
//   else {
//     console.log(`${personas.nombre} no es mayor de edad`);
//   }
// }
// esMayorDeEdad(persona1);
// esMayorDeEdad(persona2);

// Actividades de manipulación del DOM

// const tituloHeader = document.getElementById("titulo-header");
// const headerBox = document.getElementById("header-container");
// const botonTexto = document.getElementById("boton-principal");
// const cajaDeBotones = document.getElementById("button-container");
// const botonOcultar = document.getElementById("ocultar-elemento");
// const modoOscuro = document.getElementById("boton-oscuro");

// let darkMode = false;
// let elementoOculto = false;

// const nuevoTextoHeader = document.createElement("p");
// nuevoTextoHeader.innerHTML = "Nueva etiqueta agregada desde JS";
// headerBox.appendChild(nuevoTextoHeader);


// tituloHeader.innerHTML = "Texto modificado desde JS";

// nuevoTextoHeader.addEventListener("click", function(){
//   nuevoTextoHeader.style.backgroundColor = "violet";
//   nuevoTextoHeader.style.color = "white";
//   console.log("Haz cambiado el color");
// })

// botonTexto.addEventListener("click", function(){
//   const elementoAgregado = document.createElement("p");
//   elementoAgregado.innerHTML = "Texto agregado con un evento de JS";
//   cajaDeBotones.appendChild(elementoAgregado);
//   console.log("Texto agregado con un evento");
// })

// botonOcultar.addEventListener("click", () =>{
//   if (!elementoOculto) {
//     tituloHeader.classList.add("ocultar");
//     elementoOculto = true;
//   }
//   else {
//     tituloHeader.classList.remove("ocultar");
//     elementoOculto = false;
//   }
// })

// modoOscuro.addEventListener("click", () => {
//   if (!darkMode) {
//     document.body.style.backgroundColor = "black";
//     nuevoTextoHeader.style.color = "violet";
//     darkMode = true;
//   }
//   else {
//     document.body.style.backgroundColor = "#ffb6c1";
//     nuevoTextoHeader.style.color = "black";
//     darkMode = false;
//   }
//   console.log("Modo oscuro");
// })

// const listaDeUsuarios = document.getElementById("user-list");
// const ulList = document.getElementById("lista");
// const formulario = document.getElementById("formulario");

// let personas = [{
//   nombre: "Pablo",
//   apellido: "González"
// },
// {
//   nombre: "Juan",
//   apellido: "Pérez"
// },
// {
//   nombre: "Lucas",
//   apellido: "Rodríguez"
// }];

// function actualizarLista() {
//   ulList.innerHTML = ""
//   personas.forEach((persona) =>{
//     let liElements = document.createElement("li");
//     ulList.appendChild(liElements);
//     liElements.innerText = `${persona.nombre} ${persona.apellido}`;
//   });
// }

// formulario.addEventListener("submit", (evento) =>{
//   evento.preventDefault();
//   let nombre = formulario["nombre"].value;
//   let apellido = formulario["apellido"].value;
//   let nuevaPersona = {
//     nombre: nombre,
//     apellido: apellido
//   };
//   personas.push(nuevaPersona);
//   actualizarLista();
//   console.log(nombre);
//   console.log(apellido);
// });
// actualizarLista();

// Clase 13

// const formularioEmail = document.getElementById("formulario-email");
// const usuariosRegistrados = document.getElementById("lista");

// let idNuevo = 3;
// let usuarios = [{
//   id: 1,
//   email: "sofia@gmail.com",
//   contraseña: "sofia123"
// },
// {
//   id: 2,
//   email: "sara@gmail.com",
//   contraseña: "sara123"
// }];

// function actualizarUsuarios() {
//   usuariosRegistrados.innerHTML = "";
//   usuarios.forEach((usuario) => {
//     let listItems = document.createElement("li");
//     usuariosRegistrados.appendChild(listItems);
//     listItems.innerHTML = `id: ${usuario.id} <br> email: ${usuario.email} <br> contraseña: ${usuario.contraseña}`;

//   });
// };

// formularioEmail.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let email = formularioEmail["email"].value;
//   let contraseña = formularioEmail["contraseña"].value;
//   let nuevoUsuario = {
//     email: email,
//     contraseña: contraseña,
//     id: idNuevo++
//   };

//   if (nuevoUsuario.email === "") {
//     alert("Debe poner un email");
//     return
//   }
//   if (nuevoUsuario.contraseña === "") {
//     alert("Debe poner una contraseña");
//     return
//   }
//   if (nuevoUsuario.email.length <= 10) {
//     alert("El email debe contener más de 10 caracteres");
//     return
//   }
//   if (nuevoUsuario.contraseña.length <= 3) {
//     alert("La contraseña debe contener más de 3 caracteres");
//     return
//   }
//   if (usuarios.some((usuario) => usuario.email === email))
//     {
//     alert("El usuario ya existe");
//     return
//   } 

//   usuarios.push(nuevoUsuario);
//   actualizarUsuarios();
// })
// actualizarUsuarios();

// Promesas APIs y Fetch

const ulElement = document.getElementById("json-users");

function mostrarInfoDeUsuario (id) {
  let nuevoID = 1;
  id = nuevoID;
  console.log(id);
}

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        console.log(users);
        users.forEach(user => {
          let liElement = document.createElement("li");
          let buttons = document.createElement("button");
          buttons.innerText = user.name;
          liElement.appendChild(buttons);
          ulElement.appendChild(liElement);

          buttons.addEventListener("click", (e) =>{
            fetch("https://jsonplaceholder.typicode.com/albums?userId=4")
            .then(res => res.json())
            .then(idReemplazo => {
              mostrarInfoDeUsuario = idReemplazo.userID
            })
            console.log(`id: ${idReemplazo}`);
          });
        });
      });

// Clase 17

// const formularioNuevo = document.getElementById("formulario-nuevo");


// formularioNuevo.addEventListener("submit", (e) =>{
//   e.preventDefault();
//   let titulo = formularioNuevo["title"].value;
//   let body = formularioNuevo["body"].value;
//   let userId = formularioNuevo["userId"].value;
//   console.log({titulo, body, userId});
// })

// Clase 18

console.log("test");