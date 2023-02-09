import "./App.css";
import React from "react";
import Top from "./pages/Top";
import Battle from "./pages/Battle";
import ConversationPart from "./pages/ConversationPart";
import { defaultDeck } from "./state/card";
import Event from "./pages/Event";

function App() {
  const [page, setPage] = React.useState("Top");
  const [state, setState] = React.useState({
    health: 20,
    maxHealth: 20,
    money: 100,
    roomNo: 0,
    energy: 3,
  });
  const [deck, setDeck] = React.useState(defaultDeck);
  const [deckDialogOpen, setDeckDialogOpen] = React.useState(false);
  const [enemyAppear, setEnemyAppear] = React.useState("translateY(-50px)");
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
        />
      )}
      {page === "Battle" && (
        <Battle
          state={state}
          enemyAppear={enemyAppear}
          setEnemyAppear={setEnemyAppear}
        />
      )}
      {page === "Event" && <Event />}
    </>
  );
}

export default App;
