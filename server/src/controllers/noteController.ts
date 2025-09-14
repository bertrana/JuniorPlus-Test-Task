import { client } from "../services/postgres.ts";

export const getNotesList = async () => {
    const notesList = await client.query("SELECT * FROM notes");

    return notesList.rows;
}

export const getNotesById = async (id: string) => await client.query({
    text: "SELECT * FROM notes WHERE id = $1",
    values: [id],
})

export const setNewNote = async (data) => await client.query({
    text: 'INSERT INTO notes (title, content) VALUES($1, $2)',
    values: [data.title, data.content],
})

export const setEditedNote = async (data) => await client.query({
    text: 'UPDATE notes SET (title, content) = ($1, $2) WHERE id = $3;',
    values: [data.title, data.content, data.id],
})

export const deleteNote = async (id: string) => await client.query({
    text: 'DELETE FROM notes WHERE id = $1',
    values: [id],
})