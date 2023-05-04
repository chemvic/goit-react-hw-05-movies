import {  useEffect, useState } from 'react';
import {  useParams } from 'react-router-dom';
import API from "../../api/fetchMovies-api";
import css from "./Reviews.module.css";

const Reviews = () => {
    const [reviews, setReviews]= useState([]);
    const { movieId } = useParams();
    const [error, setError] = useState(null);

    useEffect(()=>{

        const fetchReviews= async() =>{
           
          try {
            const reviews= await API.fetchReviewsById(movieId);
            
            if (reviews.data.results === []) {
                alert("No cast by ID");
            //   return toast.error(
            //     "No images by your query"
            //   );
            }
              setReviews(reviews.data.results);
            
          } 
          catch (error) {
           setError(error);
          } finally {

     }    
        }
        
        fetchReviews();
       
      },[movieId]);



    return(
    <>
    {(reviews.length===0)? <p>We don`t have any reviews for this movie</p> : <ul>
        {reviews.map(review=>{return(
            <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
            </li>
        )})
        }
        </ul>}
    </>
        
      
    )
};

export default Reviews;