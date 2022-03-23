import React from 'react';
import { Link } from "react-router-dom";
import cart_icon from './../../assets/icons/cart-icon.png';
import heart_icon from './../../assets/icons/heart-icon.png';
import user_icon from './../../assets/icons/user-icon.png';
import search_icon from './../../assets/icons/search-icon.png';
import dragonlogo from './../../assets/icons/dragonlogo.png';
import './NavigationBar.css';

export const NavigationBar = () => {
   const url='wwww.google.com';
   return (
      <>
         <div className="navbar navbar-expand-lg d-flex justify-content-center">
            <span>Envios a todo Mexico</span>
         </div>
         <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
               <a style={{ width: '40vw' }} className="navbar-brand" href={url}>
                  <img
                     src={dragonlogo}
                     alt=""
                     width="143px"
                     // height="10%"
                     className="img-fluidp"
                  />
               </a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                  <ul className="navbar-nav" style={{width:'60vw'}}>
                     <span className="nav-item dropdown"><a className="nav-link dropdown-toggle" href={url} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        
                           <b>Obras</b>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <li><a className="dropdown-item" href={url}>Action</a></li>
                           <li><a className="dropdown-item" href={url}>Another action</a></li>
                           <li><a className="dropdown-item" href={url}>Something else here</a></li>
                        </ul>
                     </span>
                     <span className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href={url} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                           <b>Artistas</b>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                           <li><a className="dropdown-item" href={url}>Action</a></li>
                           <li><a className="dropdown-item" href={url}>Another action</a></li>
                           <li><a className="dropdown-item" href={url}>Something else here</a></li>
                        </ul>
                     </span>
                     {/* </div> */}
                     <span className='nav-space'>

                     </span>
                     <Link
                        className="nav-item nav-link highlight-icon"
                        style={{ borderRadius: '50px' }}
                        to="/search"
                     >
                        <button type="button" style={{ padding: '0px' }} className="btn position-relative btn-link shadow-none">
                           <img
                              src={search_icon}
                              alt=""
                              width="20px"
                              // height="10%"
                              className="img-fluidp"
                           />
                        </button>
                        {/* </div> */}
                     </Link>
                     <Link
                        className="nav-item nav-link highlight-icon"
                        style={{ borderRadius: '50px' }}
                        to="/search"
                     >
                        <button type="button" style={{ padding: '0px' }} className="btn position-relative btn-link shadow-none">
                           <img
                              src={user_icon}
                              alt=""
                              width="20px"
                              className="img-fluidp"
                           />
                        </button>
                     </Link>
                     <Link
                        className="nav-item nav-link highlight-icon"
                        style={{ borderRadius: '50px' }}
                        to="/search"
                     >
                        <button type="button" style={{ padding: '0px' }} className="btn position-relative btn-link shadow-none">
                           <img
                              src={heart_icon}
                              alt=""
                              width="20px"
                              // height="10%"
                              className="img-fluidp"
                           />
                           <span className="position-absolute top-50 start-50 translate-end badge">
                              2
                           </span>
                        </button>
                     </Link>
                     <Link
                        className="nav-item nav-link highlight-icon"
                        style={{ borderRadius: '50px' }}
                        to="/search"
                     >
                        <button type="button" style={{ padding: '0px' }} className="btn position-relative btn-link shadow-none">
                           <img
                              src={cart_icon}
                              alt=""
                              width="20px"
                              // height="10%"
                              className="img-fluidp"
                           />
                           <span className="position-absolute top-50 start-50 translate-end badge">
                              2
                           </span>
                        </button>
                     </Link>
                  </ul>
               </div>
            </div>
         </nav>
      </>
   );
}
