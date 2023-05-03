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
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
   

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
        //  setGenres(movie.genres.map(genre=>genre.name)); 
        // genresMaking();
        

          } 
          catch (error) {
           setError(error);
          } finally { 

     }     

        }
        // const genresMaking=()=>{
        // const genresArr =movie.genres.map(genre=>genre.name).join(", ");
        // setGenres(genresArr);
        // }
        fetchMovie();
    
      },[movieId]);

                        // const genres=async() =>{return await((movie.genres).map(genre=>genre.name).join(", "))}; 

                        // const { genres } = movie;
    return(

        <>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        <img src={IMAGES_BASE_URL + movie.poster_path} alt={movie.original_title}/>

        <h1> {movie.original_title}</h1>
        <p>User score: {movie.vote_average*10}%</p>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        {(movie.genres)&&<p>{(movie.genres).map(genre=>genre.name).join(", ")}</p>}
        

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