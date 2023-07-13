import { useState } from 'react';

function DropDown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Put an arrow function in the setter to fix the rare
    // bug scenario where the current state value is dependent on
    // an old state value.
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    // Close drop down.
    setIsOpen(false);

    // Determine which option was clicked.
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>
        {/* If selection is null or undefined, use the Select... text. */}
        {selection?.label || 'Select...'}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default DropDown;
