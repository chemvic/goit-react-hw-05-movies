import { useState, useEffect} from 'react';
import { Link,  useSearchParams, useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./Movies.module.css";


const Movies = () => {  
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const location = useLocation();
    const query = searchParams.get("query")??"";

    useEffect(()=>{
       

        const fetchMovies=async()=>{
          try {
            const movies= await API.fetchMoviesByQuery(query);
            
            if (movies.data.results.length === 0) {
              return toast.error(
                "No movies by your query"
              );
            }
              setMovies( movies.data.results);
             
            
          } catch (error) {
           setError(error);
          } 
        }
           
          if(query===''){
            return;
          }
   
         fetchMovies();
   
      },[query]);

      const updateQueryString = (query) => {
        const params = query !== "" ? { query } : {};
        setSearchParams(params);
        setInputValue('');
      };
      // const handleSearch=()=>{
      //   updateQueryString(inputValue);
      // }
    
    return(
<div className={css.container}>
  <div className={css.inputBlock}>
<input
        type="text"
        value={inputValue}
        onChange={(e) =>setInputValue(e.target.value )}
      />
      <button type="button" className={css.inputBtn} onClick={()=>updateQueryString(inputValue)}>Search</button>
  </div>
  

      {(query)&&(<ul>
          {movies.map(({original_title, id}) =>{
        return (
            <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>   
        )
    })} 

    </ul>)
      }

     </div>
    )
};

export default Movies;