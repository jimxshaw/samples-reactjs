import Table from "./Table";

function SortableTable(props) {
  // Do not modify config itself. Use the config
  // as a basis of a new set of objects using map.
  const { config } = props;

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      // Just return the column if it's not sortable.
      return column;
    }

    // Return all the columns but with an added header function.
    return {
      ...column,
      header: () => <th>{column.label} IS SORTABLE</th>
    };
  });

  return (
    // There's already a config in props but since we're also passing
    // in updateConfig after, updatedConfig overrides the prior config.
    <Table {...props} config={updatedConfig} />
  );
}

export default SortableTable;
