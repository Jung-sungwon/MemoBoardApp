import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import NoteList from "./components/NoteList";

function App() {
  const [memos, setMomos] = useState([
    {
      id: nanoid(),
      text: "기본 메모1",
      date: "22.8.18.",
    },
    {
      id: nanoid(),
      text: "기본 메모2",
      date: "22.8.18.",
    },
    {
      id: nanoid(),
      text: "기본 메모3",
      date: "22.8.18.",
    },
  ]);

  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  const addMemo = (text) => {
    const date = new Date();
    const newMemo = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newMemos = [...memos, newMemo];
    setMomos(newMemos);
  };

  const deleteMemo = (id) => {
    const newMemos = memos.filter((memo) => memo.id !== id);
    setMomos(newMemos);
  };

  return (
    <div className={`container ${darkMode && "dark-mode"}`}>
      <div>
        <Header mode={setDarkMode} />
        <Search searchInfo={setSearchText} />
        <NoteList
          addMemo={addMemo}
          memos={memos.filter((memo) =>
            memo.text.toLocaleLowerCase().includes(searchText)
          )}
          deleteMemo={deleteMemo}
        />
      </div>
    </div>
  );
}

export default App;
