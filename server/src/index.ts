import {initDatabaseConnection} from "./services/postgres.ts";

// import dotenv from 'dotenv';

import express from "express";

// import cors from "cors";
import {mountRoutes} from "./routes/index.ts";

const app = express();

// dotenv.config();

// app.use(cors());

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

