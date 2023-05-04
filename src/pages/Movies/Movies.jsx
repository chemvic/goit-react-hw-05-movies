import { useState, useEffect} from 'react';
import { Link,  useSearchParams, useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import { toast } from 'react-toastify';
// import debounce from 'lodash.debounce';
import 'react-toastify/dist/ReactToastify.css';
import css from "./Movies.module.css";


const Movies = () => {  
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();
    const query = searchParams.get("query")??"";

    useEffect(()=>{
       

        const fetchMovies=async()=>{
          try {
            const movies= await API.fetchMoviesByQuery(query);
            
            if (movies.data.results.length === 0) {
              return toast.error(
                "No images by your query"
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
      };
    
    return(
<div className={css.container}>
<input
        type="text"
        value={query}
        onChange={(e) => updateQueryString(e.target.value )}


      />

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