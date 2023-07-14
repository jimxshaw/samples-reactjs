import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function DropDown({ options, value, onChange }) {
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
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div key={option.value}
        onClick={() => handleOptionClick(option)}
        className="hover:bg-sky-100 rounded cursor-pointer p-1">
        {option.label}
      </div>
    );
  });

  return (
    <div className="w-48 relative">
      <Panel onClick={handleClick}
        className="flex justify-between items-center cursor-pointer">
        {/* If selection value is null or undefined, use the Select... text. */}
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {
        isOpen &&
        <Panel className="absolute top-full">
          {renderedOptions}
        </Panel>
      }
    </div>
  );
}

export default DropDown;
