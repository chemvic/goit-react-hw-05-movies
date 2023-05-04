import { useState, useEffect} from 'react';
import { Link,  useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./Home.module.css";

const Home = ()=> {
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(()=>{

        const fetchMovies=async()=>{
          try {
            const movies= await API.fetchPopularMovies();
            
            if (movies.data.results.length === 0) {
              return toast.error(
                "No images by your query"
              );
            }
              setMovies( movies.data.results);
             
            
          } catch (error) {
           setError(error);
          } finally {
     }
        }
        
        fetchMovies();
    
      },[]);

    return(
<div>
    <h1>Trending today</h1>
   
    <ul>
          {movies.map(({original_title, id}) =>{
        return (
            <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>   
        )
    })} 

    </ul>



</div>
    )
};

export default Home;