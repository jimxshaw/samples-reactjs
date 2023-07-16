import { useContext } from "react";
import NavigationContext from "../context/Navigation";

// The to prop is the navigation destination.
// The children will include text that will be inside the a tag.
function Link({ to, children }) {
  const { navigation } = useContext(NavigationContext);

  const handleClick = (event) => {
    // Crucial: this prevents total browser refresh.
    event.preventDefault();

    // Programmatically navigate to some route.
    navigation(to);
  };

  return (
    <a onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
