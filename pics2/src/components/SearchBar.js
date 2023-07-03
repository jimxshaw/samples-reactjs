function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit('dogs');
  };

  return (
    <div>
      <input />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
