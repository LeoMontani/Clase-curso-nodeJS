const { connectDB, disconnectDB } = require("../DB/conections");
const schema = require("../DB/Schemes/productScheme");

const getProducts = async (req, res) => {
  console.log(process.env);
  await connectDB();
  const products = await schema.Product.find({});
  await disconnectDB();
  res.json(products);
};

const postProducts = async (req, res) => {
  const { nombre, tipo, precio, vencido } = req.body
  await connectDB();
  const product = new schema.Product({ nombre, tipo, precio, vencido });
  const newProduct = await product.save();
  await disconnectDB();
  res.json(newProduct);
};

const updateProducts = async (req,res) => {
  const { id } = req.params;
  const { nombre, tipo, precio, vencido } = req.body;
  await connectDB();
  const response = await schema.Product.findByIdAndUpdate(id, { nombre, tipo, precio, vencido });
  await disconnectDB();
  res.json(response);
};

const deleteProducts = async (req,res) => {
  const { id } = req.params;
  await connectDB();
  const response = await schema.Product.findByIdAndDelete(id);
  await disconnectDB();
  res.json(response);
};

module.exports = { 
  getProducts, 
  postProducts, 
  updateProducts,
  deleteProducts 
}