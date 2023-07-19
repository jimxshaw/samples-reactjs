import { useState } from 'react';
import Table from './Table';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

function SortableTable(props) {
  // Null means unsorted.
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  // Do not modify config itself. Use the config
  // as a basis of a new set of objects using map.
  const { config, data } = props;

  const handleClick = (label) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      // Just return the column if it's not sortable.
      return column;
    }

    // Return all the columns but with an added header function.
    return {
      ...column,
      header: () => (
        <th onClick={() => handleClick(column.label)} className="cursor-pointer hover:bg-gray-100">
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      )
    };
  });


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

  return (
    // There's already a config in props but since we're also passing
    // in updateConfig after, updatedConfig overrides the prior config.
    <Table {...props} data={sortedData} config={updatedConfig} />
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoTriangleUp />
        <GoTriangleDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoTriangleUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoTriangleDown />
      </div>
    );
  }
}

export default SortableTable;
