import SearchBar from './components/SearchBar';

function App() {
  const handleSubmit = (term) => {
    console.log('Searching for', term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
