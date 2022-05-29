import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "../App.css";

export default function FreeSolo(props) {
  return (
    <>
      <TextField
        autoFocus
        label="Search free images"
        onChange={props.inputChangeHandler}
        value={props.searchText}
        fullWidth
      />
      <div className="search-button">
        <Button variant="contained" onClick={props.searchHandler} fullWidth>
          Search
        </Button>
      </div>
    </>
  );
}
