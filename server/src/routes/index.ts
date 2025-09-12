import express from "express";
import {getNotesList} from "../controllers/noteController.ts";

// определяем Router
const notesRouter = express.Router();

notesRouter.get("/all", async function(_request, response){
    const result = await getNotesList();
    console.log("getNotesList result", result);
    response.send({
        status: "success",
        data: {
            text: 'Get all notes',
            ...(result.rows?.length ? {result} : {}),
        }
    });
});
notesRouter.get("/:id", function(request, response){
    response.send(`Получаем заметку с id ${request.params.id}`);
});
notesRouter.post("/create", function(_request, response){
    response.send("Создание заметки");
});
notesRouter.put("/edit:id", function(request, response){
    response.send(`Редактирование заметки с id ${request.params.id}`);
});

export const mountRoutes = (app: any) => {
    app.use("/notes", notesRouter);
}