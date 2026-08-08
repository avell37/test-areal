const router = require("express").Router();
const ArticlesRouter = require("./articles");
const CommentsRouter = require("./comments");

router.use(ArticlesRouter);
router.use(CommentsRouter);

module.exports = router;
