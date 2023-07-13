import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'sjf983f',
      label: 'Hello',
      content: 'Greetings to you all. Greetings to you all. Greetings to you all. Greetings to you all. Greetings to you all.'
    },
    {
      id: 'jv0893',
      label: 'Goodbye',
      content: 'See you all soon! See you all soon! See you all soon! See you all soon! See you all soon! See you all soon!'
    },
    {
      id: '38fjk4rh98',
      label: 'Welcome',
      content: 'Thank you for joining us. Thank you for joining us.Thank you for joining us.Thank you for joining us.Thank you for joining us.'
    }
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
