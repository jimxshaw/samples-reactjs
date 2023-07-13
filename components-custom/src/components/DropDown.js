import { useState } from 'react';

function DropDown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // Put an arrow function in the setter to fix the rare
    // bug scenario where the current state value is dependent on
    // an old state value.
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value} onClick={handleOptionClick}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>
        Select...
      </div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default DropDown;
