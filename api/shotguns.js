const express = require("express");
const apiRouter = express.Router();
const { getAllShotguns, getShotgunById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const shotguns = await getAllShotguns();
    res.send(shotguns);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:shotgunId", async (req, res, next) => {
  const { shotgunId } = req.params;

  try {
    const shotgun = await getShotgunById(shotgunId);
    if (shotgun) {
      res.send(shotgun);
    } else {
      next({
        name: "ShotgunNotFound",
        message: `No shotgun found for ${shotgunId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
