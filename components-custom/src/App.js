import DropDown from "./components/DropDown";

function App() {
  const options = [
    { label: 'Green', value: 'green' },
    { label: 'Purple', value: 'purple' },
    { label: 'Yellow', value: 'yellow' },
  ];

  return (
    <div>
      <DropDown options={options} />
    </div>
  );
}

export default App;
