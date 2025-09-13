import {client} from "../services/postgres.ts";

export const getNotesList = async () => {
    const result = await client.query("SELECT * FROM notes");
    console.log(result.rows);
}

