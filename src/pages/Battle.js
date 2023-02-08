import room from "../images/room.jpg";
import React from "react";
import "./scss/Battle.scss";
import HealthBar from "../overlay/HealthBar";
import { moneyView } from "../overlay/StateView";

function Battle(props) {
  const { state } = props;
  return (
    <div>
      <div className="Battle">
        <img src={room} alt="title" className="img" />
        <HealthBar state={state} />
        {moneyView(state.money)}
      </div>
    </div>
  );
}

export default Battle;
