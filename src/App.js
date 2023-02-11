import "./App.css";
import React from "react";
import Top from "./pages/Top";
import Battle from "./pages/Battle";
import ConversationPart from "./pages/ConversationPart";
import { defaultDeck } from "./state/card";
import Event from "./pages/Event";
import gameover from "./images/gameover.jpg";

function App() {
  // 特定のページの表示
  const [page, setPage] = React.useState("Top");
  // 自身のステータス
  const [state, setState] = React.useState({
    health: 20,
    maxHealth: 20,
    money: 100,
    roomNo: 0,
    energy: 3,
    guard: 0,
  });
  // エネルギー量
  const [maxEnergy, setMaxEnergy] = React.useState(3);
  // 自身のデッキ
  const [deck, setDeck] = React.useState(defaultDeck);
  // 現在のデッキを確認するダイアログを開く
  const [deckDialogOpen, setDeckDialogOpen] = React.useState(false);
  // 敵を表示するときのcss
  const [enemyAppear, setEnemyAppear] = React.useState("translateY(-50px)");
  // 手札
  const [handCard, setHandCard] = React.useState({});
  // 手札
  const [battleDeck, setBattleDeck] = React.useState({});
  // 敵情報
  const [enemy, setEnemy] = React.useState({});
  // 敵の次の行動
  const [enemyAction, setEnemyAction] = React.useState({});
  // カード選択ダイアログ表示
  const [cardChoiceDialogOpen, setCardChoiceDialogOpen] = React.useState(false);

  // ------------------- view -------------------
  const gameOver = () => {
    return (
      <div style={{ padding: "100px", position: "absolute", top: "0px" }}>
        <img src={gameover} alt="title" style={{ userSelect: "none" }} />
      </div>
    );
  };
  return (
    <>
      {page === "Top" && <Top setPage={setPage} />}
      {page === "ConversationPart" && (
        <ConversationPart
          setPage={setPage}
          state={state}
          setState={setState}
          deck={deck}
          setDeck={setDeck}
          deckDialogOpen={deckDialogOpen}
          setDeckDialogOpen={setDeckDialogOpen}
          setHandCard={setHandCard}
          setEnemy={setEnemy}
          setEnemyAction={setEnemyAction}
          setBattleDeck={setBattleDeck}
          cardChoiceDialogOpen={cardChoiceDialogOpen}
          setCardChoiceDialogOpen={setCardChoiceDialogOpen}
        />
      )}
      {page === "Battle" && (
        <Battle
          setPage={setPage}
          state={state}
          enemyAppear={enemyAppear}
          setEnemyAppear={setEnemyAppear}
          deck={deck}
          setDeck={setDeck}
          handCard={handCard}
          setHandCard={setHandCard}
          enemy={enemy}
          setEnemy={setEnemy}
          setState={setState}
          enemyAction={enemyAction}
          setEnemyAction={setEnemyAction}
          maxEnergy={maxEnergy}
          battleDeck={battleDeck}
          setBattleDeck={setBattleDeck}
          cardChoiceDialogOpen={cardChoiceDialogOpen}
          setCardChoiceDialogOpen={setCardChoiceDialogOpen}
          deckDialogOpen={deckDialogOpen}
          setDeckDialogOpen={setDeckDialogOpen}
        />
      )}
      {page === "Event" && <Event />}
      {state.health <= 0 && gameOver()}
    </>
  );
}

export default App;
