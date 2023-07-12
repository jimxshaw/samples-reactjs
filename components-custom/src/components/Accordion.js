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
    const conditionalContent = isExpanded && <div>{item.content}</div>;

    const icon = <span>
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>;

    return (
      <div key={item.id}>
        {/* If an event handler is needed inside a mapping function then 
            use this an arrow function with the handler that's on the outside of map. */}
        <div onClick={() => handleClick(index)}>
          {icon}
          {item.label}
        </div>
        <div>
          {conditionalContent}
        </div>
      </div>
    );
  });

  return (
    <div>
      {renderedItems}
    </div>
  );
}

export default Accordion;
