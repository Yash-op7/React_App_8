import { useState } from "react";
import "./App.css";

const Person = (props) => {
  return (
    <div>
      <h1>name: {props.name}</h1>
      <h2>age: {props.age}</h2>
      <h3>favoriteColor: {props.favoriteColor}</h3>
    </div>
  );
};

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => alert("my balls! ")}>-</button>
      <h1>0</h1>
      <button>+</button>
    </div>
  );
};

export default App;
