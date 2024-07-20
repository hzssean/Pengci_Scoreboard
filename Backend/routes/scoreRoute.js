const express = require("express");
const {
  saveNewScore,
  getAllScores
} = require("../controllers/scoresController");
const router = express.Router();

router.route("/getScores").get(getAllScores);
router.route("/addScore").post(saveNewScore);

module.exports = router;