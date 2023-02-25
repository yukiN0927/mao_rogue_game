export const choiceItem = [
  {
    no: 0,
    text: "最大体力を10増加させる",
    effect: (setFunc, nowState, choiceOpen) => {
      setFunc({
        health: nowState.health + 10,
        maxHealth: nowState.maxHealth + 10,
        money: nowState.money,
        roomNo: nowState.roomNo,
        energy: nowState.energy,
        guard: nowState.guard,
        power: nowState.power,
        sanity: nowState.sanity,
      });
      choiceOpen({ open: false, isCoice: true });
    },
  },
  {
    no: 1,
    text: "ランダムなカードを取得",
    effect: (setFunc, nowState, choiceOpen) => {
      setFunc({
        health: nowState.health,
        maxHealth: nowState.maxHealth,
        money: nowState.money,
        roomNo: nowState.roomNo,
        energy: nowState.energy,
        guard: nowState.guard,
        power: nowState.power,
        sanity: nowState.sanity,
      });
      choiceOpen({ open: false, isCoice: false });
    },
  },
  {
    no: 1,
    text: "$100獲得",
    effect: (setFunc, nowState, choiceOpen) => {
      setFunc({
        health: nowState.health,
        maxHealth: nowState.maxHealth,
        money: nowState.money + 100,
        roomNo: nowState.roomNo,
        energy: nowState.energy,
        guard: nowState.guard,
        power: nowState.power,
        sanity: nowState.sanity,
      });
      choiceOpen({ open: false, isCoice: true });
    },
  },
];
