import room from "../images/room.jpg";
import bottomArea from "../images/view/bottomArea.jpg";
import React, { useEffect } from "react";
import "./scss/Battle.scss";
import HealthBar from "../overlay/HealthBar";
import EnemyHealthBar from "../overlay/EnemyHealthBar";
import { moneyView } from "../overlay/StateView";
import { Tooltip } from "@mui/material";

function Battle(props) {
  const {
    state,
    enemyAppear,
    setEnemyAppear,
    handCard,
    setHandCard,
    enemy,
    setEnemy,
    setState,
  } = props;

  useEffect(() => {
    setEnemyAppear("translateY(-30px)");
  }, [setEnemyAppear]);

  const selectCard = (selectNo) => {
    // 行動処理
    var tmpEnemy = enemy;
    var tmpState = state;
    console.log(state);
    var selectCard = handCard[selectNo];
    if (tmpState.energy - selectCard.cost >= 0) {
      tmpEnemy.health = tmpEnemy.health - selectCard.damege;
      tmpState.energy = tmpState.energy - selectCard.cost;
      tmpState.guard = tmpState.guard + selectCard.guard;
      setEnemy(tmpEnemy);
      setState(tmpState);
      // 使ったカードを消す
      var tmpHandCard = Array.from(handCard);
      tmpHandCard.splice(selectNo, 1);
      setHandCard(tmpHandCard);
    }
  };

  // ------------- 表示 -------------
  // 敵表示
  const enemyView = () => {
    return (
      <div
        className="enemy"
        style={{
          transform: enemyAppear,
        }}
      >
        <img src={enemy.img} alt="title" />
      </div>
    );
  };
  // エネルギー表示
  const energyView = () => {
    return (
      <div stayle={{}}>
        <p className="energy">{state.energy}</p>
      </div>
    );
  };
  // 手札カード表示
  const handCardView = () => {
    let margin = 0;
    let px = 800 / handCard.length;
    return (
      <div className="handCard">
        {handCard.map((card, index) => {
          margin = margin + px;
          return (
            <div
              style={{
                position: "absolute",
                marginLeft: margin,
              }}
            >
              <Tooltip title={card.description} placement="top">
                <img
                  src={card.largeImg}
                  alt="title"
                  className="image"
                  onClick={() => {
                    selectCard(index);
                  }}
                />
              </Tooltip>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="Battle">
        <img src={room} alt="title" className="img" />
        {enemyView()}
        <EnemyHealthBar state={enemy} />
        {energyView()}
        <HealthBar state={state} />
        {moneyView(state.money)}
        {handCardView()}
      </div>
      <div className="bottomArea">
        <img src={bottomArea} alt="title" className="img" />
      </div>
    </div>
  );
}

export default Battle;
