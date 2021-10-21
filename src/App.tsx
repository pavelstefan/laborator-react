import './App.css';
import { useState } from 'react';
import Button from './Button';

const food = ['pizza', 'salata', 'ciocolata'];

function App() {
  const [val, setVal] = useState(0);
  const add = () => {
    const copy = val + 1;
    setVal(copy);
  }
  const substract = () => {
    setVal(val - 1);
  }

  return (
    <div className="App">
      <p>value: {val}</p>
      <Button onPress={add} label="add">+</Button>
      <Button onPress={substract} label="substract">-</Button>
      <div>
        {food.map((str) => <Button key={str} label={str} />)}
      </div>
    </div>
  );
}

export default App;
