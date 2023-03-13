import React from "react";
import "./scss/Event.scss";
import { Button } from "@mui/material";
import HealthBar from "../overlay/HealthBar";
import { nextButtonView, moneyView } from "../overlay/StateView";
import DeckDialog from "../overlay/DeckDialog";

function Event(props) {
  const {
    event,
    state,
    setState,
    setPage,
    setHandCard,
    deck,
    setEnemy,
    setEnemyAction,
    setBattleDeck,
    setEvent,
    setCompanion,
    companion,
    deckDialogOpen,
    setDeckDialogOpen,
    setMaxEnergy,
    maxEnergy,
  } = props;
  // 敵情報
  const [img, setImg] = React.useState("");
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
  const cardButtonView = () => {
    return (
      <div className="CardButton">
        <Button
          onClick={() => {
            setDeckDialogOpen(true);
          }}
        >
          card
        </Button>
      </div>
    );
  };
  return (
    <div>
      <div className="Event">
        {cardButtonView()}

        {img === "" ? (
          <img
            src={event.img1}
            alt="title"
            className="img"
            style={{ height: "720px" }}
          />
        ) : (
          <img
            src={img}
            alt="title"
            className="img"
            style={{ height: "720px" }}
          />
        )}
        <HealthBar state={state} />
        {moneyView(state.money)}
        {<p className="floor">部屋 - {state.roomNo}</p>}
        {img === "" ? (
          <>
            <div
              style={{
                position: "absolute",
                top: "600px",
                left: "850px",
                minWidth: "500px",
              }}
            >
              <Button
                fullWidth
                style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
                onClick={() => {
                  event.choice[0].func(
                    state,
                    setState,
                    setCompanion,
                    companion,
                    setMaxEnergy,
                    maxEnergy
                  );
                  setImg(event.img2);
                }}
              >
                <p style={{ fontSize: 18, color: "white" }}>
                  {event.choice[0].text}
                </p>
              </Button>
            </div>
            <div
              style={{
                position: "absolute",
                top: "700px",
                left: "850px",
                minWidth: "500px",
              }}
            >
              <Button
                fullWidth
                style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
                onClick={() => {
                  event.choice[1].func(
                    state,
                    setState,
                    setCompanion,
                    companion,
                    setMaxEnergy,
                    maxEnergy
                  );
                  setImg(event.img3);
                }}
              >
                <p style={{ fontSize: 18, color: "white" }}>
                  {event.choice[1].text}
                </p>
              </Button>
            </div>
          </>
        ) : (
          nextButtonView(
            setPage,
            setState,
            state,
            setHandCard,
            deck,
            setEnemy,
            setEnemyAction,
            setBattleDeck,
            () => {},
            setEvent,
            setImg,
            () => {},
            () => {},
            () => {}
          )
        )}
        {deckDialogOpen && deckDialogView()}
      </div>
    </div>
  );
}

export default Event;
