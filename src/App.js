import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './Components/FoodBox.js';

function App() {
  const [food, setfoods] = useState(foods)
  return (
    <div className="App">
      {food.map((thefood) =>
        <div>
          <p>{thefood.name}</p>
          <img src={thefood.image} width="10%" />
        </div>
      )}
      <FoodBox food={{
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
    </div>

  );
}

export default App;
