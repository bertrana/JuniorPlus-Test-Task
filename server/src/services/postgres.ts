import { Client } from 'pg';

export const client = new Client({
    user: 'notesUser',
    password: '1234',
    host: 'db',
    port: 5432,
    database: 'notesDatabase',
})

export const initDatabaseConnection = async () => {
    try {
        await client.connect();
        console.log('Database Connected');
    } catch (error) {
        console.log("======== catch error ==========", error);
    } finally {
        // await client.end()
    }
}
