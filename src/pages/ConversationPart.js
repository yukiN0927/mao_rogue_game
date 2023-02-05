import room from "../images/room.jpg";
import React from "react";
import "./scss/ConversationPart.scss";
import HealthBar from "../overlay/HealthBar";
import DeckDialog from "../overlay/DeckDialog";
import { Button } from "@mui/material";
import { prologue } from "../state/prologue";
import Choice from "../overlay/Choice";
import { choiceItem } from "../state/ChoiceItem";

function ConversationPart(props) {
  const { state, setState, setPage, deck, deckDialogOpen, setDeckDialogOpen } =
    props;
  const [serif, setSerif] = React.useState(0);
  const [choiceOpen, setChoiceOpen] = React.useState({
    open: false,
    isCoice: false,
  });
  return (
    <div className="ConversationPart">
      <div className="Charactor">
        <img src={prologue[serif].img} alt="title" />
      </div>

      {deckDialogOpen ? (
        <div className="ViewDialog">
          <DeckDialog setDeckDialogOpen={setDeckDialogOpen} />
        </div>
      ) : (
        <div
          className="SpeechArea"
          onClick={() => {
            if (serif < 4) {
              setSerif(serif + 1);
            }
            if (serif === 3) {
              setChoiceOpen({ open: true, isCoice: false });
            }
          }}
        >
          <p style={{ fontSize: 30, color: "white", margin: 20 }}>
            {prologue[serif].serif}
          </p>
        </div>
      )}

      <img src={room} alt="title" />

      <HealthBar state={state} setState={setState} />
      <div className="CardButton">
        {!choiceOpen.open && (
          <Button
            onClick={() => {
              setDeckDialogOpen(true);
            }}
          >
            card
          </Button>
        )}
      </div>
      {choiceOpen.open && (
        <Choice
          choiceItem={choiceItem}
          state={state}
          setState={setState}
          setChoiceOpen={setChoiceOpen}
        />
      )}
      {choiceOpen.isCoice && (
        <div
          style={{
            position: "absolute",
            top: "500px",
            left: "850px",
            minWidth: "500px",
          }}
        >
          <Button
            fullWidth
            style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
            onClick={() => {
              setPage("");
            }}
          >
            <p style={{ fontSize: 18, color: "white" }}>Next</p>
          </Button>
        </div>
      )}
    </div>
  );
}

export default ConversationPart;
