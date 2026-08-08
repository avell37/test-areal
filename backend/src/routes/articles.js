const router = require("express").Router();
const ArticlesController = require("../controllers/articles");

router.post("/article/", ArticlesController.createArticle);
router.get("/articles/", ArticlesController.getAllArticles);
router.get("/article/:id", ArticlesController.getArticleById);
router.patch("/article/:id", ArticlesController.updateArticle);
router.delete("/article/:id", ArticlesController.deleteArticle);

module.exports = router;
