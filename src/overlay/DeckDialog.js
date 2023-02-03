import * as React from "react";
import { defaultDeck } from "../state/card";
import "./scss/DeckDialog.scss";
import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

function DeckDialog(props) {
  const { setDeckDialogOpen } = props;
  return (
    <div className="Dialog">
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
        {defaultDeck.map((deck) => {
          return (
            <Tooltip title={deck.description} placement="top">
              <img
                src={deck.img}
                alt="card"
                style={{ margin: "10px" }}
                onmouseover=""
              />
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

export default DeckDialog;
