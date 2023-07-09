import PropTypes from 'prop-types';

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
  return (
    <button>{children}</button>
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
