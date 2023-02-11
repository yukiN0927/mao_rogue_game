import { EnemyList } from "./enemy";

export const RandomRoom = (
  setPage,
  setHandCard,
  deck,
  setEnemy,
  setEnemyAction,
  setBattleDeck
) => {
  const num = Math.floor(Math.random() * 10 + 1);
  if (num >= 1 && num <= 9) {
    setPage("Battle");
    handCardSet(deck, setHandCard, setBattleDeck);
    randomEnemySet(setEnemy, setEnemyAction);
  }
  if (num >= 10 && num <= 10) {
    setPage("Event");
  }
};

// デッキから手札を取得する
const handCardSet = (deck, setHandCard, setBattleDeck) => {
  var tmpDeck = Array.from(deck);
  const tmp = [];
  for (var i = 0; i < 5; i++) {
    // deckの中から5枚をランダムで取得する。
    const num = Math.floor(Math.random() * tmpDeck.length);
    tmp.push(tmpDeck[num]);
    tmpDeck.splice(num, 1);
  }
  setHandCard(tmp);
  setBattleDeck(tmpDeck);
};

const randomEnemySet = (setEnemy, setEnemyAction) => {
  const num = Math.floor(Math.random() * EnemyList.length);
  if (EnemyList[num].health <= 0) {
    EnemyList[num].health = EnemyList[num].maxHealth;
  }
  setEnemy(EnemyList[num]);
  const actionNum = Math.floor(
    Math.random() * EnemyList[num].actionPattern.length
  );
  setEnemyAction(EnemyList[num].actionPattern[actionNum]);
};
