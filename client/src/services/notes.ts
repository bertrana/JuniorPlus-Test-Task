import type { INote } from "../types/notes";
import { http } from "./axios.ts";

export const getAllNotes = async () => {
    try {
        const result = await http.get('/notes/all');
        console.log("getAllNotes result", result);
        if (result.status === 200) {
            return result.data;
        }
    } catch (error) {
        console.error(error);
    }
}

export const getNote = async (id: string) => http.get(`/notes/${id}`);

export const setNewNote = (note: Partial<INote>) => http.post(`/notes/create`, { note }, {
    params: note
});