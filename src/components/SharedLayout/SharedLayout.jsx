import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";


import { Suspense } from 'react';
const SharedLayout =( ) => {

    return(
        <>
        <div className={css.container}>
          <header className={css.header}>
             <nav className={css.nav}>
        <li  className={css.link}>
                  <NavLink to="/" style={({ isActive }) =>({color: isActive ? 'green' : 'blue'})}>Home</NavLink>
        </li>
        <li  className={css.link}>
                  <NavLink to="/movies" style={({ isActive }) =>({color: isActive ? 'green' : 'blue'})}>Movies</NavLink>
        </li>
      </nav>
        </header>
        </div>
      
        
        <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense> 
        </main>
     
        </>
     

    )
};
export default SharedLayout; 
