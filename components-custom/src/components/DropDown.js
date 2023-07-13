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

  let content = 'Select...';
  // Check if selection is null or has a value.
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={handleClick}>
        {content}
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default DropDown;
