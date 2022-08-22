import Button from "@mui/material/Button";
import React from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function Header({ mode }) {
  return (
    <div className="header">
      <h1>
        게시판
        <ContentPasteIcon />
      </h1>
      <Button onClick={() => mode((m) => !m)}>
        <Brightness4Icon />
      </Button>
    </div>
  );
}

export default Header;
