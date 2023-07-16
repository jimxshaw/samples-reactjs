import useNavigationContext from "../hooks/use-navigation-context";

// The to prop is the navigation destination.
// The children will include text that will be inside the a tag.
function Link({ to, children }) {
  const { navigate } = useNavigationContext();

  const handleClick = (event) => {
    // If the user on MacOS presses the CMD key or
    // user on Windows presses the Ctrl key, let the browser
    // do the default behavior.
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // Crucial: this prevents total browser refresh.
    event.preventDefault();

    // Programmatically navigate to some route.
    navigate(to);
  };

  return (
    <a onClick={handleClick} href={to}>
      {children}
    </a>
  );
};

export default Link;
