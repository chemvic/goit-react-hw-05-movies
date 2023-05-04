
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Cast from "./Cast";
import Reviews from "./Reviews";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 const App = () => {
  return (
    <div
    //   style={{
    //     // height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    >
 <ToastContainer autoClose={1000}/>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>}/>
        <Route path="movies" element={<Movies/>}/>
        <Route path="movies/:movieId" element={<MovieDetails/>}>
         <Route path="cast" element={<Cast/>}/>
         <Route path="reviews" element={<Reviews/>}/>
        </Route>
      </Route> 
    </Routes>


    </div>
  );
};
export default App;