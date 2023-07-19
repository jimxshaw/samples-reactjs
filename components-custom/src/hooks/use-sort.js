import { useState } from 'react';

// General guidelines for creating Custom Hooks:
// - Find code in a component related to a single piece of state.
// - Copy paste it all into a helper function.
// - Fix all the broken references.
// - That's it, now we have a custom hook.
function useSort(config, data) {
  // Null means unsorted.
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    // Clicking a sort header and then clicking 
    // another sort header.
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;

  // Only sort data if sortOrder && sortBy are not null.
  if (sortOrder && sortBy) {
    // Find the correct sort value function and use it for sorting.
    const { sortValue } = config.find(column => column.label === sortBy);

    // Make a copy of the 'data' prop because we do not EVER want to
    // modify an existing prop (sort will modify the original 'data' array).
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortBy,
    sortOrder,
    sortedData,
    setSortColumn
  };
}

export default useSort;
