import React from "react";
import "./scss/HealthBar.scss";
import { Stage, Layer, Rect } from "react-konva";
import { Typography } from "@mui/material";

function HealthBar(props) {
  const { state } = props;
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
        {state.health > 0 && (
          <Stage width={(300 / state.maxHealth) * state.health} height={25}>
            <Layer>
              <Rect fill="rgb(255, 100, 100)" width={300} height={200} />
            </Layer>
          </Stage>
        )}
      </div>
      <div className="Health">
        <Typography variant="h5">
          {state.health}/{state.maxHealth}
        </Typography>
      </div>
      {state.guard > 0 && (
        <>
          <div className="GuardBar">
            <Stage width="300" height={25}>
              <Layer>
                <Rect fill="rgb(150, 255, 255)" width={300} height={200} />
              </Layer>
            </Stage>
          </div>
          <div className="Guard">
            <Typography variant="h5">{state.guard}</Typography>
          </div>
        </>
      )}
    </>
  );
}

export default HealthBar;
