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
import { nextButtonView, moneyView } from "../overlay/StateView";

function ConversationPart(props) {
  const {
    state,
    setState,
    setPage,
    deck,
    setDeck,
    deckDialogOpen,
    setDeckDialogOpen,
    setHandCard,
    setEnemy,
  } = props;
  const [serif, setSerif] = React.useState(0);
  const [selectCard, setSelectCard] = React.useState({});
  const [cardChoiceDialogOpen, setCardChoiceDialogOpen] = React.useState(false);
  const [choiceOpen, setChoiceOpen] = React.useState({
    open: false,
    isCoice: false,
  });
  //キャラクター表示
  const charactorView = () => {
    return (
      <div className="Charactor">
        <img src={prologue[serif].img} alt="title" />
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
  // 会話 & ストーリー
  const speechAreaView = () => {
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
  const cardChoiceDialogView = () => {
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

  //-------------------- 画面 --------------------//
  return (
    <div className="ConversationPart">
      {charactorView()}
      {deckDialogOpen
        ? deckDialogView()
        : cardChoiceDialogOpen
        ? cardChoiceDialogView()
        : speechAreaView()}

      <img src={room} alt="title" />
      <HealthBar state={state} />
      {moneyView(state.money)}
      {cardButtonView()}
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
      {deckDialogOpen ? (
        <></>
      ) : (
        choiceOpen.isCoice &&
        nextButtonView(setPage, setState, state, setHandCard, deck, setEnemy)
      )}
    </div>
  );
}

export default ConversationPart;
