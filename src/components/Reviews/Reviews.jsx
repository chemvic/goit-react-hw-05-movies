import {  useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import Loader from "../Loader";

const Reviews = () => {
    const [filmInfo, setFilmInfo]= useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);
    const[ isLoading, setIsLoading ]=useState(false);
    const movieInfo='reviews';

    useEffect(()=>{

        const fetchReviews= async() =>{
          setIsLoading(true);
          try {
            const filmInfo= await API.fetchInfoById(movieId, movieInfo );
            
            setFilmInfo(filmInfo.data.results);
            
          } 
          catch (error) {
           setError(error);
          } finally {
            setIsLoading(false);    
          } 
        }
        
        fetchReviews();
       
      },[movieId]);



    return(
    <>
    {(isLoading) && 
      (<Loader visible={true}/>)}
    {(filmInfo.length===0 && !isLoading && !error)? <p>We don`t have any reviews for this movie</p> : <ul>
        {filmInfo.map(review=>{return(
            <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
            </li>
        )})
        }
        </ul>}
        {error && (
         <p>"Something went wrong((("</p>
        )}
    </>
        
      
    )
};

export default Reviews;