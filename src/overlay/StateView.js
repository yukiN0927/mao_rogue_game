import { Button } from "@mui/material";
import { RandomRoom } from "../state/RandomRoom";
//"次の部屋"ボタン
export const nextButtonView = (setPage, setState, nowState) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "500px",
        left: "850px",
        minWidth: "500px",
      }}
    >
      <Button
        fullWidth
        style={{ backgroundColor: "rgba(0,0,0,0.6)", margin: 20 }}
        onClick={() => {
          RandomRoom(setPage);
          setState({
            health: nowState.health,
            maxHealth: nowState.maxHealth,
            money: nowState.money,
            roomNo: nowState.roomNo + 1,
          });
        }}
      >
        <p style={{ fontSize: 18, color: "white" }}>次の部屋へ</p>
      </Button>
    </div>
  );
};
//所持金額表示
export const moneyView = (money) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "0%",
        left: "0%",
        marginTop: "95px",
        marginLeft: "1150px",
      }}
    >
      <p style={{ fontSize: "30px" }}>${money}</p>
    </div>
  );
};