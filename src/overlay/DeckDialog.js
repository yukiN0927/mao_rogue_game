import * as React from "react";
import "./scss/DeckDialog.scss";
import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

function DeckDialog(props) {
  const { setDeckDialogOpen, deck, companion } = props;
  return (
    <div className="Dialog">
      <div style={{ position: "absolute", left: "10px" }}>
        {companion.map((chara) => {
          return (
            <Tooltip title={chara.effect} placement="top">
              <img
                src={chara.img}
                alt="chara"
                style={{ margin: "10px", height: "70px" }}
              />
            </Tooltip>
          );
        })}
      </div>
      <div style={{ position: "absolute", right: "10px" }}>
        <IconButton
          aria-label="close"
          style={{ minHeight: "80px", minWidth: "80px" }}
          onClick={() => {
            setDeckDialogOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
      <div style={{ marginTop: "80px", maxHeight: "400px", overflow: "auto" }}>
        {deck.map((card) => {
          return (
            <Tooltip title={card.description} placement="top">
              <img src={card.img} alt="card" style={{ margin: "10px" }} />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default DeckDialog;
