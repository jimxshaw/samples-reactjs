import Button from './Button';

function App() {
  return (
    <div>
      <div>
        <Button>Confirm</Button>
      </div>
      <div>
        <Button primary>Click Here</Button>
      </div>
      <div>
        <Button secondary>Buy It Now</Button>
      </div>
      <div>
        <Button success>Cancel</Button>
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
