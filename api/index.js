const apiRouter = require("express").Router();
const cors = require("cors");
apiRouter.use(cors());
apiRouter.get("/", (req, res, next) => {
  res.send({
    message: "API is under construction!",
  });
});

apiRouter.get("/health", (req, res, next) => {
  res.send({
    healthy: true,
  });
});

const mapsRouter = require("./maps");
apiRouter.use("/maps", mapsRouter);

const missionsRouter = require("./missions");
apiRouter.use("/missions", missionsRouter);

const assaultRouter = require("./assaultRifles");
apiRouter.use("/assaultrifles", assaultRouter);

const smgRouter = require("./submachineGuns");
apiRouter.use("/submachineguns", smgRouter);

const shotgunRouter = require("./shotguns");
apiRouter.use("/shotguns", shotgunRouter);

const launchersRouter = require("./launchers");
apiRouter.use("/launchers", launchersRouter);

const lessLethalsRouter = require("./lessLethals");
apiRouter.use("/lesslethals", lessLethalsRouter);

const sidearmsRouter = require("./sidearms");
apiRouter.use("/sidearms", sidearmsRouter);

const ammoTypesRouter = require("./ammoTypes");
apiRouter.use("/ammotypes", ammoTypesRouter);

const armorRouter = require("./armor");
apiRouter.use("/armor", armorRouter);

const tacticalsRouter = require("./tacticals");
apiRouter.use("/tacticals", tacticalsRouter);

const grenadesRouter = require("./grenades");
apiRouter.use("/grenades", grenadesRouter);

const deployablesRouter = require("./deployables");
apiRouter.use("/deployables", deployablesRouter);

const headwearRouter = require("./headwear");
apiRouter.use("/headwear", headwearRouter);

const materialRouter = require("./armorMaterial");
apiRouter.use("/armormaterial", materialRouter);

apiRouter.use("*", (req, res, next) => {
  res.status(404).send({ message: "Page not found" });
});

module.exports = apiRouter;
