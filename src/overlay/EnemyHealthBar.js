import React from "react";
import "./scss/EnemyHealthBar.scss";
import { Stage, Layer, Rect } from "react-konva";
import { Typography } from "@mui/material";

function EnemyHealthBar(props) {
  const { state } = props;
  return (
    <>
      <div className="EnemyHealthBar">
        <Stage width={300} height={25}>
          <Layer>
            <Rect fill="rgb(100, 100, 100)" width={300} height={200} />
          </Layer>
        </Stage>
      </div>
      <div className="EnemyHealthBar">
        <Stage width={(300 / state.maxHealth) * state.health} height={25}>
          <Layer>
            <Rect fill="rgb(178, 102, 255)" width={300} height={200} />
          </Layer>
        </Stage>
      </div>
      <div className="EnemyHealth">
        <Typography variant="h5">
          {state.health}/{state.maxHealth}
        </Typography>
      </div>
    </>
  );
}

export default EnemyHealthBar;
