const express = require("express");
const apiRouter = express.Router();
const { getAllDeployables, getDeployableById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const deploy = await getAllDeployables();
    res.send(deploy);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:deployableId", async (req, res, next) => {
  const { deployableId } = req.params;

  try {
    const deploy = await getDeployableById(deployableId);
    if (deploy) {
      res.send(deploy);
    } else {
      next({
        name: "DeployableNotFound",
        message: `Deployable not found for ${deployableId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
