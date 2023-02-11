import slash from "../images/card/slash.jpg";
import slashL from "../images/card/slash_l.jpg";
import guard from "../images/card/guard.jpg";
import guardL from "../images/card/guard_l.jpg";
import slashBack from "../images/card/slashBack.jpg";
import hit from "../images/card/hit.jpg";
import rage from "../images/card/rage.jpg";

export const cardList = [
  {
    cost: 1,
    name: "切り下がり",
    damege: 5,
    guard: 3,
    img: slashBack,
    largeImg: slashBack,
    description: "対象に5のダメージを与え、3のガード付与",
  },
  {
    cost: 0,
    name: "殴る",
    damege: 4,
    guard: 0,
    img: hit,
    largeImg: hit,
    description: "対象に4のダメージを与える",
  },
  {
    cost: 2,
    name: "暴れる",
    damege: 12,
    guard: 0,
    img: rage,
    largeImg: rage,
    description: "対象に12のダメージを与える",
  },
];

export const defaultDeck = [
  {
    cost: 1,
    name: "斬る",
    damege: 5,
    guard: 0,
    img: slash,
    largeImg: slashL,
    description: "対象に5のダメージを与える",
  },
  {
    cost: 1,
    name: "斬る",
    damege: 5,
    guard: 0,
    img: slash,
    largeImg: slashL,
    description: "対象に5のダメージを与える",
  },
  {
    cost: 1,
    name: "斬る",
    damege: 5,
    guard: 0,
    img: slash,
    largeImg: slashL,
    description: "対象に5のダメージを与える",
  },
  {
    cost: 1,
    name: "斬る",
    damege: 5,
    guard: 0,
    img: slash,
    largeImg: slashL,
    description: "対象に5のダメージを与える",
  },
  {
    cost: 1,
    name: "斬る",
    damege: 5,
    guard: 0,
    img: slash,
    largeImg: slashL,
    description: "対象に5のダメージを与える",
  },
  {
    cost: 1,
    name: "守る",
    damege: 0,
    guard: 5,
    img: guard,
    largeImg: guardL,
    description: "自身に5のガードを付与",
  },
  {
    cost: 1,
    name: "守る",
    damege: 0,
    guard: 5,
    img: guard,
    largeImg: guardL,
    description: "自身に5のガードを付与",
  },
  {
    cost: 1,
    name: "守る",
    damege: 0,
    guard: 5,
    img: guard,
    largeImg: guardL,
    description: "自身に5のガードを付与",
  },
  {
    cost: 1,
    name: "守る",
    damege: 0,
    guard: 5,
    img: guard,
    largeImg: guardL,
    description: "自身に5のガードを付与",
  },
  {
    cost: 1,
    name: "守る",
    damege: 0,
    guard: 5,
    img: guard,
    largeImg: guardL,
    description: "自身に5のガードを付与",
  },
];
