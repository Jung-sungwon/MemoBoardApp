import React from "react";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Note({ id, text, date, deleteMemo }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <Button onClick={() => deleteMemo(id)}>
          <DeleteOutlineIcon style={{ color: "red" }} />
        </Button>
      </div>
    </div>
  );
}

export default Note;
