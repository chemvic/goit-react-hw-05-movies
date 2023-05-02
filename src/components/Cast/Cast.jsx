import {  useEffect, useState } from 'react';
import {  useParams, useLocation } from 'react-router-dom';

import API from "../../api/fetchMovies-api";
import css from "./Cast.module.css";

const Cast = () => {
    const [casts, setCast]= useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);

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
    <ul>
    {casts.map(cast=>{return(
        <li key={cast.id}>
            <img src={cast.profile_path} alt={cast.name} className={css.castImage}></img>
            <p>{cast.name}</p>
            <p>{cast.character}</p>
        </li>
    )})
    }
    </ul>
    
    );
};

export default Cast;