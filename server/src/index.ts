import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import { mountRoutes } from "./routes/index.ts";
import { initDatabaseConnection } from "./services/postgres.ts";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
    res.status(200).json({ status: "ok", text: "Server running" });
});

mountRoutes(app);


app.listen(4000, () => {
    console.log("Backend running at http://localhost:4000");
});

await initDatabaseConnection();

