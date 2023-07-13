import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  // By default nothing should be selected in the drop down.
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: 'Green', value: 'green' },
    { label: 'Purple', value: 'purple' },
    { label: 'Yellow', value: 'yellow' },
  ];

  return (
    <div>
      <DropDown options={options} selection={selection} onSelect={handleSelect} />
    </div>
  );
}

export default App;
