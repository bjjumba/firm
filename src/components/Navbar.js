import React,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import {MenuIcon,XIcon} from '@heroicons/react/solid';


const Navbar=()=> {
     const[click,setClick]=useState(false);
     const handleClick=()=>{
          setClick(!click)
     }
  return (
    <>
       <nav className="navbar">
           <div className="nav-container">
               <NavLink exact to="/" 
               className="nav-logo">
                    A-A-S
               </NavLink>
               <ul className={click?"nav-menu active":"nav-menu"}>
                   <li className="nav-item">
                        <NavLink exact to="/" 
                           activeClassName="active" 
                           className="nav-links"
                           onClick={handleClick}
                           >
                        Home
                        </NavLink>
                   </li>
                   <li className="nav-item">
                        <NavLink exact to="/service" 
                           activeClassName="active" 
                           className="nav-links"
                           onClick={handleClick}
                           >
                          Services
                        </NavLink>
                   </li>
                   <li className="nav-item">
                        <NavLink exact to="/lawyer" 
                          activeClassName="active" 
                          className="nav-links"
                          onClick={handleClick}
                          >
                            Our Lawyers
                        </NavLink>
                   </li>
                   <li className="nav-item">
                        <NavLink exact to="/book" 
                          activeClassName="active" 
                          className="nav-links"
                          onClick={handleClick}
                          >
                            Book
                        </NavLink>
                   </li>
               </ul>
               <div className="nav-icon" onClick={handleClick}>
                  {/* <i className={click?"fas fa-times":"fas fa-bars"}></i>  */}
                 {click? <XIcon width="40" height="40" color="yellow" className="hero"/> 
                  :<MenuIcon width="40" height="40" color="yellow"/> }  
               </div>
           </div>
       </nav>
    </>
  )
}

export default Navbar