import { Note } from "./types";

const isNote = (object: unknown): object is Note => {
  if (
    object &&
    typeof object === "object" &&
    "id" in object &&
    "content" in object &&
    !isNaN(Number(object.id)) &&
    (typeof object.content === "string" || object.content instanceof String)
  )
    return true;
  else return false;
};

export const isNoteArray = (object: unknown): object is Note[] => {
  if (
    object &&
    typeof object === "object" &&
    Array.isArray(object) &&
    object.reduce((notesOnly, note) => notesOnly && isNote(note), true)
  )
    return true;
  else return false;
};
