const express = require("express");
const apiRouter = express.Router();
const { getAllAmmoTypes, getAmmoTypeById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const ammo = await getAllAmmoTypes();
    res.send(ammo);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:ammoTypeId", async (req, res, next) => {
  const { ammoTypeId } = req.params;

  try {
    const ammo = await getAmmoTypeById(ammoTypeId);
    if (ammo) {
      res.send(ammo);
    } else {
      next({
        name: "AmmoTypeNotFound",
        message: `No ammo type found for ${ammoTypeId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
