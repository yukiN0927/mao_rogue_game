export const RandomRoom = (setPage) => {
  const num = Math.floor(Math.random() * 10 + 1);
  if (num >= 1 && num <= 9) {
    setPage("Battle");
  }
  if (num >= 10 && num <= 10) {
    setPage("Event");
  }
};
