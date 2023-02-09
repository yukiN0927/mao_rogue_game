import room from "../images/room.jpg";
import React from "react";
import "./scss/Event.scss";
import { Button } from "@mui/material";
// import HealthBar from "../overlay/HealthBar";
// import { moneyView } from "../overlay/StateView";

function Event() {
  // const { state } = props;
  return (
    <div>
      <div className="Event">
        <img src={room} alt="title" className="img" />
        {/* <HealthBar state={state} />
        {moneyView(state.money)} */}
        <div
          style={{
            position: "absolute",
            top: "600px",
            left: "850px",
            minWidth: "500px",
          }}
        >
          <Button
            fullWidth
            style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
            onClick={() => {}}
          >
            <p style={{ fontSize: 18, color: "white" }}>test</p>
          </Button>
        </div>
        <div
          style={{
            position: "absolute",
            top: "700px",
            left: "850px",
            minWidth: "500px",
          }}
        >
          <Button
            fullWidth
            style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
            onClick={() => {}}
          >
            <p style={{ fontSize: 18, color: "white" }}>test</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Event;
