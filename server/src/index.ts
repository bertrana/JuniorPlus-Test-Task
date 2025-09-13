import dotenv from 'dotenv';
import express from "express";
import { mountRoutes } from "./routes/index.ts";
import { initDatabaseConnection } from "./services/postgres.ts";

dotenv.config();

const app = express();

app.get("/", (_req, res) => {
    res.json({ status: "ok", text: "Server running" });
});

app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
});

mountRoutes(app);

app.listen(4000, () => {
    console.log("Backend running at http://localhost:4000");
});

await initDatabaseConnection();

