const express = require("express");
const apiRouter = express.Router();
const { getAllMaps } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const maps = await getAllMaps();
    res.send(maps);
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
