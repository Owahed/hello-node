const express = require("express");
const { getAllTest, createTest } = require("../controller/testController");

const router = express.Router();

router.route("/").get(getAllTest).post(createTest);

module.exports = router;
