import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";

import css from "./MovieDetails.module.css";

const MovieDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);
    // const [genres, setGenres]= useState('');
   

    useEffect(()=>{

        const fetchMovie= async() =>{
           
          try {
            const movie= await API.fetchMoviesById(movieId);
            
            if (movie === {}) {
                alert("No images by ID");
            //   return toast.error(
            //     "No images by your query"
            //   );
            }
              setMovie(movie.data);
            
          } 
          catch (error) {
           setError(error);
          } finally {

     }     

        }
        
        fetchMovie();
    
      },[movieId]);

                        // const genres=async() =>{return await((movie.genres).map(genre=>genre.name).join(", "))}; 


    return(

        <>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        <img src={movie.poster_path} alt={movie.original_title}/>

        <h1> {movie.original_title}</h1>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>genres</p>

        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>LOADING ADDITIONAL INFORMATION...</div>}>
          <Outlet />
        </Suspense>
      </>
    )
};

export default MovieDetails;