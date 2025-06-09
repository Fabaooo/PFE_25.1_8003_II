 
import { Link } from 'react-router-dom';
import './SearchBar.css'; // Import the CSS file for styling


function SearchBar() {
  return (
   

      <div className="search-bar">
        <input type="text" placeholder="Buscar eventos, artistas, locais..." />
        <button type="submit" aria-label="Buscar">🔍</button>
      </div>

     
  );
}

export default SearchBar;