const { Router } = require("express");
const BoneController = require("./controllers/BoneController");

const routes = Router();

routes.get("/", (request, response) => {
  return response.json({ message: "OK!" });
});

routes.get("/bonestore/product", BoneController.index);
routes.post("/bonestore/product", BoneController.save);
routes.delete("/bonestore/product/:id", BoneController.delete);
routes.put("/bonestore/product/:id", BoneController.update);

module.exports = routes;
