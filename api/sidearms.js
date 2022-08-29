const express = require("express");
const apiRouter = express.Router();
const { getAllSidearms, getSidearmById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const side = await getAllSidearms();
    res.send(side);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:sidearmId", async (req, res, next) => {
  const { sidearmId } = req.params;

  try {
    const sidearm = await getSidearmById(sidearmId);
    if (sidearm) {
      res.send(sidearm);
    } else {
      next({
        name: "SidearmNotFound",
        message: `No sidearm found for ${sidearmId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
