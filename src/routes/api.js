const express = require("express");
const router = express.Router()
const apiController = require("../controller/apiController")

router.get("/", apiController.index)
router.post("/new", apiController.create)

module.exports = router;