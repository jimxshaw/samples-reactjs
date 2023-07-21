import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

// Reducer: no async/await, no requests,
// no promises, no outside variables.
const reducer = (state, action) => {
  // Whatever gets returned will be 
  // the new state!
  // If nothing if returned then the
  // new state will be UNDEFINED.
  // Never directly assign values to state properties.
  // Instead, always use the update approaches here:
  // https://state-updates.vercel.app/
  return {
    ...state,
    count: state.count + 1
  };
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    dispatch();
  };

  const decrement = () => {
    //setCount(count - 1);
  };

  const handleChange = (event) => {
    // If the value is ever NaN then just assign a zero.
    const value = parseInt(event.target.value) || 0;

    //setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //setCount(count + valueToAdd);
    //setValueToAdd(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>
          Increment
        </Button>
        <Button onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add much more!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300" />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
