import Sidebar from './components/Sidebar';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage'
import DropDownPage from './pages/DropDownPage';
import ButtonPage from './pages/ButtonPage';

function App() {
  return (
    <div>
      <Sidebar />
      <div>
        <Route path="/">
          {/* Make this the index route. */}
          <DropDownPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
