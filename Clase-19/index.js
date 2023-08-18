const express = require("express");
const app = express();
let usuarios = [
    { id: 1, nombre: "Leo", apellido: "Montani", profesion: "Programador" },
    { id: 2, nombre: "Juan", apellido: "Perez", profesion: "Bombero" },
    { id: 3, nombre: "Pedro", apellido: "Gutierrez", profesion: "Programador" },
    { id: 4, nombre: "Ricardo", apellido: "Gonzalez", profesion: "Policia" },
]

app.get("/", (request, response) => {
    console.log("Recibimos una petición")
})
app.get("/usuarios", (req, res) => {
    const { profesion } = req.query
    const usuariosFiltrados = usuarios.filter((usuario) => {
        return usuario.profesion === profesion;
    })
    res.json(usuariosFiltrados);
})

app.get("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const userFiltered = usuarios.find((usuario) => {
        return usuario.id === parseInt(id);
    })
    res.json(userFiltered);
})

app.listen(3000, () => {
    console.log("Servidor corriendo");
})