let arrayVacio = [];

const mostrarTareas = () => {
    console.log(arrayVacio);
}

const agregarTarea = (nuevaTarea) => {
    arrayVacio.push(nuevaTarea);
}

const vaciarLista = () => {
    arrayVacio = [];
    console.log(arrayVacio);
}

module.exports = {
    arrayVacio,
    mostrarTareas,
    agregarTarea,
    vaciarLista,
};