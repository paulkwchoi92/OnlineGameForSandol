import React, { useState, useEffect } from "react";
import useEventListener from "@use-it/event-listener";
const SIZE = 32;
// under code will repalce offset of top to change character visualization
const DIRECTION = {
  DOWN: 0,
  LEFT: SIZE * 1,
  RIGHT: SIZE * 2,
  UP: SIZE * 3,
};

const STEP_SIZE = 3
export default function Character() {
  //increment left by 32 to swithc off between characters
  // girl character = 96
  const offset = { top: 0, left: 0 };
  //default of character as facing down
  const [facing, setFacing] = useState(DIRECTION.DOWN)
  const [step, setStep] = useState(0)
  useEventListener("keydown", ({ code }) => {
    // equal to negative one also indiacted if the string was not found
    if (code.indexOf("Arrow") === -1) return;
    // code returns ArrowDown, ArrowUp and suche, replacing the Arrow will shorten it down
    const direction = DIRECTION[code.replace("Arrow", "").toUpperCase()];
    setFacing(direction)
  });
  //user effect happens when an piece of state changes
  // the code underneath will be watching when the state facing will change
  useEffect(() => {

  }, [facing])
  return (
    <div
      style={{
        width: SIZE,
        height: SIZE,
        //url will automatically looking into public folder
        background: `url(/characters.png) -${offset.left}px -${offset.top + facing}px`,
      }}
    />
  );
}
