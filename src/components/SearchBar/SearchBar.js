import './SearchBar.css'
import {useState , useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import clientAxios from '../../config/Axios'

const SearchBar = ({dayHour}) =>
{
  const [search,setSearch]=useState('');
  const [courses,setCourses]=useState([]);
  const [result,setResult]=useState([]);
  let tema=""
  if(dayHour>=7 && dayHour<19)
  {
    tema='claro';
  }else
  {
    tema='oscuro';
  }
 
  useEffect(async ()=>{
    try
    {
      const response = await clientAxios.get("/courses")
      setCourses(response.data)
    }
    catch(error)
    {
      console.log(error.response);
    }
  },[])
  useEffect(() => {

  }, [search])
  const handleOnChange= e =>{
    setSearch(e.target.value);
  }
  const handleOnKeyUp =async e =>
  {
    if(search.length > 2)
    {
      const results= courses.filter(course => course.name.toLowerCase().includes(search.toLowerCase()));
      setResult(results);
      console.log(result);
    }
  }

  return(
  <div id="searchbar-container">
  <form id="searchbar-form" className={`searchbar-form-${tema} p-2`}>
    <label htmlFor="searchbar" className={`label-${tema} mr-2`}>
      <FaSearch size={25}/>
    </label>
    <input 
      onChange={handleOnChange}
      onKeyUp={handleOnKeyUp}
      className={`searchbar-${tema}`}
      type="text"
      name="search" 
      value={search} 
      placeholder="Buscar" 
      id="searchbar" 
    />
  </form>
  <div className='container-favs'>
    {
      result.length <= 0
      ? null
      : (
        result.map((resul,index)=>
          <li className='container-result' >
            <div className='result-icon'>
              <FaSearch/>
            </div>
            <div className='result-name'>
              <b key={index}>{resul.name}</b>
            </div>
          </li>
        )
      )
    }
  </div>
  </div>)
}

export default SearchBar
