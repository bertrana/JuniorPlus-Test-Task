import { http } from "./axios.ts";

export const getAllNotes = async () => {
    return await http.get('/notes/all');
}

export const getNote = async (id: string) => http.get(`/notes/${id}`);