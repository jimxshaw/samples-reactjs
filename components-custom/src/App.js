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
    <div className="flex">
      {/* Naming convention says form control prop names should be value and onChange. */}
      <DropDown options={options} value={selection} onChange={handleSelect} />
      <DropDown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;
