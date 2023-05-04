import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";


import { Suspense } from 'react';
const SharedLayout =( ) => {

    return(
        <>
        <container className={css.container}>
        <header className={css.header}>
             <nav className={css.nav}>
        <li  className={css.link}>
                  <NavLink to="/" activeClassName={css.activeLink}>Home</NavLink>
        </li>
        <li  className={css.link}>
                  <NavLink to="/movies" activeClassName={css.activeLink}>Movies</NavLink>
        </li>
      </nav>
        </header>
        <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense> 
        </main>
        </container>  
        </>
     

    )
};
export default SharedLayout; 
