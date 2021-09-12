(async () => {
  const express = require("express");
  const userRoutes = require("./routes/user");
  const profileRoutes = require("./routes/profile");

  const cors = require("cors");
  const app = express();
  const database = require("./database/db");
  const User = require("./models/user");
  const Profile = require("./models/profile")
  const Log = require("./models/log");

  const cron = require("./crons/cron");
  await database.sync()

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/web_api', userRoutes);
  app.use('/profiles', profileRoutes);


  app.listen(3333, () => {
    console.log("server running");
  });

})();
