import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'

const SearchBar = () =>
{
    return(
    <div id="searchbar-container">
    <form id="searchbar-form">
      <label for="searchbar">
        <FaSearch size={25}/>
      </label>
      <input type="text" value="" placeholder="Buscar" class="" id="searchbar" />
    </form>
    </div>)
}

export default SearchBar
