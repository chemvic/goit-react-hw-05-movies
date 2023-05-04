import {  useEffect, useState, Suspense } from 'react';
import {  useParams, useLocation } from 'react-router-dom';

import API from "../../api/fetchMovies-api";
import css from "./Cast.module.css";

const Cast = () => {
    const [casts, setCast]= useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';


    useEffect(()=>{

        const fetchCast= async() =>{
           
          try {
            const casts= await API.fetchCastById(movieId);
            
            if (casts.data.cast === []) {
                alert("No cast by ID");
            //   return toast.error(
            //     "No images by your query"
            //   );
            }
              setCast(casts.data.cast);
            
          } 
          catch (error) {
           setError(error);
          } finally {

     }    
        }
        
        fetchCast();
       
      },[movieId]);

     
    return(
        <>
        {(casts.length===0)? <p>We don`t have any casts for this movie</p> :    <ul>
    {casts.map(cast=>{return(
        <li key={cast.id}>
            <img src={IMAGES_BASE_URL + cast.profile_path} alt={cast.name} className={css.castImage}></img>
            <p>{cast.name}</p>
            <p>{cast.character}</p>
        </li>
    )})
    }
    </ul>}
        </>

    
    );
};

export default Cast;