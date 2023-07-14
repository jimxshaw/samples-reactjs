import { useState, useEffect, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function DropDown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  // Wherever divElement is assigned to ref the following
  // return { current: <actual reference to the div element> }.
  const divElement = useRef();

  useEffect(() => {
    const handler = (event) => {
      // Captures the scenario if the dev element is not there, 
      // meaning the ref is not set.
      if (!divElement.current) {
        return;
      }

      // If the user clicked outside the Drop Down then
      // set isOpen to false.
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Listen for clicks on the Capture Phase.
    document.addEventListener('click', handler, true);

    // Cleanup function that will be called moments before
    // the Drop Down is removed from the screen.
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

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
    <div ref={divElement} className="w-48 relative">
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
