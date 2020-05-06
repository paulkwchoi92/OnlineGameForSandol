import React from "react";
import useEventListener from '@user-it/event-Listner'
export default function Character() {
  //increment left by 32 to swithc off between characters
  // girl character = 96
  const offset = { top: 0, left: 0 };
  useEventListener("keydown", ({ code }) => {
    // equal to negative one also indiacted if the string was not found
    if (code.indexOf("Arrow") === -1) return 
    // code returns ArrowDown, ArrowUp and suche, replacing the Arrow will shorten it down
    const direction = code.replace("Arrow", "")
  })
  return (
    <div
      style={{
        width: 32,
        height: 32,
        //url will automatically looking into public folder
        background: `url(/characters.png) -${offset.left} -${offset.top}`,
      }}
    />
  );
}
