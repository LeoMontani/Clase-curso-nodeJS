const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema({
  nombre: { type: String, required: true },
  tipo: String,
  precio: Number,
  vencido: Boolean
});

const Product = model("Product", productSchema);

module.exports = {
  Product
};