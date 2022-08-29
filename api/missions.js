const express = require("express");
const apiRouter = express.Router();
const { getAllMissions, getMissionById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const missions = await getAllMissions();
    res.send(missions);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:missionId", async (req, res, next) => {
  const { missionId } = req.params;

  try {
    const mission = await getMissionById(missionId);
    if (mission) {
      res.send(mission);
    } else {
      next({ name: "NotFound", message: `No map found for ${mapId}` });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
