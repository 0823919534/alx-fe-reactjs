import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: '10px', border: '1px solid #ddd', margin: '10px', borderRadius: '6px' }}>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '6px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: '6px' }}>Reset</button>
    </div>
  );
}
