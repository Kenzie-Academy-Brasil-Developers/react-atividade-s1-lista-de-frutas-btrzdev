import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  const setFruitsFilter = () => {
    setFruits(filterRedFruits);
  };
  const totalPrice = fruits.reduce((valueBefore, actualValue) => {
    return actualValue.price + valueBefore;
  }, 0);

  const fruitsName = fruits.map((fruit) => {
    return `${fruit.name}  `;
  });
  const filterRedFruits = fruits.filter((fruits) => {
    return fruits.color === "red";
  });
  return (
    <div className="App">
      <header className="App-header">
        <p> {totalPrice} R$</p>
        <p>{fruitsName}</p>
        <button onClick={setFruitsFilter}> Filtrar</button>
      </header>
    </div>
  );
}

export default App;
