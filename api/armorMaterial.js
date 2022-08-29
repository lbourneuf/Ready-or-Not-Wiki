const express = require("express");
const apiRouter = express.Router();
const { getAllArmorMaterial, getArmorMaterialById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const material = await getAllArmorMaterial();
    res.send(material);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:materialId", async (req, res, next) => {
  const { materialId } = req.params;

  try {
    const material = await getArmorMaterialById(materialId);
    if (material) {
      res.send(material);
    } else {
      next({
        name: "NotFound",
        message: `No material found for ${materialId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});
module.exports = apiRouter;
