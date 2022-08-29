const express = require("express");
const apiRouter = express.Router();
const { getAllGrenades, getGrenadeById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const grenades = await getAllGrenades();
    res.send(grenades);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:grenadeId", async (req, res, next) => {
  const { grenadeId } = req.params;

  try {
    const grenade = await getGrenadeById(grenadeId);
    if (grenade) {
      res.send(grenade);
    } else {
      next({
        name: "GrenadeNotFound",
        message: `No grenade found for ${grenadeId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});
module.exports = apiRouter;
