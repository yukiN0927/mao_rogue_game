import Event1_1 from "../images/event/Event01-1.jpg";
import Event1_3 from "../images/event/Event01-3.jpg";
import Event1_2 from "../images/event/Event01-2.jpg";
import Event2_1 from "../images/event/Event02-1.jpg";
import Event2_2 from "../images/event/Event02-2.jpg";
import Event2_3 from "../images/event/Event02-3.jpg";

export const EventList = [
  // ----------------------------------------------- //
  {
    img1: Event1_1,
    img2: Event1_3,
    img3: Event1_2,
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
          tmpState.sanity = tmpState.sanity + 10;
          setState(tmpState);
        },
      },
      { text: "立ち去る", func: (state, setState) => {} },
    ],
  },
  // ----------------------------------------------- //
  {
    img1: Event2_1,
    img2: Event2_2,
    img3: Event2_3,
    choice: [
      {
        text: "赤い液体を飲む",
        func: (state, setState) => {
          var tmpState = state;
          tmpState.health = tmpState.health - 3;
          setState(tmpState);
        },
      },
      {
        text: "緑の液体を飲む",
        func: (state, setState) => {
          var tmpState = state;
          if (tmpState.maxHealth - 5 <= tmpState.health) {
            tmpState.health = tmpState.maxHealth;
          } else {
            tmpState.health = tmpState.health + 5;
          }
          tmpState.sanity = tmpState.sanity + 5;
          setState(tmpState);
        },
      },
    ],
  },
];
