import express from "express";
import {getNotesById, getNotesList, setNote} from "../controllers/noteController.ts";

const notesRouter = express.Router();

/**
 * Получение списка всех существующих заметок
 */
notesRouter.get("/all", async function(_request, response){
    const result = await getNotesList();

    response.send({
        status: "success",
        data: result.rows?.length ? result.rows : [],
    });
});

/**
 * Получение конкретной заметки по её id
 */
notesRouter.get("/:id", async function(request, response){
    const result = await getNotesById(request.params.id);

    if (!result.rows[0]) {
        response.send({
            status: "error",
        })
        return;
    }

    response.send({
        status: "success",
        data: result.rows[0]
    });});

notesRouter.post("/create", function(request, response){
    console.log(request.body);
    const result = setNote(request.body);
    console.log(result);

    response.send({
        status: "success",
    });
});
notesRouter.put("/edit:id", function(request, response){
    response.send(`Редактирование заметки с id ${request.params.id}`);
});

export const mountRoutes = (app: any) => {
    app.use("/notes", notesRouter);
}