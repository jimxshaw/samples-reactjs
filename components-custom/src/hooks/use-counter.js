import { useState, useEffect } from 'react';

// General guidelines for creating Custom Hooks:
// - Find code in a component related to a single piece of state.
// - Copy paste it all into a helper function.
// - Fix all the broken references.
// - That's it, now we have a custom hook.
function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return {
    count,
    increment
  };
}

export default useCounter;
