import "./App.css";
import React from "react";
import Top from "./pages/Top";
import ConversationPart from "./pages/ConversationPart";
import { defaultDeck } from "./state/card";

function App() {
  const [page, setPage] = React.useState("Top");
  const [state, setState] = React.useState({ health: 19, maxHealth: 20 });
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
          deckDialogOpen={deckDialogOpen}
          setDeckDialogOpen={setDeckDialogOpen}
        />
      )}
    </>
  );
}

export default App;
