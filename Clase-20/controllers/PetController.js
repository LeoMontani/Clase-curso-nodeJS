const petModels = require("../models/pets");

async function getQueryPets (req ,res) {
  const { animal, perdido } = req.query;
  const mascotas = await petModels.allQueryPets(animal, perdido);
  res.json(mascotas);
}

async function getParamPets (req ,res) {
  const nombre = req.params.nombre;
  const mascota = await petModels.allParamPets(nombre); 
  res.json(mascota);
}

module.exports = {
  getQueryPets,
  getParamPets,
}