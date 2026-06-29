const express = require("express");
const router = express.Router();

const { analyzeTask } = require("../controllers/taskController");

router.post("/analyze", analyzeTask);

module.exports = router;
