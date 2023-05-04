
import { Routes, Route } from "react-router-dom";
import {lazy} from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from "./SharedLayout";
const Movies =lazy(()=>import("../pages/Movies"));
const MovieDetails =lazy(()=>import("../pages/MovieDetails"));
const Cast =lazy(()=>import("./Cast"));
const Reviews =lazy(()=>import("./Reviews"));
const Home =lazy(()=>import("../pages/Home"));

 const App = () => {
  return (
    <div>
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