const express = require("express");
const apiRouter = express.Router();
const { getAllLessLethals, getLessLethalById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const less = await getAllLessLethals();
    res.send(less);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:lessLethalId", async (req, res, next) => {
  const { lessLethalId } = req.params;

  try {
    const less = await getLessLethalById(lessLethalId);
    if (less) {
      res.send(less);
    } else {
      next({
        name: "LessLethalNotFound",
        message: `No less lethal found for ${lessLethalId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});
module.exports = apiRouter;
