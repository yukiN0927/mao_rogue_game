export const choiceItem = [
  {
    no: 0,
    text: "最大体力を10増加させる",
    effect: (setFunc, nowState, choiceOpen) => {
      setFunc({
        health: nowState.health + 10,
        maxHealth: nowState.maxHealth + 10,
      });
      choiceOpen({ open: false, isCoice: true });
    },
  },
  {
    no: 1,
    text: "体力を5失う。",
    effect: (setFunc, nowState, choiceOpen) => {
      setFunc({
        health: nowState.health - 5,
        maxHealth: nowState.maxHealth,
      });
      choiceOpen({ open: false, isCoice: true });
    },
  },
  {
    no: 1,
    text: "何もしない",
    effect: (setFunc, nowState, choiceOpen) => {
      setFunc({
        health: nowState.health,
        maxHealth: nowState.maxHealth,
      });
      choiceOpen({ open: false, isCoice: true });
    },
  },
];
