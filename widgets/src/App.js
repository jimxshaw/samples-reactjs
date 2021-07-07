import React from 'react';
import Accordion from './components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a JavaScript frontend library'
  },
  {
    title: 'Why use React?',
    content: 'React is popular among engineers'
  },
  {
    title: 'How is React used?',
    content: 'React involves creating components'
  }
];

export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};