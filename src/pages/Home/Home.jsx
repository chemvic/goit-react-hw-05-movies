import { useState, useEffect} from 'react';
import { Link,  useParams, useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import css from "./Home.module.css";

const Home = ()=> {
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const fetchMovies=async()=>{
        //   setIsLoading(true);
          try {
            const movies= await API.fetchPopularMovies();
            
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
        
        fetchMovies();
    
      },[]);

    return(
<div>
    <h1>Trending today</h1>

    <ul>
          {movies.map(({original_title, id}) =>{
        return (
            <li key={id}>
            <Link to={`movies/${id}`} >
              {original_title}
            </Link>
          </li>   
        )
    })} 

    </ul>
{/* // state={{ from: location }} */}


</div>
    )
};

export default Home;