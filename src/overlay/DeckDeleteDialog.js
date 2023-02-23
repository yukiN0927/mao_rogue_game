import * as React from "react";
import "./scss/DeckDialog.scss";
import { Tooltip } from "@mui/material";

function DeckDeleteDialog(props) {
  const { setDeckDeleteDialog, deck, setDeck, setDeckDeleteButtonOpen } = props;
  const deleteCard = (index) => {
    var tmpDeck = Array.from(deck);
    tmpDeck.splice(index, 1);
    setDeck(tmpDeck);
    setDeckDeleteDialog(false);
    setDeckDeleteButtonOpen(false);
  };
  return (
    <div className="Dialog">
      <div style={{ marginTop: "80px", maxHeight: "400px", overflow: "auto" }}>
        {deck.map((card, index) => {
          return (
            <Tooltip title={card.description} placement="top">
              <img
                src={card.img}
                alt="card"
                style={{ margin: "10px" }}
                onClick={() => {
                  deleteCard(index);
                }}
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default DeckDeleteDialog;
