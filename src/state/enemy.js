import slime from "../images/enemy/slime.png";
import bastard from "../images/enemy/bastard.png";
export const EnemyList = [
  {
    name: "スライム",
    img: slime,
    maxHealth: 20,
    health: 20,
    guard: 0,
    actionPattern: [
      { damage: 7, guard: 0 },
      { damage: 3, guard: 6 },
    ],
  },
  {
    name: "粗悪品",
    img: bastard,
    maxHealth: 25,
    health: 25,
    guard: 0,
    actionPattern: [
      { damage: 3, guard: 8 },
      { damage: 10, guard: 0 },
    ],
  },
];
