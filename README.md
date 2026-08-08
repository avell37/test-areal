# Articles & Comments

Тестовое задание от Ареал: CRUD статей и комментариев + аналитика по периоду.

- **Backend:** Node.js, Express, Sequelize, PostgreSQL
- **Frontend:** Vue 3, Vue Router, Vuex, Axios, Vuetify

## Структура

```
backend/   — API
frontend/  — клиент
```

## Требования

- Node.js 18+
- PostgreSQL

## Backend

### 1. База данных

Создать БД

### 2. Настройка

```bash
cd backend
cp .env.example .env
```

В `.env` нужно указать свои данные подключения к Postgres:

```
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=articles
DB_USER=postgres
DB_PASSWORD=your_password
```

### 3. Установка и запуск

```bash
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

API будет на `http://localhost:5000`.

### Основные эндпоинты

**Статьи**

- `POST /article/`
- `GET /articles/`
- `GET /article/:id`
- `PATCH /article/:id`
- `DELETE /article/:id`

**Комментарии**

- `POST /article/:id/comment/`
- `GET /article/:id/comments/`
- `GET /article/:id/comment/:commentId`
- `PATCH /article/:id/comment/:commentId`
- `DELETE /article/:id/comment/:commentId`

**Аналитика**

- `GET /analytic/comments/?dateFrom=...&dateTo=...`

Даты можно передавать в формате `YYYY-MM-DD` или ISO timestamp.

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Приложение откроется на `http://localhost:5173` (или другом порту, который покажет Vite).

Запросы идут на `http://localhost:5000` — backend должен быть запущен.

### Страницы

- `/articles` — список статей
- `/articles/new` — создание
- `/articles/:id` — просмотр + комментарии
- `/articles/:id/edit` — редактирование
- `/analytics` — комментарии за период с группировкой по статьям

## Примечания

- Перед первым запуском frontend нужны миграции на backend.
- Сиды добавляют пару демо-статей и комментариев.
- Body для API — `application/json`.
