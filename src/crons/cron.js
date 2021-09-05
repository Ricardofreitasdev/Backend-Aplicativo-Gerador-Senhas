var cron = require('node-cron');
const User = require("../models/user")

cron.schedule('*/5 * * * *', async () => {
  await User.destroy({
    where: {}
  });
  console.log("Destroy!");
});

