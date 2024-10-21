require("dotenv").config();

const productController = require("./controllers/productController");
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

app.get("/products", productController.getProducts);

app.post ("/products", productController.postProducts);

app.put ("/products/:id", productController.updateProducts);

app.delete ("/products/:id", productController.deleteProducts);

app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});