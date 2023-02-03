import room from "../images/room.jpg";
import React from "react";
import "./scss/ConversationPart.scss";
import HealthBar from "../overlay/HealthBar";
import DeckDialog from "../overlay/DeckDialog";
import { Button } from "@mui/material";

function ConversationPart(props) {
  const { state, setState, setPage, deck, deckDialogOpen, setDeckDialogOpen } =
    props;
  return (
    <div className="ConversationPart">
      <div className="ViewDialog">
        {deckDialogOpen && <DeckDialog setDeckDialogOpen={setDeckDialogOpen} />}
      </div>
      <img src={room} alt="title" className="img" />
      <HealthBar state={state} setState={setState} />
      <div className="CardButton">
        <Button
          onClick={() => {
            setDeckDialogOpen(true);
          }}
        >
          card
        </Button>
      </div>
    </div>
  );
}

export default ConversationPart;
