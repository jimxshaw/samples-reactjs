import className from 'classnames';

// The prop children is a React keyword.
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  // If class names conflict with one another then
  // the later class name will take over.
  const classes = className('flex item-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500': primary,
    'border-gray-900 bg-gray-900': secondary,
    'border-green-500 bg-green-500': success,
    'border-yellow-400 bg-yellow-400': warning,
    'border-red-500 bg-red-500': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    "text-white":
      !outline && (primary || secondary || success || warning || danger),
    'text-blue-500': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-400': outline && warning,
    'text-red-500': outline && danger
  });

  return (
    <button className={classes}>{children}</button>
  );
}

Button.propTypes = {
  checkVariationValue: ({
    primary,
    secondary,
    success,
    warning,
    danger
  }) => {
    // Button component should only ever have one of these props.
    // Covert the prop values into numbers and if they > 1 then
    // trigger this validation rule.
    // Possible values are true, false, undefined (if not included).
    const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!success)
      + Number(!!warning)
      + Number(!!danger);

    if (count > 1) {
      return new Error('Only one of primary, second, success, warning or danger can be true');
    }
  }
};

export default Button;
