const tareas = require("./tareas");

console.log(tareas);

tareas.agregarTarea ({
    objetivo: "Pasear al perro",
    obstaculo: "Hace alto frio",
});

tareas.mostrarTareas();

tareas.vaciarLista();