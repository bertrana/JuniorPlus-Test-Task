import { http } from "./axios.ts";

export const getAllNotes = async () => {
    return await http.get('/notes/all');
}