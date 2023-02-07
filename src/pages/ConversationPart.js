import room from "../images/room.jpg";
import React from "react";
import "./scss/ConversationPart.scss";
import HealthBar from "../overlay/HealthBar";
import DeckDialog from "../overlay/DeckDialog";
import { Button } from "@mui/material";
import { prologue } from "../state/prologue";
import Choice from "../overlay/Choice";
import { choiceItem } from "../state/ChoiceItem";
import CardChoiceDialog from "../overlay/CardChoiceDialog";

function ConversationPart(props) {
  const {
    state,
    setState,
    setPage,
    deck,
    setDeck,
    deckDialogOpen,
    setDeckDialogOpen,
  } = props;
  const [serif, setSerif] = React.useState(0);
  const [selectCard, setSelectCard] = React.useState({});
  const [cardChoiceDialogOpen, setCardChoiceDialogOpen] = React.useState(false);
  const [choiceOpen, setChoiceOpen] = React.useState({
    open: false,
    isCoice: false,
  });
  //キャラクター表示
  const charactor = () => {
    return (
      <div className="Charactor">
        <img src={prologue[serif].img} alt="title" />
      </div>
    );
  };
  // デッキダイアログ
  const deckDialog = () => {
    return (
      <div className="ViewDialog">
        <DeckDialog setDeckDialogOpen={setDeckDialogOpen} deck={deck} />
      </div>
    );
  };
  // 会話 & ストーリー
  const speechArea = () => {
    return (
      <div
        className="SpeechArea"
        onClick={() => {
          if (serif < 4) {
            setSerif(serif + 1);
          }
          if (serif === 3) {
            setChoiceOpen({ open: true, isCoice: false });
          }
        }}
      >
        <p style={{ fontSize: 30, color: "white", margin: 20 }}>
          {prologue[serif].serif}
        </p>
      </div>
    );
  };
  //取得カード選択ダイアログ
  const cardChoiceDialog = () => {
    return (
      <div className="ViewDialog">
        <CardChoiceDialog
          setCardChoiceDialogOpen={setCardChoiceDialogOpen}
          selectCard={selectCard}
          deck={deck}
          setDeck={setDeck}
          setChoiceOpen={setChoiceOpen}
        />
      </div>
    );
  };
  // カードダイアログ表示ボタン
  const cardButton = () => {
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
  //"次の部屋"ボタン
  const nextButton = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "500px",
          left: "850px",
          minWidth: "500px",
        }}
      >
        <Button
          fullWidth
          style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
          onClick={() => {
            setPage("");
          }}
        >
          <p style={{ fontSize: 18, color: "white" }}>次の部屋へ</p>
        </Button>
      </div>
    );
  };
  //-------------------- 画面 --------------------//
  return (
    <div className="ConversationPart">
      {charactor()}
      {deckDialogOpen
        ? deckDialog()
        : cardChoiceDialogOpen
        ? cardChoiceDialog()
        : speechArea()}

      <img src={room} alt="title" />
      <HealthBar state={state} setState={setState} />
      {cardButton()}
      {choiceOpen.open && (
        <Choice
          choiceItem={choiceItem}
          state={state}
          setState={setState}
          setChoiceOpen={setChoiceOpen}
          setCardChoiceDialogOpen={setCardChoiceDialogOpen}
          setSelectCard={setSelectCard}
        />
      )}
      {deckDialogOpen ? <></> : choiceOpen.isCoice && nextButton()}
    </div>
  );
}

export default ConversationPart;
