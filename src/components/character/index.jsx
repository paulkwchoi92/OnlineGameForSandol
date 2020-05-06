import React from "react";

export default function Character() {
  const offset = { top: 0, left: 0}
  return (
    <div
      style={{ width: 32, height: 32, background: `url(/characters.prng) -${offset.left} -${offset.top}` }}
    />
  );
}
