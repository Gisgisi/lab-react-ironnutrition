import logo from './logo.svg';
import './App.css';
import foodData from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox.js';
import { Card, Col, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm.js'


function App() {
  const [food, setfoods] = useState(foodData)
  return (
    <div className="App">
      <AddFoodForm food={food} setfoods={setfoods}/>
      {food.map((foodie) =>
        <FoodBox
          title={foodie.name}
          calories={foodie.calories}
          image={foodie.image}
          servings={foodie.servings}
        />
      )}

    </div>

  );
}

export default App;
