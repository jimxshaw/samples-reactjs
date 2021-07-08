import React, {useState} from 'react';

const Accordion = ({items}) => {
  // Array destructuring: we're getting back 2 elements when
  // calling useState. The first element is the piece of variable
  // that will change over time. The second element is a function
  // we call to update a piece of state. Calling the second element
  // will automatically cause the component to re-render.
  // useState takes in a default value argument for 
  // that piece of state.
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    return (
    <React.Fragment key={item.title}>
      <div 
        className="title active"
        onClick={() => onTitleClick(index)}
      >
        <i className="dropdown icon" />
        {item.title}
      </div>
      <div className="content active">
        <p>
          {item.content}
        </p>
      </div>
    </React.Fragment>);
  });

  return (
  <div className="ui styled accordion">
    {renderedItems}
    <h1>{activeIndex}</h1>
  </div>
    );
};

export default Accordion;