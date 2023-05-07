import { useState, useEffect} from 'react';
import {  useSearchParams, useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./Movies.module.css";
import Loader from "../../components/Loader";
import MoviesList from "../../components/MoviesList";


const Movies = () => {  
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const[ isLoading, setIsLoading ]=useState(false);

    const location = useLocation();
    const query = searchParams.get("query")??"";

    useEffect(()=>{
       

        const fetchMovies=async()=>{
          setIsLoading(true);
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
          }   finally {
            setIsLoading(false);   
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

  {(isLoading) && 
      (<Loader visible={true}/>)}  

      {(query && !error && !isLoading)&&<MoviesList movies={movies} location={location}/>}
      {error && (
         <p>"Something went wrong((("</p>
        )}

     </div>
    )
};

export default Movies;