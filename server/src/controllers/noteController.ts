import {client} from "../services/postgres.ts";

export const getNotesList = async () => {
    await client.query("SELECT * FROM notes");
}

const initNotes = async () => {
    try {
        const result = await client.query({
            text: "CREATE TABLE IF NOT EXISTS notes ($1, $2, $3);",
            values: [
                "id SERIAL PRIMARY KEY",
                "title VARCHAR(255) UNIQUE",
                "content TEXT"
            ]
        })
        console.log("getNotesList result", result);
    } catch (error) {
        console.error("getNotesList error", error);
    }
}

await initNotes();
