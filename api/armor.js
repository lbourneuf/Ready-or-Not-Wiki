const express = require("express");
const apiRouter = express.Router();
const { getAllArmor, getArmorById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const armor = await getAllArmor();
    res.send(armor);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:armorId", async (req, res, next) => {
  const { armorId } = req.params;

  try {
    const armor = await getArmorById(armorId);
    if (armor) {
      res.send(armor);
    } else {
      next({ name: "ArmorNotFound", message: `No armor found for ${armorId}` });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
