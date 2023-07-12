import { useState } from 'react';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // || gives back the first truthy value
    // && gives back the first falsey value, if exists, or the last truthy value.
    const conditionalContent = isExpanded && <div>{item.content}</div>;

    return (
      <div key={item.id}>
        <div onClick={() => setExpandedIndex(index)}>
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
