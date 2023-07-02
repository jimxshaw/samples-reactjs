import { useState } from 'react';

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

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <div>{animals}</div>
    </div>
  );
}

export default App;
