import "./App.css";
import React from "react";
import Top from "./pages/Top";
import Battle from "./pages/Battle";
import ConversationPart from "./pages/ConversationPart";
import { defaultDeck } from "./state/card";
import Event from "./pages/Event";

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
  // 自身のデッキ
  const [deck, setDeck] = React.useState(defaultDeck);
  // 現在のデッキを確認するダイアログを開く
  const [deckDialogOpen, setDeckDialogOpen] = React.useState(false);
  // 敵を表示するときのcss
  const [enemyAppear, setEnemyAppear] = React.useState("translateY(-50px)");
  // 手札
  const [handCard, setHandCard] = React.useState({});
  // 敵情報
  const [enemy, setEnemy] = React.useState({});
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
        />
      )}
      {page === "Battle" && (
        <Battle
          state={state}
          enemyAppear={enemyAppear}
          setEnemyAppear={setEnemyAppear}
          deck={deck}
          handCard={handCard}
          setHandCard={setHandCard}
          enemy={enemy}
          setEnemy={setEnemy}
          setState={setState}
        />
      )}
      {page === "Event" && <Event />}
    </>
  );
}

export default App;
