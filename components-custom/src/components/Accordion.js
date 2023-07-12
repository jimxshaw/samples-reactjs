import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    // The first argument in the function that gets passed into a 
    // state setter will be the most up-to-date/current piece of state.
    // This setting with a function approach is needed in the rare scenario 
    // where a Bug appears when dealing with a stale/non-current piece of state.
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        // Collapse the currently opened card.
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // || gives back the first truthy value
    // && gives back the first falsey value, if exists, or the last truthy value.
    const conditionalContent = isExpanded && <div className="border-b p-5">{item.content}</div>;

    const icon = <span className="text-2xl">
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>;

    return (
      <div key={item.id}>
        {/* If an event handler is needed inside a mapping function then 
            use this an arrow function with the handler that's on the outside of map. */}
        <div onClick={() => handleClick(index)} className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer">
          {item.label}
          {icon}
        </div>
        <div>
          {conditionalContent}
        </div>
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">
      {renderedItems}
    </div>
  );
}

export default Accordion;
