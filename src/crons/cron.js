var cron = require('node-cron');
const Profile = require("../models/profile")


cron.schedule('*/30 * * * *', async () => {
  await Profile.destroy({
    where: {}
  });
  console.log("Destroy!");
});

