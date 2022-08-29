const express = require("express");
const apiRouter = express.Router();
const { getAllHeadwear, getHeadwearById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const headwear = await getAllHeadwear();
    res.send(headwear);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:headId", async (req, res, next) => {
  const { headId } = req.params;

  try {
    const head = await getHeadwearById(headId);
    if (head) {
      res.send(head);
    } else {
      next({ name: "NotFound", message: `No map found for ${headId}` });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
