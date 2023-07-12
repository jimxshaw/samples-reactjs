import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex) => {
    setExpandedIndex(nextIndex);
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
