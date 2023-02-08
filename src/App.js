import "./App.css";
import React from "react";
import Top from "./pages/Top";
import Battle from "./pages/Battle";
import ConversationPart from "./pages/ConversationPart";
import { defaultDeck } from "./state/card";

function App() {
  const [page, setPage] = React.useState("Top");
  const [state, setState] = React.useState({
    health: 20,
    maxHealth: 20,
    money: 100,
    roomNo: 0,
  });
  const [deck, setDeck] = React.useState(defaultDeck);
  const [deckDialogOpen, setDeckDialogOpen] = React.useState(false);
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
      {page === "Battle" && <Battle state={state} />}
    </>
  );
}

export default App;
