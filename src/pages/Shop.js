import React from "react";
import "./scss/Shop.scss";
import { Button } from "@mui/material";
import HealthBar from "../overlay/HealthBar";
import room from "../images/room.jpg";
import { cardList } from "../state/card";
import { nextButtonView, moneyView } from "../overlay/StateView";
import ShopDialog from "../overlay/ShopDialog";
import DeckDialog from "../overlay/DeckDialog";
import DeckDeleteDialog from "../overlay/DeckDeleteDialog";

function Shop(props) {
  const {
    setPage,
    setState,
    state,
    setHandCard,
    deck,
    setDeck,
    setEnemy,
    setEnemyAction,
    setBattleDeck,
    setEvent,
    deckDialogOpen,
    setDeckDialogOpen,
  } = props;
  // 次の部屋ボタン表示
  const [choiceOpen, setchoiceOpen] = React.useState(false);
  // ショップボタン表示
  const [shopButtonOpen, setshopButtonOpen] = React.useState(true);
  // ショップダイアログ表示
  const [shopOpen, setShopOpen] = React.useState(false);
  //
  const [deckDeleteDialogOpen, setDeckDeleteDialog] = React.useState(false);
  //
  const [deleteButtonOpen, setDeckDeleteButtonOpen] = React.useState(true);
  // ショップで売られるカードのリスト
  const [sellCardList, setSellCardList] = React.useState({});
  const [healButtonOpen, setHealButtonOpen] = React.useState(true);

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
  // デッキダイアログ
  const deckDialogView = () => {
    return (
      <div className="ViewDialog">
        <DeckDialog setDeckDialogOpen={setDeckDialogOpen} deck={deck} />
      </div>
    );
  };
  const sellCardSet = () => {
    var tmpCardList = Array.from(cardList);
    const tmpSellCardList = [];
    for (var i = 0; i < 5; i++) {
      const num = Math.floor(Math.random() * tmpCardList.length);
      const price = Math.floor(Math.random() * 50 + 50);
      tmpCardList[num].price = price;
      tmpSellCardList.push(tmpCardList[num]);
      tmpCardList.splice(num, 1);
    }
    setSellCardList(tmpSellCardList);
  };

  return (
    <div>
      <div className="Shop">
        <img src={room} alt="title" className="img" />
        {moneyView(state.money)}
        {<p className="floor">部屋 - {state.roomNo}</p>}
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
        {shopButtonOpen && (
          <Button
            fullWidth
            style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
            onClick={() => {
              setchoiceOpen(true);
              setShopOpen(true);
              sellCardSet();
              setshopButtonOpen(false);
            }}
          >
            <p style={{ fontSize: 18, color: "white" }}>ショップ</p>
          </Button>
        )}
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
          () => {},
          setshopButtonOpen
        )}
      {shopOpen && (
        <div className="ViewDialog">
          <ShopDialog
            setShopOpen={setShopOpen}
            sellCardList={sellCardList}
            setSellCardList={setSellCardList}
            state={state}
            setState={setState}
            deck={deck}
            setDeck={setDeck}
            setDeckDeleteDialog={setDeckDeleteDialog}
            deleteButtonOpen={deleteButtonOpen}
            healButtonOpen={healButtonOpen}
            setHealButtonOpen={setHealButtonOpen}
          />
        </div>
      )}
      {deckDeleteDialogOpen && (
        <div className="ViewDialog">
          <DeckDeleteDialog
            setDeckDeleteDialog={setDeckDeleteDialog}
            deck={deck}
            setDeck={setDeck}
            setDeckDeleteButtonOpen={setDeckDeleteButtonOpen}
          />
        </div>
      )}
      {cardButtonView()}
      {deckDialogOpen && deckDialogView()}
    </div>
  );
}

export default Shop;
