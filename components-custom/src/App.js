import Button from './components/Button';
import { FaRegFutbol, FaRegHeart } from 'react-icons/fa6';

function App() {
  const handleClick = () => {
    console.log('click!!!');
  };

  const handleMouseOver = () => {
    console.log('mouse over!!!');
  };

  return (
    <div>
      <div>
        <Button>
          <FaRegFutbol />
          Confirm
        </Button>
      </div>
      <div>
        <Button primary
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          className="mb-5">
          Click Here
        </Button>
      </div>
      <div>
        <Button secondary>Buy It Now</Button>
      </div>
      <div>
        <Button success outline rounded>
          <FaRegHeart />
          Cancel
        </Button>
      </div>
      <div>
        <Button warning>Decline</Button>
      </div>
      <div>
        <Button danger>Delete</Button>
      </div>
      <div>
        <Button success rounded>Add to Cart</Button>
      </div>
      <div>
        <Button primary outline>Accept</Button>
      </div>
    </div>
  );
}

export default App;
