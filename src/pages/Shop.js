import React from "react";
import "./scss/Shop.scss";
import { Button } from "@mui/material";
import HealthBar from "../overlay/HealthBar";
import room from "../images/room.jpg";

import { nextButtonView, moneyView } from "../overlay/StateView";
import ShopDialog from "../overlay/ShopDialog";
// import HealthBar from "../overlay/HealthBar";

function Shop(props) {
  // 次の部屋ボタン表示
  const [choiceOpen, setchoiceOpen] = React.useState(false);
  // ショップダイアログ表示
  const [shopOpen, setShopOpen] = React.useState(false);
  const {
    setPage,
    setState,
    state,
    setHandCard,
    deck,
    setEnemy,
    setEnemyAction,
    setBattleDeck,
    setEvent,
  } = props;
  return (
    <div>
      <div className="Shop">
        <img src={room} alt="title" className="img" />
        {moneyView(state.money)}
        <HealthBar state={state} />
      </div>
      <div
        style={{
          position: "absolute",
          top: "700px",
          left: "480px",
          minWidth: "500px",
        }}
      >
        <Button
          fullWidth
          style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
          onClick={() => {
            setchoiceOpen(true);
            setShopOpen(true);
          }}
        >
          <p style={{ fontSize: 18, color: "white" }}>ショップ</p>
        </Button>
      </div>
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
          () => {}
        )}
      {shopOpen && (
        <div className="ViewDialog">
          <ShopDialog setShopOpen={setShopOpen} />
        </div>
      )}
    </div>
  );
}

export default Shop;
