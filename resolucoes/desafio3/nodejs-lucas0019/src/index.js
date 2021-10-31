const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());


// Array that stores data during local API execution
const products = [];

// Middleware de Logs de Requisição de Product
function logRequest(request, response, next) {
  const { method, url } = request;
  const logLabel = `[${method.toUpperCase()} ${url}]`

  console.time(logLabel);
  
  next()

  console.timeEnd(logLabel);
}

app.use(logRequest)


app.get("/bonestore/products", (request, response) => {
  const { name } = request.query;

  const results = name
    ? products.filter((product) => product.name.includes(name))
    : products;

  return response.json(results);
});

app.post("/bonestore/products", (request, response) => {
  const { name, price, skuId, seller, thumbnailHd, inStock } = request.body;

  const product = { id: uuidv4(), name, price, skuId, seller, thumbnailHd, inStock };

  products.push(product);

  return response.json(product);
});

app.put("/bonestore/products/:id", (request, response) => {
  const { id } = request.params;
  const { name, price, skuId, seller, thumbnailHd, inStock } = request.body;

  const productIndex = products.findIndex((product) => product.id === id);

  if (productIndex < 0) {
    return response.status(400).json({ error: "Products not found." });
  }

  const product = { name, price, skuId, seller, thumbnailHd, inStock };

  products[productIndex] = product;

  return response.json(product);
});

app.delete("/bonestore/products/:id", (request, response) => {
  const { id } = request.params;

  const productIndex = products.findIndex(product => product.id === id);

  if (productIndex < 0) {
    return response.status(400).json({ error: "Products not found." });
  }

  products.splice(productIndex, 1);

  return response.status(204).send();
});


// Rota da Aplicação
app.listen(3333, () => {
  console.log("Server started 🔥");
});
