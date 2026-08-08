const router = require("express").Router();
const CommentsController = require("../controllers/comments");

router.post("/article/:id/comment/", CommentsController.createComment);
router.get(
    "/article/:id/comments/",
    CommentsController.getAllCommentsByArticle,
);
router.get(
    "/article/:id/comment/:commentId/",
    CommentsController.getArticleCommentById,
);
router.patch(
    "/article/:id/comment/:commentId/",
    CommentsController.updateComment,
);
router.delete(
    "/article/:id/comment/:commentId/",
    CommentsController.deleteComment,
);

module.exports = router;
