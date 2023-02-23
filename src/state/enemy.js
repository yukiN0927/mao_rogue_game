import slime from "../images/enemy/slime.png";
import bastard from "../images/enemy/bastard.png";
import bastard2 from "../images/enemy/bastard2.png";
export const EnemyList = [
  {
    name: "スライム",
    img: slime,
    maxHealth: 20,
    health: 20,
    guard: 0,
    power: 0,
    actionPattern: [
      { damage: 7, guard: 0, power: 0, powerDown: 0 },
      { damage: 3, guard: 6, power: 0, powerDown: 0 },
      { damage: 0, guard: 5, power: 0, powerDown: 1 },
    ],
  },
  {
    name: "粗悪品",
    img: bastard,
    maxHealth: 25,
    health: 25,
    guard: 0,
    power: 0,
    actionPattern: [
      { damage: 3, guard: 8, power: 0, powerDown: 0 },
      { damage: 9, guard: 0, power: 0, powerDown: 0 },
      { damage: 4, guard: 0, power: 2, powerDown: 0 },
    ],
  },
  {
    name: "粗悪品2",
    img: bastard2,
    maxHealth: 20,
    health: 20,
    guard: 0,
    power: 0,
    actionPattern: [
      { damage: 0, guard: 10, power: 0, powerDown: 1 },
      { damage: 8, guard: 0, power: 0, powerDown: 0 },
      { damage: 5, guard: 0, power: 0, powerDown: 1 },
    ],
  },
];
