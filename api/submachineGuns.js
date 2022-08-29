const express = require("express");
const apiRouter = express.Router();
const { getAllSubmachineGuns, getSubmachineGunById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const smgs = await getAllSubmachineGuns();
    res.send(smgs);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:smgId", async (req, res, next) => {
  const { smgId } = req.params;

  try {
    const smg = await getSubmachineGunById(smgId);
    if (smg) {
      res.send(smg);
    } else {
      next({ name: "SmgNotFound", message: `No smg found for ${smgId}` });
    }
  } catch (error) {
    next(error);
  }
});
module.exports = apiRouter;
