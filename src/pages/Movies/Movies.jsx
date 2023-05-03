import { useState, useEffect} from 'react';
import { Link,  useSearchParams, useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import css from "./Movies.module.css";


const Movies = () => {  
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();
    const query = searchParams.get("query");

    useEffect(()=>{
       

        const fetchMovies=async()=>{
        //   setIsLoading(true);
          try {
            const movies= await API.fetchMoviesByQuery(query);
            
            if (movies.data.results.length === 0) {
                alert("No images by your query");
            //   return toast.error(
            //     "No images by your query"
            //   );
            }
              setMovies( movies.data.results);
             
            
          } catch (error) {
           setError(error);
          } finally {
        //    setIsLoading(false);   
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
<div>
<input
        type="text"
        value={query}
        // onChange={e => setSearchParams({ query: e.target.value })}
        onChange={e => updateQueryString(e.target.value )}
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