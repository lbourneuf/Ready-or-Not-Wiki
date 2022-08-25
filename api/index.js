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

module.exports = apiRouter;
