import React, { useRef, useState } from "react";
import "./App.css";

const App = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  // function for addition
  const plus = (e) => {
    e.preventDefault();
    const num = inputRef.current.value;
    console.log(parseFloat(num));
    setResult((result) => {
      return result + Number(inputRef.current.value);
    });
  };

    // function for subtraction
    const minus = (e) => {
      e.preventDefault();
      const num = inputRef.current.value;
      console.log(parseFloat(num));
      setResult((result) => {
        return result - Number(inputRef.current.value);
      });
    };

    // function for multiplication
    const times = (e) => {
      e.preventDefault();
      const num = inputRef.current.value;
      console.log(parseFloat(num));
      setResult((result) => {
        return result * Number(inputRef.current.value);
      });
    };

    // function for division
    const divide = (e) => {
      e.preventDefault();
      const num = inputRef.current.value;
      console.log(parseFloat(num));
      setResult((result) => {
        return result / Number(inputRef.current.value);
      });
    };

    // reset input field
    const resetInput = (e) => {
      e.preventDefault();
      inputRef.current.value = 0;
    };

    // reset result 
    const restResult = (e) =>{
      e.preventDefault();
      setResult((result) => result * 0);
      inputRef.current.value = 0;
    }

  console.log(result);

  return (
    <div>
      <h2>React Calculator</h2>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          type="number"
          ref={inputRef}
          name="number"
          id="number"
          pattern="[0-9]"
          placeholder="Type a number"
        />
        <br />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput} className="btn1">Reset input</button>
        <button onClick={restResult} className="btn2">Reset result</button>
      </form>
    </div>
  );
};

export default App;
