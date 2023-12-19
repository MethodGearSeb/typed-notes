import axios, { AxiosResponse } from "axios";
import { NewNote, Note } from "./types";

export const baseUrl = "http://localhost:3001/notes";

const getData = <T>(response: AxiosResponse<T>): T => response.data;

export const getAllNotes = () => {
  return axios.get<Note[]>(baseUrl).then(getData);
};

export const createNote = (note: NewNote) => {
  return axios.post<Note>(baseUrl, note).then(getData);
};
