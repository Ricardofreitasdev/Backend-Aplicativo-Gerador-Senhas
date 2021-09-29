(async () => {
  const express = require("express");
  const profileRoutes = require("./routes/profile");

  const cors = require("cors");
  const app = express();
  const database = require("./database/db");
  const Profile = require("./models/profile")

  const cron = require("./crons/cron");
  await database.sync()

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use('/profiles', profileRoutes);

  app.listen(3333, () => {
    console.log("server running");
  });

})();
