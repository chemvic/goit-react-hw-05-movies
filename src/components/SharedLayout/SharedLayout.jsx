import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";


import { Suspense } from 'react';
const SharedLayout =( ) => {

    return(
        <>
        <header>
             <nav>
        <li>
                  <NavLink to="/">Home</NavLink>
        </li>
        <li>
                  <NavLink to="/movies">Movies</NavLink>
        </li>
      </nav>
        </header>
        <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense> 
        </main>
          
        </>
     

    )
};
export default SharedLayout; 
