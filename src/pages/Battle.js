import room from "../images/room.jpg";
import treasure from "../images/item/treasure.png";
import enemyDamage from "../images/item/enemyDamage.png";
import enemyGuard from "../images/item/enemyGuard.png";
import energy from "../images/item/energy.png";
import damegeEffectImg from "../images/effect/damegeEffect.png";
import bottomArea from "../images/view/bottomArea.jpg";
import React, { useEffect } from "react";
import "./scss/Battle.scss";
import HealthBar from "../overlay/HealthBar";
import EnemyHealthBar from "../overlay/EnemyHealthBar";
import { nextButtonView, moneyView } from "../overlay/StateView";
import { Button, Tooltip } from "@mui/material";
import { cardList } from "../state/card";
import CardChoiceDialog from "../overlay/CardChoiceDialog";
import DeckDialog from "../overlay/DeckDialog";

function Battle(props) {
  const {
    setPage,
    state,
    enemyAppear,
    setEnemyAppear,
    deck,
    setDeck,
    handCard,
    setHandCard,
    enemy,
    setEnemy,
    setState,
    enemyAction,
    setEnemyAction,
    maxEnergy,
    battleDeck,
    setBattleDeck,
    cardChoiceDialogOpen,
    setCardChoiceDialogOpen,
    deckDialogOpen,
    setDeckDialogOpen,
    setEvent,
    useCardList,
    setUseCardList,
    companion,
  } = props;

  useEffect(() => {
    setEnemyAppear("translateY(-30px)");
  }, [setEnemyAppear]);
  // ダメージエフェクトを表示
  const [damegeEffect, setDameeEffect] = React.useState(false);
  // ダメージエフェクトを揺らす
  const [yureru, setYureru] = React.useState("100px");
  // ダメージエフェクトを表示
  const [treasureViewOpen, setTreasureViewOpen] = React.useState(false);
  // 次の部屋ボタン表示
  const [choiceOpen, setchoiceOpen] = React.useState(false);

  // 手札を選んだときの処理
  const selectCard = (selectNo) => {
    // 行動処理
    var tmpEnemy = enemy;
    var tmpState = state;
    var selectCard = handCard[selectNo];

    var tmpUseCardList = useCardList;
    tmpUseCardList.push(selectCard);
    setUseCardList(tmpUseCardList);

    if (tmpState.energy - selectCard.cost >= 0) {
      // 選択したカードに筋力強化があればステータス強化
      if (selectCard.power > 0) {
        tmpState.power = tmpState.power + selectCard.power;
      }
      // ダメージ計算
      if (selectCard.damege + tmpState.power > 0 && selectCard.damege > 0) {
        if (tmpEnemy.guard > 0) {
          tmpEnemy.guard =
            tmpEnemy.guard - (selectCard.damege + tmpState.power);
          if (tmpEnemy.guard < 0) {
            tmpEnemy.health = tmpEnemy.health + tmpEnemy.guard;
            tmpEnemy.guard = 0;
          }
        } else {
          tmpEnemy.health =
            tmpEnemy.health - (selectCard.damege + tmpState.power);
        }
      }

      // powerDownがある場合敵の攻撃を下げる
      if (selectCard.powerDown > 0) {
        tmpEnemy.power = tmpEnemy.power - selectCard.powerDown;
      }
      // myDamageがある場合自身の体力を減らす
      if (selectCard.myDamage > 0) {
        tmpState.health = tmpState.health - selectCard.myDamage;
      }

      // energyがある場合エネルギーを増やす
      if (selectCard.energy > 0) {
        tmpState.energy = tmpState.energy + selectCard.energy;
      }

      tmpState.energy = tmpState.energy - selectCard.cost;
      tmpState.guard = tmpState.guard + selectCard.guard;

      // 使ったカードを消す
      var tmpHandCard = Array.from(handCard);
      tmpHandCard.splice(selectNo, 1);
      setHandCard(tmpHandCard);

      // drawがある場合デッキからカードを回収する
      if (selectCard.draw > 0) {
        // deckの中から5枚をランダムで取得する。
        var tmpBattleDeck = Array.from(battleDeck);
        const tmp = tmpHandCard;
        for (var i = 0; i < selectCard.draw; i++) {
          // 山札にカードがなくなった場合捨て札から戻す
          if (tmpBattleDeck.length <= 0) {
            tmpBattleDeck = useCardList;
            setUseCardList([]);
          }
          const num = Math.floor(Math.random() * tmpBattleDeck.length);
          tmp.push(tmpBattleDeck[num]);
          tmpBattleDeck.splice(num, 1);
        }
        setHandCard(tmp);
        setBattleDeck(tmpBattleDeck);
      }

      // ダメージエフェクト
      if (selectCard.damege > 0) {
        setDameeEffect(true);
        setTimeout(yureruEffect1, 50);
      }
      setTimeout(closeEffect, 300);
    }
    if (tmpEnemy.health <= 0) {
      tmpState.energy = maxEnergy;
      setTreasureViewOpen(true);
    }
    setEnemy(tmpEnemy);
    setState(tmpState);
  };

  // Effect 関連
  const closeEffect = () => {
    setDameeEffect(false);
  };
  const yureruEffect1 = () => {
    setYureru("75px");
    setTimeout(yureruEffect2, 50);
  };
  const yureruEffect2 = () => {
    setYureru("125px");
    setTimeout(yureruEffect3, 50);
  };
  const yureruEffect3 = () => {
    setYureru("100px");
  };

  // 敵のターン
  const nextTurnAction = () => {
    var tmpState = state;
    var tmpEnemy = enemy;
    if (enemyAction.damage + tmpEnemy.power > 0 && enemyAction.damage > 0) {
      if (tmpState.guard > 0) {
        if (tmpState.guard - (enemyAction.damage + tmpEnemy.power) < 0) {
          tmpState.health =
            tmpState.health +
            (tmpState.guard - (enemyAction.damage + tmpEnemy.power));
        }
      } else {
        tmpState.health =
          tmpState.health - (enemyAction.damage + tmpEnemy.power);
      }
    }
    tmpEnemy.guard = 0;
    if (enemyAction.guard > 0) {
      tmpEnemy.guard = enemyAction.guard;
    }
    if (enemyAction.power > 0) {
      tmpEnemy.power = tmpEnemy.power + enemyAction.power;
    }
    if (enemyAction.powerDown > 0) {
      tmpState.power = tmpState.power - enemyAction.powerDown;
    }
    tmpState.energy = maxEnergy;
    tmpState.guard = 0;
    setState(tmpState);
    setEnemy(tmpEnemy);

    // deckの中から5枚をランダムで取得する。
    var tmpDeck = Array.from(deck);
    var tmpBattleDeck = Array.from(battleDeck);
    const tmp = [];
    for (var i = 0; i < 5; i++) {
      // 山札にカードがなくなった場合捨て札から戻す
      if (tmpBattleDeck.length <= 0) {
        tmpBattleDeck = tmpDeck;
      }
      const num = Math.floor(Math.random() * tmpBattleDeck.length);
      tmp.push(tmpBattleDeck[num]);
      tmpBattleDeck.splice(num, 1);
    }
    setHandCard(tmp);
    setBattleDeck(tmpBattleDeck);

    // 敵の行動を更新
    const actionNum = Math.floor(Math.random() * enemy.actionPattern.length);
    setEnemyAction(enemy.actionPattern[actionNum]);
  };

  // 宝箱クリック
  const treasureClick = () => {
    var tmpState = state;
    setCardChoiceDialogOpen(true);
    // 20Gから50G ランダムで獲得
    const num = Math.floor(Math.random() * 30 + 20);
    tmpState.money = tmpState.money + num;
    setState(tmpState);
  };
  // ------------- 表示 -------------
  // 敵表示
  const enemyView = () => {
    return (
      <div
        className="enemy"
        style={{
          left: yureru,
          transform: enemyAppear,
        }}
      >
        <img src={enemy.img} alt="title" />
      </div>
    );
  };
  // 宝箱表示
  const treasureView = () => {
    return (
      <div className="treasure">
        <img
          src={treasure}
          alt="title"
          onClick={() => {
            treasureClick();
          }}
        />
      </div>
    );
  };
  // ダメージエフェクト
  const enemyDamegeView = () => {
    return (
      <div
        className="damege"
        style={{
          transform: enemyAppear,
        }}
      >
        <img
          src={damegeEffectImg}
          alt="damege"
          style={{ maxHeight: "400px" }}
        />
      </div>
    );
  };
  // エネルギー表示
  const energyView = () => {
    return (
      <div>
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
  // 次のターン表示
  const nextTurn = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "700px",
          left: "1200px",
        }}
      >
        <Button
          onClick={() => {
            nextTurnAction();
          }}
          style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
        >
          <p style={{ fontSize: 18, color: "white" }}>次のターン</p>
        </Button>
      </div>
    );
  };
  // 敵の次の行動表示
  const enemyActionView = () => {
    return (
      <div>
        {enemyAction.damage > 0 && (
          <>
            <div style={{ position: "absolute", left: "950px", top: "260px" }}>
              <img
                src={enemyDamage}
                alt="title"
                className="img"
                style={{ maxHeight: 50 }}
              />
            </div>
            <p
              style={{
                color: "red",
                fontWeight: 400,
                fontSize: "50px",
                position: "absolute",
                left: "1000px",
                top: "200px",
                userSelect: "none",
              }}
            >
              {enemyAction.damage + enemy.power >= 0
                ? enemyAction.damage + enemy.power
                : 0}
            </p>
          </>
        )}
        {enemyAction.guard > 0 && (
          <>
            <div
              style={{
                position: "absolute",
                left: "950px",
                top: "310px",
              }}
            >
              <img
                src={enemyGuard}
                alt="title"
                className="img"
                style={{ maxHeight: 50 }}
              />
            </div>
            <p
              style={{
                color: "blue",
                fontWeight: 400,
                fontSize: "50px",
                position: "absolute",
                left: "1000px",
                top: "250px",
                userSelect: "none",
              }}
            >
              {enemyAction.guard}
            </p>
          </>
        )}
        {enemyAction.power > 0 && (
          <p
            style={{
              color: "green",
              fontWeight: 400,
              fontSize: "50px",
              position: "absolute",
              left: "1000px",
              top: "300px",
              userSelect: "none",
            }}
          >
            {enemyAction.power}
          </p>
        )}
        {enemyAction.powerDown > 0 && (
          <p
            style={{
              color: "gray",
              fontWeight: 400,
              fontSize: "50px",
              position: "absolute",
              left: "1000px",
              top: "350px",
              userSelect: "none",
            }}
          >
            {enemyAction.powerDown}
          </p>
        )}
      </div>
    );
  };
  // 敵のステータス表示
  const enemyStatePowerView = () => {
    return (
      <p
        style={{
          color: "red",
          fontWeight: 400,
          fontSize: "25px",
          position: "absolute",
          left: "560px",
          top: "495px",
          userSelect: "none",
        }}
      >
        {enemy.power}
      </p>
    );
  };
  // ステータス表示
  const stateView = () => {
    return (
      <div>
        {state.power !== 0 && (
          <p
            style={{
              color: "red",
              fontWeight: 400,
              fontSize: "50px",
              position: "absolute",
              left: "130px",
              top: "300px",
              userSelect: "none",
            }}
          >
            {state.power}
          </p>
        )}
      </div>
    );
  };
  //取得カード選択ダイアログ
  const cardChoiceDialogView = () => {
    var tmpCardList = Array.from(cardList);
    const tmp = [];
    for (var i = 0; i < 3; i++) {
      // cardListの中から3枚をランダムで取得する。
      const num = Math.floor(Math.random() * tmpCardList.length);
      tmp.push(tmpCardList[num]);
      tmpCardList.splice(num, 1);
    }
    return (
      <div className="ViewDialog">
        <CardChoiceDialog
          setCardChoiceDialogOpen={(bool) => {
            setCardChoiceDialogOpen(bool);
            setTreasureViewOpen(bool);
            setchoiceOpen(true);
          }}
          selectCard={tmp}
          deck={deck}
          setDeck={setDeck}
          setChoiceOpen={() => {}}
        />
      </div>
    );
  };
  // デッキダイアログ
  const deckDialogView = () => {
    return (
      <div className="ViewDialog">
        <DeckDialog
          setDeckDialogOpen={setDeckDialogOpen}
          deck={deck}
          companion={companion}
        />
      </div>
    );
  };
  // カードダイアログ表示ボタン
  const cardButtonView = () => {
    return (
      <div className="CardButton">
        {!choiceOpen.open && (
          <Button
            onClick={() => {
              setDeckDialogOpen(true);
            }}
          >
            card
          </Button>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="Battle">
        <img src={room} alt="title" className="img" />
        {enemy.health > 0 && enemyView()}
        {enemy.health > 0 && <EnemyHealthBar state={enemy} />}
        {<p className="floor">部屋 - {state.roomNo}</p>}
        <div className="energyArea">
          <img src={energy} alt="title" className="img" />
        </div>
        {energyView()}
        {damegeEffect && enemyDamegeView()}
        <HealthBar state={state} />
        {moneyView(state.money)}
        {enemy.health > 0 && handCardView()}
        {enemy.health > 0 && stateView()}
      </div>
      <div className="bottomArea">
        <img src={bottomArea} alt="title" className="img" />
      </div>
      {enemy.health > 0 && enemyActionView()}
      {enemy.power !== 0 && enemy.health > 0 && enemyStatePowerView()}
      {enemy.health > 0 && nextTurn()}
      {treasureViewOpen && treasureView()}
      {cardChoiceDialogOpen && cardChoiceDialogView()}
      {choiceOpen &&
        nextButtonView(
          setPage,
          setState,
          state,
          setHandCard,
          deck,
          setEnemy,
          setEnemyAction,
          setBattleDeck,
          setchoiceOpen,
          setEvent,
          () => {},
          () => {},
          () => {},
          () => {}
        )}
      {cardButtonView()}
      {deckDialogOpen && deckDialogView()}
    </div>
  );
}

export default Battle;
