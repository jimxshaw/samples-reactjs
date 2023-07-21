import { produce } from 'immer';
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

// Action Types
const INCREMENT = 'increment-count';
const DECREMENT = 'decrement-count';
const CHANGE_VALUE = 'change-value-to-add';
const RESET_VALUE = 'reset-value-to-add';
const SUM_COUNT_AND_VALUE = 'sum-count-and-value-to-add';

// Reducer: no async/await, no requests,
// no promises, no outside variables.
const reducer = (state, action) => {
  // Whatever gets returned will be 
  // the new state!
  // If nothing if returned then the
  // new state will be UNDEFINED.
  // With Immer, you can directly assign values to state properties.
  // Without Immer, always use the update approaches here:
  // https://state-updates.vercel.app/

  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;
    case DECREMENT:
      state.count = state.count - 1;
      return;
    case CHANGE_VALUE:
      state.valueToAdd = action.payload;
      return;
    case SUM_COUNT_AND_VALUE:
      state.count = state.count + state.valueToAdd;
      return;
    case RESET_VALUE:
      state.valueToAdd = action.payload;
      return;
    default:
      return state;
  }
};

function CounterWithImmerPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  // Use Immer by wrapping produce around reducer.
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0
  });

  const increment = () => {
    dispatch({
      type: INCREMENT
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT
    });
  };

  const handleChange = (event) => {
    // If the value is ever NaN then just assign a zero.
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: CHANGE_VALUE,
      payload: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //setCount(count + valueToAdd);
    //setValueToAdd(0);
    dispatch({
      type: SUM_COUNT_AND_VALUE
    });

    dispatch({
      type: RESET_VALUE,
      payload: 0
    });
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

export default CounterWithImmerPage;
