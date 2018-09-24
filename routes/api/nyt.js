const router = require("express").Router();
const nytController = require("../../controllers/nytController");

// Matches with "/api/nyt"
router
  .route("/")
  .get(nytController.findAll);

router
  .route("/:id")
  .get(nytController.findSelected); 

module.exports = router;
