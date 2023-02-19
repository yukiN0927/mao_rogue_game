import * as React from "react";
import "./scss/ShopDialog.scss";
import { Button, IconButton, Tooltip } from "@mui/material";
import CloseIcon from "@material-ui/icons/Close";

function ShopDialog(props) {
  const { setShopOpen } = props;

  return (
    <div className="ShopDialog">
      <div style={{ position: "absolute", right: "10px" }}>
        <IconButton
          aria-label="close"
          style={{ minHeight: "80px", minWidth: "80px" }}
          onClick={() => {
            setShopOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ShopDialog;
