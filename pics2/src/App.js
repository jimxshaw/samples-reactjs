import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';
import { useState } from 'react';

function App() {
  const [imageData, setImageData] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImageData(result);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={imageData} />
    </div>
  );
}

export default App;
