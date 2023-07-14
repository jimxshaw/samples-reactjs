import classNames from 'classnames';

// Panel's purpose is to reduce duplicates in css styling
// across various components by having some default styling.
// It also allows additional styling to be passed in as props. 
// The ...rest could be event handlers for example.
function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  )

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;
