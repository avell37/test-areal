const { Article, Comment } = require("../../models");

class CommentsController {
    async createComment(req, res) {
        try {
            const { id } = req.params;
            const { text } = req.body;

            if (!text) {
                return res.status(400).json({
                    message: "Необходимо указать text",
                });
            }

            const article = await Article.findByPk(id);

            if (!article) {
                return res.status(404).json({ message: "Статья не найдена" });
            }

            const comment = await Comment.create({ text, articleId: id });

            return res.status(201).json(comment);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось создать комментарий",
                error: err.message,
            });
        }
    }

    async getAllCommentsByArticle(req, res) {
        try {
            const { id } = req.params;

            const article = await Article.findByPk(id);

            if (!article) {
                return res.status(404).json({ message: "Статья не найдена" });
            }

            const comments = await Comment.findAll({
                where: { articleId: id },
            });

            return res.status(200).json(comments);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось получить список комментариев",
                error: err.message,
            });
        }
    }

    async getArticleCommentById(req, res) {
        try {
            const { id, commentId } = req.params;

            const article = await Article.findByPk(id);

            if (!article) {
                return res.status(404).json({ message: "Статья не найдена" });
            }

            const comment = await Comment.findByPk(commentId);

            if (!comment) {
                return res
                    .status(404)
                    .json({ message: "Комментарий не найден" });
            }

            if (comment.articleId !== Number(id)) {
                return res.status(404).json({
                    message: "Комментарий не принадлежит этой статье",
                });
            }

            return res.status(200).json(comment);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось получить комментарий",
                error: err.message,
            });
        }
    }

    async updateComment(req, res) {
        try {
            const { id, commentId } = req.params;
            const { text } = req.body;

            if (text === undefined) {
                return res.status(400).json({
                    message: "Укажите поле для обновления",
                });
            }

            const article = await Article.findByPk(id);

            if (!article) {
                return res.status(404).json({ message: "Статья не найдена" });
            }

            const [updatedCount] = await Comment.update(
                { text },
                {
                    where: { id: commentId, articleId: id },
                },
            );

            if (updatedCount === 0) {
                return res.status(404).json({
                    message: "Комментарий не найден",
                });
            }

            const updated = await Comment.findByPk(commentId);

            return res.status(200).json(updated);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось обновить комментарий",
                error: err.message,
            });
        }
    }

    async deleteComment(req, res) {
        try {
            const { id, commentId } = req.params;

            const article = await Article.findByPk(id);

            if (!article) {
                return res.status(404).json({ message: "Статья не найдена" });
            }

            const deletedCount = await Comment.destroy({
                where: { id: commentId, articleId: id },
            });

            if (deletedCount === 0) {
                return res.status(404).json({
                    message: "Комментарий не найден",
                });
            }

            return res.status(200).json({
                message: "Комментарий успешно удален",
            });
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось удалить комментарий",
                error: err.message,
            });
        }
    }
}

module.exports = new CommentsController();
