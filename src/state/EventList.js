import Event1 from "../images/event/Event01-1.jpg";
import Event2 from "../images/event/Event01-3.jpg";
import Event3 from "../images/event/Event01-2.jpg";
export const EventList = [
  {
    img1: Event1,
    img2: Event2,
    img3: Event3,
    choice: [
      {
        text: "受け取る",
        func: (state, setState) => {
          var tmpState = state;
          if (tmpState.maxHealth - 10 <= tmpState.health) {
            tmpState.health = tmpState.maxHealth;
          } else {
            tmpState.health = tmpState.health + 10;
          }
          setState(tmpState);
        },
      },
      { text: "立ち去る", func: (state, setState) => {} },
    ],
  },
];
