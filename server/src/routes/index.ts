import express from "express";
import { getNotesById, getNotesList, setNote } from "../controllers/noteController.ts";
import { sendErrorResponse, sendSuccessResponse } from "../controllers/base.ts";

const notesRouter = express.Router();

/**
 * Получение списка всех существующих заметок
 */
notesRouter.get("/all", async function(_request, response){
    try {
        const result = await getNotesList();
        sendSuccessResponse(response, result);
    } catch (error) {
        sendErrorResponse(response, 500, error);
    }
});

/**
 * Получение конкретной заметки по её id
 */
notesRouter.get("/:id", async function(request, response){
    try {
        const result = await getNotesById(request.params.id);
        if (!result.rows[0]) {
            sendErrorResponse(response, 404, {message: "Note not found"});
        }
            sendSuccessResponse(response, result.rows[0]);
    } catch (error) {
        sendErrorResponse(response, 500, error);
    }
});

notesRouter.post("/create", function(request, response){
    console.log(request.body);
    const result = setNote(request.body);
    console.log(result);

    sendSuccessResponse(response);
});

notesRouter.put("/edit:id", function(request, response){
    response.send(`Редактирование заметки с id ${request.params.id}`);
});

export const mountRoutes = (app: any) => {
    app.use("/notes", notesRouter);
}