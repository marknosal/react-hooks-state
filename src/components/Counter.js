import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count)

  function increment() {
    console.log(count)
    setCount(count => count + 1);
    console.log(count)

    setCount((currentCount) => currentCount + 1);
    console.log(count)

  }

  return <button onClick={increment}>I have been clicked {count} times</button>;
}

export default Counter;
