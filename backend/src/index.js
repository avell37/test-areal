require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("../models");
const router = require("./routes/routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "API запущено" });
});

app.use(router);

async function start() {
    try {
        await db.sequelize.authenticate();
        console.log("Подключение к БД успешно");

        app.listen(PORT, () => {
            console.log(`Сервер запущен: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Не удалось подключиться к БД:", error.message);
        process.exit(1);
    }
}

start();
