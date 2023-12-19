import axios from "axios";
import { useEffect } from "react";

import { Note } from "./types";
import { baseUrl } from "./noteService";
import { isNoteArray } from "./typeCheck";

export const useNotes = (
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
) => {
  useEffect(() => {
    const initializeNotes = async () => {
      const response = await axios.get(baseUrl);
      const notes = response.data;
      if (notes && isNoteArray(notes)) {
        setNotes(notes);
      }
    };
    initializeNotes();
  }, [setNotes]);
};
