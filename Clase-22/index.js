require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { connectDB, disconnectDB } = require("./DB/conections");
const { Product } = require("./DB/Schemes/productScheme");
const PORT = process.env.PORT || 8080

app.use(express.json());

// Ejemplo que tengo que terminar después

// app.get("/", (req, res) => {
//   console.log("test");
//   mongoose.connect("")
//     .then(() => {
//       console.log("Conectado a la base de datos");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/products", async (req, res) => {
  console.log(process.env);
  await connectDB();
  const products = await Product.find({});
  await disconnectDB();
  res.json(products);
})

app.post ("/products", async (req, res) => {
  const { nombre, tipo, precio, vencido } = req.body
  await connectDB();
  const product = new Product({ nombre, tipo, precio, vencido });
  const newProduct = await product.save();
  await disconnectDB();
  res.json(newProduct);
})

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});