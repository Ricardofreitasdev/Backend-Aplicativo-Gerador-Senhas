var express = require("express");
var router = express.Router()
const profileController = require("../controller/profileController")

router.get("/", profileController.index)
router.post("/create", profileController.create)


module.exports = router;