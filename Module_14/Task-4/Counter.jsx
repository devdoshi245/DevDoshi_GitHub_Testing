import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter Example</h1>
      <hr />
      <h3>Current Count: {count}</h3>
      <button onClick={increaseCount}>Increment</button>
    </div>
  );
};

export default Counter
