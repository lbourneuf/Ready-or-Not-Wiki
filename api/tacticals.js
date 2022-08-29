const express = require("express");
const apiRouter = express.Router();
const { getAllTacticals, getTacticalById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const tacticals = await getAllTacticals();
    res.send(tacticals);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:tacticalId", async (req, res, next) => {
  const { tacticalId } = req.params;

  try {
    const tactical = await getTacticalById(tacticalId);
    if (tactical) {
      res.send(tactical);
    } else {
      next({
        name: "TacticalNotFound",
        message: `No tactical found for ${tacticalId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
