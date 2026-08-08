const { Op } = require("sequelize");
const { Comment, Article } = require("../../models");

class AnalyticsController {
    async getCommentsByDate(req, res) {
        try {
            const { dateFrom, dateTo } = req.query;

            if (!dateFrom || !dateTo) {
                return res
                    .status(400)
                    .json({ message: "Укажите dateFrom и dateTo" });
            }

            const comments = await Comment.findAll({
                where: {
                    createdAt: {
                        [Op.between]: [new Date(dateFrom), new Date(dateTo)],
                    },
                },
                include: [
                    {
                        model: Article,
                        as: "article",
                    },
                ],
                order: [["createdAt", "ASC"]],
            });

            const grouped = Object.values(
                comments.reduce((acc, com) => {
                    const articleId = com.articleId;

                    if (!acc[articleId]) {
                        acc[articleId] = {
                            articleId,
                            articleTitle: com.article.title,
                            comments: [],
                        };
                    }

                    acc[articleId].comments.push({
                        id: com.id,
                        text: com.text,
                        createdAt: com.createdAt,
                        updatedAt: com.updatedAt,
                    });

                    return acc;
                }, {}),
            );

            return res.status(200).json(grouped);
        } catch (err) {
            return res.status(500).json({
                message: "Не удалось получить аналитику",
                error: err.message,
            });
        }
    }
}

module.exports = new AnalyticsController();
