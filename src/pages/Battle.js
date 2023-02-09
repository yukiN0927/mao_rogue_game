import room from "../images/room.jpg";
import React, { useEffect } from "react";
import "./scss/Battle.scss";
import HealthBar from "../overlay/HealthBar";
import EnemyHealthBar from "../overlay/EnemyHealthBar";
import { moneyView } from "../overlay/StateView";
import { EnemyList } from "../state/enemy";

function Battle(props) {
  const { state, enemyAppear, setEnemyAppear } = props;
  useEffect(() => {
    setEnemyAppear("translateY(-30px)");
  }, [setEnemyAppear]);
  return (
    <div>
      <div className="Battle">
        <img src={room} alt="title" className="img" />

        <div
          style={{
            position: "absolute",
            left: "400px",
            top: "170px",
            transform: enemyAppear,
            transition: "1s",
          }}
        >
          <img src={EnemyList[0].img} alt="title" />
        </div>
        <EnemyHealthBar state={EnemyList[0]} />
        <div stayle={{}}>
          <p
            style={{
              position: "absolute",
              left: "150px",
              top: "680px",
              color: "brack",
              fontSize: "50px",
              fontWeight: 500,
            }}
          >
            {state.energy}
          </p>
        </div>
        <HealthBar state={state} />
        {moneyView(state.money)}
      </div>
    </div>
  );
}

export default Battle;
