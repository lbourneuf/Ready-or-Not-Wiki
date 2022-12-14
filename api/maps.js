const express = require("express");
const apiRouter = express.Router();
const { getAllMaps, getMapById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const maps = await getAllMaps();
    res.send(maps);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:mapId", async (req, res, next) => {
  const { mapId } = req.params;

  try {
    const map = await getMapById(mapId);
    if (map) {
      res.send(map);
    } else {
      next({ name: "NotFound", message: `No map found for ${mapId}` });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
