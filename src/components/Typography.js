import * as React from "react";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: green,
  padding: theme.spacing(2),
  fontSize: "1.2rem",
}));

export default function Typography() {
  return <Div>{"Search your favourite images with this tool"}</Div>;
}
