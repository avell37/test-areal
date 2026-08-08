const router = require("express").Router();
const AnalyticsController = require("../controllers/analytics");

router.get("/analytic/comments/", AnalyticsController.getCommentsByDate);

module.exports = router;
