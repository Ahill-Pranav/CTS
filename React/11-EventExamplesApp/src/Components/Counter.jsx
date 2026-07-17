import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementValue() {
    setCount(count + 1);
  }

  function decrementValue() {
    setCount(count - 1);
  }

  function sayHello() {
    alert("Hello! Welcome to React Events.");
  }

  function incrementAndHello() {
    incrementValue();
    sayHello();
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleSyntheticEvent(event) {
    alert("I was clicked");
    console.log(event);
  }

  return (
    <div>
      <h2>Counter Application</h2>

      <h3>Count: {count}</h3>

      <button onClick={incrementAndHello}>
        Increment
      </button>

      <button onClick={decrementValue} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <br />
      <br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br />
      <br />

      <button onClick={handleSyntheticEvent}>
        Synthetic Event (OnPress)
      </button>
    </div>
  );
}

export default Counter;