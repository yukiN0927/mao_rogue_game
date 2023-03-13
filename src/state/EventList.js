import { CompanionList } from "../state/Companion";
import Event1_1 from "../images/event/Event01-1.jpg";
import Event1_3 from "../images/event/Event01-3.jpg";
import Event1_2 from "../images/event/Event01-2.jpg";
import Event2_1 from "../images/event/Event02-1.jpg";
import Event2_2 from "../images/event/Event02-2.jpg";
import Event2_3 from "../images/event/Event02-3.jpg";
import Event3_1 from "../images/event/Event03-1.jpg";
import Event3_2 from "../images/event/Event03-2.jpg";
import Event3_3 from "../images/event/Event03-3.jpg";

export const EventList = [
  // ----------------------------------------------- //
  {
    img1: Event1_1,
    img2: Event1_3,
    img3: Event1_2,
    choice: [
      {
        text: "受け取る",
        func: (
          state,
          setState,
          setCompanion,
          companion,
          setMaxEnergy,
          maxEnergy
        ) => {
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
      {
        text: "立ち去る",
        func: (
          state,
          setState,
          setCompanion,
          companion,
          setMaxEnergy,
          maxEnergy
        ) => {},
      },
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
        func: (
          state,
          setState,
          setCompanion,
          companion,
          setMaxEnergy,
          maxEnergy
        ) => {
          var tmpState = state;
          tmpState.health = tmpState.health - 3;
          setState(tmpState);
        },
      },
      {
        text: "緑の液体を飲む",
        func: (
          state,
          setState,
          setCompanion,
          companion,
          setMaxEnergy,
          maxEnergy
        ) => {
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
  // ----------------------------------------------- //
  {
    img1: Event3_1,
    img2: Event3_2,
    img3: Event3_3,
    choice: [
      {
        text: "同行してもらう",
        func: (
          state,
          setState,
          setCompanion,
          companion,
          setMaxEnergy,
          maxEnergy
        ) => {
          var tmpCompanion = companion;
          var tmpMaxEnergy = maxEnergy;
          var tmpState = state;
          tmpMaxEnergy = tmpMaxEnergy + 1;
          tmpState.energy = tmpState.energy + 1;
          tmpCompanion.push(CompanionList[0]);
          setCompanion(tmpCompanion);
          setMaxEnergy(tmpMaxEnergy);
          setState(tmpState);
        },
      },
      {
        text: "断る",
        func: (
          state,
          setState,
          setCompanion,
          companion,
          setMaxEnergy,
          maxEnergy
        ) => {},
      },
    ],
  },
];
