import {  useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import css from "./Cast.module.css";
import Loader from "../Loader";

const Cast = () => {
    const [filmInfo, setFilmInfo]= useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    const[ isLoading, setIsLoading ]=useState(false);
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
    const movieInfo='credits';


    useEffect(()=>{

        const fetchCast= async() =>{
          setIsLoading(true);
          try {
            const filmInfo= await API.fetchInfoById(movieId, movieInfo );
          
            setFilmInfo(filmInfo.data.cast);
            
          } 
          catch (error) {
           setError(error);
          } finally {
            setIsLoading(false);    
         }
        }
        
        fetchCast();
       
      },[movieId]);

     
    return(
        <>
        {(isLoading) && 
      (<Loader visible={true}/>)}
        {(filmInfo.length===0 && !error&& !isLoading)? <p>We don`t have any casts for this movie</p> :    <ul>
    {filmInfo.map(cast=>{return(
        <li key={cast.id}>
            <img src={IMAGES_BASE_URL + cast.profile_path} alt={cast.name} className={css.castImage}></img>
            <p>{cast.name}</p>
            <p>{cast.character}</p>
        </li>
    )})
    }
    </ul>}
    {error && (
         <p>"Something went wrong((("</p>
        )}
        </>

    
    );
};

export default Cast;