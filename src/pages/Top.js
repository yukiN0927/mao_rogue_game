import room from "../images/room.jpg";
import React from "react";
import Button from "@mui/material/Button";
import "./scss/Top.scss";

function Top(prop) {
  const { setPage } = prop;
  return (
    <div>
      <div className="Top">
        <img src={room} alt="title" className="img" />
        <div className="button">
          <Button
            size="large"
            fullWidth
            style={{ padding: "10px 200px", color: "black" }}
            onClick={() => {
              setPage("ConversationPart");
            }}
          >
            Start
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Top;
