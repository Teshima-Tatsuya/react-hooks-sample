import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const dameCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      Count: {count}
      <p>
        <button onClick={addCount}>+1</button>
      </p>
      <p>
        <button onClick={dameCount}>+1かもしれない</button>
      </p>
      <p>
        <button onClick={resetCount}>reset</button>
      </p>
    </div>
  );
};

export default Counter;
