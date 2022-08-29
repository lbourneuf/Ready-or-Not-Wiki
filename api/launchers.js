const express = require("express");
const apiRouter = express.Router();
const { getAllLaunchers, getLauncherById } = require("../db");

apiRouter.get("/", async (req, res, next) => {
  try {
    const launcher = await getAllLaunchers();
    res.send(launcher);
  } catch (error) {
    next(error);
  }
});

apiRouter.get("/:launcherId", async (req, res, next) => {
  const { launcherId } = req.params;

  try {
    const launcher = await getLauncherById(launcherId);
    if (launcher) {
      res.send(launcher);
    } else {
      next({
        name: "LauncherNotFound",
        message: `No launcher found for ${launcherId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
