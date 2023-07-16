import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  // Upon application startup, we immediately know what the user's path is.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Watch for the popstate event on the window object.
    // Whenever the user clicks the browser Forward or Back button this
    // handler will be called. Find the current address to update the
    // state which will cause the component to re-render.
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    // Clean up the handler in the scenario this component is
    // removed from the screen.
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{}}>
      {currentPath}
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
