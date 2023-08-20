const express = require("express");
const app = express();
const fs = require("fs/promises");

// middleware

app.use(express.json());
// let usuarios = [
//     { id: 1, nombre: "Leo", apellido: "Montani", profesion: "Programador" },
//     { id: 2, nombre: "Juan", apellido: "Perez", profesion: "Bombero" },
//     { id: 3, nombre: "Pedro", apellido: "Gutierrez", profesion: "Programador" },
//     { id: 4, nombre: "Ricardo", apellido: "Gonzalez", profesion: "Policia" },
// ]

// app.get("/", (request, response) => {
//     console.log("Recibimos una petición")
// })
// app.get("/usuarios", (req, res) => {
//     const { profesion } = req.query
//     const usuariosFiltrados = usuarios.filter((usuario) => {
//         return usuario.profesion === profesion;
//     })
//     res.json(usuariosFiltrados);
// })

// app.get("/usuarios/:id", (req, res) => {
//     const { id } = req.params;
//     const userFiltered = usuarios.find((usuario) => {
//         return usuario.id === parseInt(id);
//     })
//     res.json(userFiltered);
// })

// Controllers
const petControllers = require("./controllers/PetController")

app.get("/mascotas", petControllers.getQueryPets);

app.get("/mascotas/:nombre", petControllers.getParamPets);

app.post("/mascotas", async (req, res) => {
    const body = req.body;
    const data = await fs.readFile("./mascotas.json", "utf-8");
    const mascotas = JSON.parse(data);
    mascotas.push(body);
    const error = await fs.writeFile("./mascotas.json", JSON.stringify(mascotas));
    if (error) { res.json({ error: "No se pudo guardar la mascota" }) }
    res.json({ mensaje: "Mascota guardada" });
});

app.listen(3000, () => {
   console.log("Servidor corriendo");
});