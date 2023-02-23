import * as React from "react";
import "./scss/ShopDialog.scss";
import { Button, Tooltip } from "@mui/material";

function ShopDialog(props) {
  const {
    setShopOpen,
    sellCardList,
    setSellCardList,
    state,
    setState,
    deck,
    setDeck,
    setDeckDeleteDialog,
    deleteButtonOpen,
    healButtonOpen,
    setHealButtonOpen,
  } = props;

  const sellCard = () => {
    return (
      <div style={{ display: "flex" }}>
        {sellCardList.map((card, index) => {
          return (
            <div>
              <Tooltip title={card.description} placement="top">
                <img
                  src={card.largeImg}
                  alt="card"
                  style={{ margin: "10px 10px -15px 10px", maxHeight: "250px" }}
                  onClick={() => {
                    var tmpDeck = Array.from(deck);
                    var tmpSellCardList = Array.from(sellCardList);
                    var tmpState = state;
                    if (tmpState.money - card.price >= 0) {
                      tmpState.money = tmpState.money - card.price;
                      setState(tmpState);
                      tmpDeck.push(card);
                      setDeck(tmpDeck);
                      tmpSellCardList.splice(index, 1);
                      setSellCardList(tmpSellCardList);
                    }
                  }}
                />
              </Tooltip>
              <p style={{ textAlign: "center" }}>${card.price}</p>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="ShopDialog">
      {deleteButtonOpen && (
        <>
          <div style={{ position: "absolute", left: "20px", top: 400 }}>
            <Button
              style={{
                backgroundColor: "rgba(200,0,0,0.6)",
                minHeight: "40px",
                minWidth: "400px",
              }}
              onClick={() => {
                var tmpState = state;
                if (tmpState.money >= 100) {
                  setDeckDeleteDialog(true);
                  tmpState.money = tmpState.money - 100;
                  setState(tmpState);
                }
              }}
            >
              <p style={{ fontSize: 15, color: "white" }}>
                デッキのカードを1枚削除
              </p>
            </Button>
          </div>
          <div
            style={{
              position: "absolute",
              left: "440px",
              top: 385,
              fontSize: 30,
            }}
          >
            <p>$100</p>
          </div>
        </>
      )}
      {healButtonOpen && (
        <>
          <div style={{ position: "absolute", left: "600px", top: 400 }}>
            <Button
              style={{
                backgroundColor: "rgba(200,0,0,0.6)",
                minHeight: "40px",
                minWidth: "400px",
              }}
              onClick={() => {
                var tmpState = state;
                if (tmpState.money >= 100) {
                  tmpState.health = tmpState.health + tmpState.maxHealth / 3;
                  tmpState.health = tmpState.health.toFixed();
                  if (tmpState.health > tmpState.maxHealth) {
                    tmpState.health = tmpState.maxHealth;
                  }
                  tmpState.money = tmpState.money - 100;
                  setState(tmpState);
                  setHealButtonOpen(false);
                }
              }}
            >
              <p style={{ fontSize: 15, color: "white" }}>体力を30%回復</p>
            </Button>
          </div>
          <div
            style={{
              position: "absolute",
              left: "1020px",
              top: 385,
              fontSize: 30,
            }}
          >
            <p>$100</p>
          </div>
        </>
      )}

      <div style={{ position: "absolute", right: "20px", top: 500 }}>
        <Button
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            minHeight: "80px",
            minWidth: "80px",
          }}
          onClick={() => {
            setShopOpen(false);
          }}
        >
          <p style={{ fontSize: 18, color: "white" }}>ショップを出る</p>
        </Button>
      </div>
      {sellCard()}
    </div>
  );
}

export default ShopDialog;
