const router = require("express").Router();
const ArticlesRouter = require("./articles");

router.use(ArticlesRouter);

module.exports = router;
