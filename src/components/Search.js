import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({ searchInfo }) {
  const searchChange = (e) => {
    searchInfo(e.target.value);
  };

  return (
    <div className="searchPa">
      <div className="search">
        <SearchIcon />
        <input type="text" onChange={searchChange} />
      </div>
    </div>
  );
}

export default Search;
