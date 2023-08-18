const fs = require("fs/promises");

async function allQueryPets (animal, perdido) {
  const data = await fs.readFile("./mascotas.json", "utf-8");
  let mascotas = JSON.parse(data);
  if (animal) {
      mascotas = mascotas.filter ((mascota) => mascota.animal === animal)
  }
  if (perdido) {
      let estaPerdido = perdido === "true" ? true : false;
      mascotas = mascotas.filter ((mascota) => mascota.perdido === estaPerdido)
  }
  return mascotas;
}

async function allParamPets (nombre) {
  const data = await fs.readFile("./mascotas.json", "utf-8");
  let mascotas = JSON.parse(data);
  let mascota = mascotas.find((mascota) => mascota.nombre === nombre)
  return mascota;
}

module.exports = {
  allQueryPets,
  allParamPets,
}