import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./MovieDetails.module.css";

const MovieDetails = () => {
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/');
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [error, setError] = useState(null);
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
   

    useEffect(()=>{

        const fetchMovie= async() =>{
           
          try {
            const movie= await API.fetchMoviesById(movieId);
            
            if (movie === {}) {
              return toast.error(
                "No images by your query"
              );
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

        const { genres, original_title,vote_average, overview, poster_path  } = movie;
   
        return(

        <>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        <img src={IMAGES_BASE_URL + poster_path} alt={original_title}/>

        <h1> {original_title}</h1>
        <p>User score: {Math.round(vote_average*10)}%</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        {(genres)&&<p>{(genres).map(genre=>genre.name).join(", ")}</p>}
        

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