import React from "react";
import "./scss/HealthBar.scss";
import { Stage, Layer, Rect } from "react-konva";
import { Typography } from "@mui/material";

function HealthBar(props) {
  const { state, setState, deckDialogOpen } = props;
  return (
    <>
      <div className="HealthBar">
        <Stage width={300} height={25}>
          <Layer>
            <Rect fill="rgb(100, 100, 100)" width={300} height={200} />
          </Layer>
        </Stage>
      </div>
      <div className="HealthBar">
        <Stage width={(300 / state.maxHealth) * state.health} height={25}>
          <Layer>
            <Rect fill="rgb(255, 100, 100)" width={300} height={200} />
          </Layer>
        </Stage>
      </div>
      <div className="Health">
        <Typography variant="h5">
          {state.health}/{state.maxHealth}
        </Typography>
      </div>
    </>
  );
}

export default HealthBar;
