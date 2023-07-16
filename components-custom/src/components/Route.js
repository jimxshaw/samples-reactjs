import useNavigationContext from "../hooks/use-navigation-context";

function Route({ path, children }) {
  const { currentPath } = useNavigationContext();

  if (path === currentPath) {
    return children;
  }

  // We want to do nothing if another condition happens.
  return null;
}

export default Route;
