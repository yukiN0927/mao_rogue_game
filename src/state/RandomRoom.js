import { EnemyList } from "./enemy";

export const RandomRoom = (setPage, setHandCard, deck, setEnemy) => {
  const num = Math.floor(Math.random() * 10 + 1);
  if (num >= 1 && num <= 9) {
    setPage("Battle");
    handCardSet(deck, setHandCard);
    randomEnemySet(setEnemy);
  }
  if (num >= 10 && num <= 10) {
    setPage("Event");
  }
};

// デッキから手札を取得する
const handCardSet = (deck, setHandCard) => {
  var tmpDeck = Array.from(deck);
  const tmp = [];
  for (var i = 0; i < 5; i++) {
    // deckの中から5枚をランダムで取得する。
    const num = Math.floor(Math.random() * tmpDeck.length);
    tmp.push(tmpDeck[num]);
    tmpDeck.splice(num, 1);
  }
  setHandCard(tmp);
};

const randomEnemySet = (setEnemy) => {
  const num = Math.floor(Math.random() * EnemyList.length);
  setEnemy(EnemyList[num]);
};
