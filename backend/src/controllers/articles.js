const { Article } = require("../../models");

class ArticlesController {
    async createArticle(req, res) {
        try {
            const { title, content } = req.body;

            if (!title || !content) {
                return res.status(400).json({
                    message: "Необходимо указать title и content",
                });
            }

            const article = await Article.create({ title, content });

            return res.status(201).json(article);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось создать статью",
                error: err.message,
            });
        }
    }

    async getAllArticles(req, res) {
        try {
            const articles = await Article.findAll();

            return res.status(200).json(articles);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось получить список статей",
                error: err.message,
            });
        }
    }

    async getArticleById(req, res) {
        try {
            const { id } = req.params;
            const article = await Article.findByPk(id);

            if (!article) {
                return res.status(404).json({
                    message: "Статья не найдена",
                });
            }

            return res.status(200).json(article);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось получить статью",
                error: err.message,
            });
        }
    }

    async updateArticle(req, res) {
        try {
            const { id } = req.params;
            const { title, content } = req.body;

            if (title === undefined && content === undefined) {
                return res.status(400).json({
                    message:
                        "Укажите хотя бы одно поле для обновления: title или content",
                });
            }

            const payload = {};
            if (title !== undefined) payload.title = title;
            if (content !== undefined) payload.content = content;

            const [updatedCount] = await Article.update(payload, {
                where: { id },
            });

            if (updatedCount === 0) {
                return res.status(404).json({
                    message: "Статья не найдена",
                });
            }

            const updated = await Article.findByPk(id);

            return res.status(200).json(updated);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось обновить статью",
                error: err.message,
            });
        }
    }

    async deleteArticle(req, res) {
        try {
            const { id } = req.params;
            const deletedCount = await Article.destroy({ where: { id } });

            if (deletedCount === 0) {
                return res.status(404).json({
                    message: "Статья не найдена",
                });
            }

            return res.status(200).json({
                message: "Статья успешно удалена",
            });
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось удалить статью",
                error: err.message,
            });
        }
    }
}

module.exports = new ArticlesController();
