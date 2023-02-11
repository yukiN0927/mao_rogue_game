import * as React from "react";
import "./scss/CardChoiceDialog.scss";
import { Button, IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

function CardChoiceDialog(props) {
  const { setCardChoiceDialogOpen, selectCard, deck, setDeck, setChoiceOpen } =
    props;
  const addCard = (card) => {
    var tmpDeck = Array.from(deck);
    tmpDeck.push(card);
    setDeck(tmpDeck);
    setCardChoiceDialogOpen(false);
    setChoiceOpen({ open: false, isCoice: true });
  };
  return (
    <div className="CardChoiceDialog">
      <div style={{ position: "absolute", right: "10px", top: 400 }}>
        <Button
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            minHeight: "80px",
            minWidth: "80px",
          }}
          onClick={() => {
            setCardChoiceDialogOpen(false);
          }}
        >
          <p style={{ fontSize: 18, color: "white" }}>カードの取得を諦める</p>
        </Button>
      </div>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Tooltip title={selectCard[0].description} placement="top">
          <img
            src={selectCard[0].img}
            alt="card"
            style={{ margin: "10px" }}
            onClick={() => {
              addCard(selectCard[0]);
            }}
          />
        </Tooltip>
        <Tooltip title={selectCard[1].description} placement="top">
          <img
            src={selectCard[1].img}
            alt="card"
            style={{ margin: "10px" }}
            onClick={() => {
              addCard(selectCard[1]);
            }}
          />
        </Tooltip>
        <Tooltip title={selectCard[2].description} placement="top">
          <img
            src={selectCard[2].img}
            alt="card"
            style={{ margin: "10px" }}
            onClick={() => {
              addCard(selectCard[2]);
            }}
          />
        </Tooltip>
      </div>
      <div style={{ marginTop: "100px" }}></div>
    </div>
  );
}

export default CardChoiceDialog;
