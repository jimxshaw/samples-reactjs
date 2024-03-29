import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'dog', 'gator', 'horse', 'cow'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // Get a random animal and append it to the array.
    setAnimals([...animals, getRandomAnimal()]);
  };

  // Map animals array to create an array of components.
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
