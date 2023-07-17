import Table from "../components/Table";

function TablePage() {
  const data = [
    { name: 'Apple', color: 'bg-red-500', score: 5 },
    { name: 'Orange', color: 'bg-orange-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 4 },
    { name: 'Grape', color: 'bg-purple-500', score: 7 },
    { name: 'Pear', color: 'bg-green-500', score: 9 }
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
