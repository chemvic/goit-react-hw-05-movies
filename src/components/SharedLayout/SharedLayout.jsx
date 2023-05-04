import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";


import { Suspense } from 'react';
const SharedLayout =( ) => {

    return(
        <>
        {/* <div className={css.container}> */}
        <header className={css.header}>
             <nav className={css.nav}>
        <li  className={css.link}>
                  <NavLink to="/">Home</NavLink>
        </li>
        <li  className={css.link}>
                  <NavLink to="/movies">Movies</NavLink>
        </li>
      </nav>
        </header>
        <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense> 
        </main>
        {/* </div>   */}
        </>
     

    )
};
export default SharedLayout; 
