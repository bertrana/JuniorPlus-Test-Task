import { Client } from 'pg';

export const client = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD || '',
    host: 'db',
    port: 5432,
    database: process.env.POSTGRES_DB,
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
