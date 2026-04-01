"use client";

import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
}

export default Count;
