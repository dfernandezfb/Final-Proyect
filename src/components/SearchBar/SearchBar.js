import './SearchBar.css'
import {useState , useEffect} from 'react'
import {FaSearch} from 'react-icons/fa'
import clientAxios from '../../config/Axios'
import {Link} from 'react-router-dom'

const SearchBar = () =>
{
  const [search,setSearch]=useState('');
  const [result,setResult]=useState([]);

  const handleOnChange= e =>{
    setSearch(e.target.value);
  }
  useEffect(()=>{
    const getResults = async ()=>{
      const results = await clientAxios(`/courses/search/${search.replace(/ /g,'_')}`)
      setResult(results.data)
    }
    if(search.length>2)
    {
      getResults()
    }else{
      setResult([])
    }
  },[search])
  

  return(
  <div id="searchbar-container">
  <form id="searchbar-form" className={`searchbar-form-claro`}>
    <label htmlFor="searchbar" className={`label-claro`}>
      <FaSearch size={25}/>
    </label>
    <input 
      onChange={handleOnChange}
      className={`searchbar-claro`}
      type="text"
      name="search" 
      value={search} 
      placeholder="Buscar" 
      id="searchbar" 
      autoComplete='off'
    />
  </form>
  <div className={`container-results-claro`}>
    {
      result.length === 0
      ? null
      : (
        result.map((resul,index)=>
          <li key={index} className='container-result' >
            <div className='result-icon text-center'>
              <img src={resul.image} alt='imagen' className='img-result'/>
            </div>
            <div className='result-name'>
              <Link to={`/courses/detail/${resul._id}`} className='result-link'> {resul.name}</Link>
            </div>
          </li>
        )
      )
    }
  </div>
  </div>)
}

export default SearchBar
