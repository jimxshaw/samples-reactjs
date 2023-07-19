import useCounter from '../hooks/use-counter';
import Button from '../components/Button';

// General guidelines for creating Custom Hooks:
// - Find code in a component related to a single piece of state.
// - Copy paste it all into a helper function.
// - Fix all the broken references.
// - That's it, now we have a custom hook.
function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
