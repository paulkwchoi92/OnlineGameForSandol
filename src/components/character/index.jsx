import React from "react";

export default function Character() {
  //increment left by 32 to swithc off between characters
  // girl character = 96
  const offset = { top: 0, left: 0 };
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
