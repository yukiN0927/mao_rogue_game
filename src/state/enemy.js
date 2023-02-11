import slime from "../images/enemy/slime.png";
export const EnemyList = [
  {
    name: "スライム",
    img: slime,
    maxHealth: 15,
    health: 15,
    actionPattern: [
      { damage: 6, guard: 0 },
      { damage: 3, guard: 3 },
    ],
  },
];
