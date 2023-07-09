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

export default Button;
