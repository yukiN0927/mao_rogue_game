import { EnemyList } from "./enemy";
import { EventList } from "./EventList";

export const RandomRoom = (
  setPage,
  setHandCard,
  deck,
  setEnemy,
  setEnemyAction,
  setBattleDeck,
  setEvent
) => {
  const num = Math.floor(Math.random() * 100 + 1);
  if (num >= 1 && num <= 74) {
    setPage("Battle");
    handCardSet(deck, setHandCard, setBattleDeck);
    randomEnemySet(setEnemy, setEnemyAction);
  }
  if (num >= 75 && num <= 84) {
    setPage("Shop");
    randomEventSet(setEvent);
  }
  if (num >= 85 && num <= 100) {
    setPage("Event");
    randomEventSet(setEvent);
  }
  /** test用 */
  // if (num >= 1 && num <= 100) {
  //   setPage("Event");
  //   randomEventSet(setEvent);
  // }
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
  var enemyList = Array.from(EnemyList);
  const num = Math.floor(Math.random() * enemyList.length);
  if (enemyList[num].health <= 0) {
    enemyList[num].health = enemyList[num].maxHealth;
  }
  setEnemy(enemyList[num]);
  const actionNum = Math.floor(
    Math.random() * enemyList[num].actionPattern.length
  );
  setEnemyAction(enemyList[num].actionPattern[actionNum]);
};

const randomEventSet = (setEvent) => {
  const num = Math.floor(Math.random() * EventList.length);
  setEvent(EventList[num]);
};
