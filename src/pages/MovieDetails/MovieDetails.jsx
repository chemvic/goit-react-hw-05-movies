import { Suspense, useRef, useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "./MovieDetails.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";


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
          } 
        }
        if(movieId===''){
            return;
          }
     
        fetchMovie();
    
      },[movieId]);

        const { genres, original_title,vote_average, overview, poster_path  } = movie;
   
        return(

        <div className={css.container}>
        <div className={css.informationMain}>
            <div className={css.movieImageBlock}>
              
        <FaLongArrowAltLeft style={{color: "#0077cc",}}/><Link to={backLinkLocationRef.current} className={css.backBtn}>Go back</Link>
             
          
        <img src={IMAGES_BASE_URL + poster_path} alt={original_title} className={css.movieImage}/>
            </div>

            <div className={css.infoBlock}>
                 <h1> {original_title}</h1>
        <p>User score: {Math.round(vote_average*10)}%</p>
        
         {(overview!=='')&&<> <h2>Overview</h2>
    <p>{overview}</p></>}
        {(genres)&&<><h3>Genres</h3> <p>{(genres).map(genre=>genre.name).join(", ")}</p></>}
            </div>        

       
        </div>
        <div className={css.informationAdd}>
            <h4>Additional information</h4>
           <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        </div>
        <Suspense fallback={<div>LOADING ADDITIONAL INFORMATION...</div>}>
          <Outlet />
        </Suspense>  
        
        {error && (
         <p>"Something went wrong((("</p>
        )}
      
        

       
      </div>
    )
};

export default MovieDetails;