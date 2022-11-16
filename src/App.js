import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setfoods] = useState(foods)
  return (
    <div className="App">
        {food.map((thefood) => 
          <div>         
            <p>{thefood.name}</p>
            <img src={thefood.image}/>
          </div>
        )}
    </div>
  );
}

export default App;
