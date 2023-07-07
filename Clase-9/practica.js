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