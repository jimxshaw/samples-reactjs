import Table from "../components/Table";

function TablePage() {
  const data = [
    { id: 4, name: 'Apple', color: 'bg-red-500', score: 5 },
    { id: 3, name: 'Orange', color: 'bg-orange-500', score: 3 },
    { id: 2, name: 'Banana', color: 'bg-yellow-500', score: 4 },
    { id: 1, name: 'Grape', color: 'bg-purple-500', score: 7 },
    { id: 5, name: 'Pear', color: 'bg-green-500', score: 9 }
  ];

  const config = [
    { label: 'Name' },
    { label: 'Color' },
    { label: 'Score' },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;
