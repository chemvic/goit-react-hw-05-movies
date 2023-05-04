import axios from 'axios';

 const fetchPopularMovies=async () => {
    const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
        const KEY = "275907f385c33d24dbe69faf1e070b83";
        let url = `${BASE_URL}?api_key=${KEY}`;
          
         const movies  = await axios.get(url); 
     

         return movies;         
     
    }

    const fetchMoviesById=async (movieId) =>{
          const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}`;
        const KEY = "275907f385c33d24dbe69faf1e070b83";
        let url = `${BASE_URL}?api_key=${KEY}`;
          
         const movie  = await axios.get(url); 
     
         return movie;         
     
    }
    const fetchCastById=async (movieId) =>{
          const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
        const KEY = "275907f385c33d24dbe69faf1e070b83";
        let url = `${BASE_URL}?api_key=${KEY}`;
          
         const cast  = await axios.get(url); 
     
         return cast;         
     
    }
    const fetchReviewsById=async (movieId) =>{
          const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews`;
        const KEY = "275907f385c33d24dbe69faf1e070b83";
        let url = `${BASE_URL}?api_key=${KEY}`;
          
         const reviews  = await axios.get(url); 
   
         return reviews;      
     
    }
    const fetchMoviesByQuery=async (query) =>{
        if (query === "") return;
          const BASE_URL = `https://api.themoviedb.org/3/search/movie`;
        const KEY = "275907f385c33d24dbe69faf1e070b83";
        let url = `${BASE_URL}?api_key=${KEY}&query=${query}`;
          
         const movie  = await axios.get(url); 
    
         return movie;         
     
    }
 


const API={fetchPopularMovies, fetchMoviesById, fetchMoviesByQuery, fetchCastById, fetchReviewsById};
export default API;
