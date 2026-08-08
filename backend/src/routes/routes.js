const router = require("express").Router();
const AnalyticsRouter = require("./analytics");
const ArticlesRouter = require("./articles");
const CommentsRouter = require("./comments");

router.use(AnalyticsRouter);
router.use(ArticlesRouter);
router.use(CommentsRouter);

module.exports = router;
