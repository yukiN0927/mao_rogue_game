import { Button } from "@mui/material";
import * as React from "react";
import "./scss/Choice.scss";

function Choice(props) {
  const { choiceItem, state, setState, setChoiceOpen } = props;
  return (
    <div className="ChoiceButton">
      <Button
        fullWidth
        style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
        onClick={() => {
          choiceItem[0].effect(setState, state, setChoiceOpen);
        }}
      >
        <p style={{ fontSize: 18, color: "white" }}>{choiceItem[0].text}</p>
      </Button>
      <Button
        fullWidth
        style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
        onClick={() => {
          choiceItem[1].effect(setState, state, setChoiceOpen);
        }}
      >
        <p style={{ fontSize: 18, color: "white" }}>{choiceItem[1].text}</p>
      </Button>
      <Button
        fullWidth
        style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
        onClick={() => {
          choiceItem[2].effect(setState, state, setChoiceOpen);
        }}
      >
        <p style={{ fontSize: 18, color: "white" }}>{choiceItem[2].text}</p>
      </Button>
    </div>
  );
}

export default Choice;
