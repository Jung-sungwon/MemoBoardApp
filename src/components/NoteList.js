import React from "react";
import Note from "./Note";
import Addnote from "./Addnote";

function NoteList({ addMemo, memos, deleteMemo }) {
  return (
    <div className="memo-list">
      {memos.map((memo) => (
        <Note
          deleteMemo={deleteMemo}
          id={memo.id}
          text={memo.text}
          date={memo.date}
        />
      ))}

      <Addnote addMemo={addMemo} />
    </div>
  );
}

export default NoteList;
