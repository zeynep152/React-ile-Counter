import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setCount(count + step);
  };

  const decrease = () => {
    setCount(count - step);
  };

  const stepChange = (event) => {
    setStep(Number(event.target.value));
  };
  
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <input 
          value={step} 
          onChange={stepChange}>
        </input>
      </div>
    </div>
  );
}

export default App;
