(async () => {
  const express = require("express");
  const apiRouter = require("./routes/api");
  const cors = require("cors");
  const app = express();
  const database = require("./database/db");
  const User = require("./models/user");
  const Log = require("./models/log");

  const cron = require("./crons/cron");
//   await database.sync()

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/web_api', apiRouter);

  app.listen(3333, () => {
    console.log("server running");
  });

})();
