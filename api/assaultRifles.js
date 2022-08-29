const express = require("express");
const apiRouter = express.Router();
const { getAllAssaultRifles, getAssaultRifleById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const rifles = await getAllAssaultRifles();
    res.send(rifles);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:assaultRifleId", async (req, res, next) => {
  const { assaultRifleId } = req.params;

  try {
    const rifle = await getAssaultRifleById(assaultRifleId);
    if (rifle) {
      res.send(rifle);
    } else {
      next({
        name: "AssaultRifleNotFound",
        message: `No assault rifle found for ${assaultRifleId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});
module.exports = apiRouter;
