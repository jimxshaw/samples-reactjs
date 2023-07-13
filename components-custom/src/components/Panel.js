import classNames from 'classnames';

// Panel's purpose is to reduce duplicates in css styling
// across various components. The rest of the props
// could be event handlers for example.
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
