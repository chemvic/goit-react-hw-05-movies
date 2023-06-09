import { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./Home.module.css";
import Loader from "../../components/Loader";
import MoviesList from "../../components/MoviesList";

const Home = ()=> {
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const[ isLoading, setIsLoading ]=useState(false);
    const location = useLocation();

    useEffect(()=>{

        const fetchMovies=async()=>{
          
          try {setIsLoading(true);
         
            const movies= await API.fetchPopularMovies();
            
            if (movies.data.results.length === 0) {
              return toast.error(
                "No popular movies in the database"
              );
            }
              setMovies( movies.data.results);
             
            
          } catch (error) {
           setError(error);
          } finally {
            setIsLoading(false); 
            
     }
        }
        
        fetchMovies();
    
      },[]);

    return(
<div className={css.container}>
    <h1>Trending today</h1>

    {(isLoading) && 
      (<Loader visible={true}/>)}
   {(movies.length>0 && !error && !isLoading)&&<MoviesList movies={movies} location={location}/>}    
    {error && (
         <p>"Something went wrong((("</p>
        )}
</div>
    )
};

export default Home;