"use client";

import { useState } from "react";

const Number = () => {
  const [count, setCount] = useState(0);
  console.log("Counter section");
  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default Number;
