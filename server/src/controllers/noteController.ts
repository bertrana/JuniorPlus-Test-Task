import { client } from "../services/postgres.ts";

export const getNotesList = async () => {
    return await client.query("SELECT * FROM notes");
}

export const getNotesById = async (id: string) => {
    return await client.query({
        text: "SELECT $1 FROM notes",
        values: [id],
    });
}

export const setNewNote = async (data) => {
    return await client.query({
        text: 'INSERT INTO notes (title, content) VALUES($1, $2)',
        values: [data.title, data.content],
    })
}
