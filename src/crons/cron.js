var cron = require('node-cron');
const User = require("../models/user")
const Profile = require("../models/profile")


cron.schedule('*/30 * * * *', async () => {
  await Profile.destroy({
    where: {}
  });
  console.log("Destroy!");
});

