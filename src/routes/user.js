var express = require("express");
var router = express.Router()
const userController = require("../controller/userController")

router.get("/", userController.index)
router.post("/new", userController.create)

module.exports = router;