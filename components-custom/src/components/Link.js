import useNavigationContext from "../hooks/use-navigation-context";

// The to prop is the navigation destination.
// The children will include text that will be inside the a tag.
function Link({ to, children }) {
  const { navigate } = useNavigationContext();

  const handleClick = (event) => {
    // Crucial: this prevents total browser refresh.
    event.preventDefault();

    // Programmatically navigate to some route.
    navigate(to);
  };

  return (
    <a onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
