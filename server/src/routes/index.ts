import express from "express";
import {deleteNote, getNotesById, getNotesList, setEditedNote, setNewNote} from "../controllers/noteController.ts";
import { sendErrorResponse, sendSuccessResponse } from "../helpers/base.ts";

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
notesRouter.get("/", async function(request, response){
    try {
        const result = await getNotesById(request.query.id);
        if (!result.rows[0]) {
            sendErrorResponse(response, 404, {message: "Note not found"});
            return
        }
            sendSuccessResponse(response, result.rows[0]);
    } catch (error) {
        sendErrorResponse(response, 500, error);
    }
});

notesRouter.post("/create", async function(request, response){
    try {
        await setNewNote(request.body);
        sendSuccessResponse(response);
    } catch (error) {
        sendErrorResponse(response, 500, error);
    }
});

notesRouter.put("/edit", async function(request, response){
    try {
        await setEditedNote(request.body);
        sendSuccessResponse(response);
    } catch (error) {
        sendErrorResponse(response, 500, error);
    }
});

notesRouter.delete("/delete", async function(request, response){
    try {
        await deleteNote(request.query.id);
        sendSuccessResponse(response);
    } catch (error) {
        sendErrorResponse(response, 500, error);
    }
});

export const mountRoutes = (app: any) => {
    app.use("/notes", notesRouter);
}