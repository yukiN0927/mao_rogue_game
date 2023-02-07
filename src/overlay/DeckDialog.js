import * as React from "react";
import "./scss/DeckDialog.scss";
import { IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

function DeckDialog(props) {
  const { setDeckDialogOpen, deck } = props;
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
