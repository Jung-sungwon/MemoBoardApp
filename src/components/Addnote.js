import React, { useState } from "react";
import Button from "@mui/material/Button";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

function Addnote({ addMemo }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 500;

  const handleChange = (e) => {
    if (characterLimit - noteText.length > 0) {
      setNoteText(e.target.value);
    }
  };

  const memoHandler = () => {
    if (noteText.trim().length > 0) {
      addMemo(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="메모합시다...!"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="btn-footer">
        <small>{characterLimit - noteText.length}</small>
        <Button onClick={memoHandler}>
          <ArrowDropUpIcon />
          up
        </Button>
      </div>
    </div>
  );
}

export default Addnote;
