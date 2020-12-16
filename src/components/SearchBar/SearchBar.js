import './SearchBar.css'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import clientAxios from '../../config/Axios'

const SearchBar = ({dayHour}) =>
{
  const [search,setSearch]=useState('');
  const [courses,setCourses]=useState([])
  let tema=""
  if(dayHour>=7 && dayHour<19)
  {
    tema='claro';
  }else
  {
    tema='oscuro';
  }
  async function getCourses()
  {
    try
    {
      const response = await clientAxios.get("/courses")
      setCourses(response.data)
    }
    catch(error)
    {
      console.log(error.response);
    } 
  }
  const handleOnChange=e =>{
    setSearch(e.target.value);
    setCourses(getCourses())
    const results=courses.filter(course => search.toLowerCase()===course.name.toLowerCase().substring(0,search.length));
    console.log(results);
    
  }

  return(
  <div id="searchbar-container">
  <form id="searchbar-form" className={`searchbar-form-${tema} p-2`}>
    <label htmlFor="searchbar" className={`label-${tema} mr-2`}>
      <FaSearch size={25}/>
    </label>
    <input 
      onChange={handleOnChange}
      className={`searchbar-${tema}`}
      type="text"
      name="search" 
      value={search} 
      placeholder="Buscar" 
      id="searchbar" 
    />
  </form>
  </div>)
}

export default SearchBar
