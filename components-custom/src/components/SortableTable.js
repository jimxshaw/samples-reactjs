import useSort from '../hooks/use-sort';
import Table from './Table';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

function SortableTable(props) {
  // Do not modify config itself. Use the config
  // as a basis of a new set of objects using map.
  const { config, data } = props;

  // General guidelines for creating Custom Hooks:
  // - Find code in a component related to a single piece of state.
  // - Copy paste it all into a helper function.
  // - Fix all the broken references.
  // - That's it, now we have a custom hook.
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(config, data);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      // Just return the column if it's not sortable.
      return column;
    }

    // Return all the columns but with an added header function.
    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column.label)} className="cursor-pointer hover:bg-gray-100">
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      )
    };
  });

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
