import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
          <nav className = 'navbar-container'> 
            <div className = 'navbar-item'>
              <i><Link to = {'/'}>Home</Link></i>
            </div>
            <div className = 'navbar-item'>
               <i><Link to = {'/campuses'}>Campuses</Link></i>
            </div>
            <div className = 'navbar-item'>
               <Link to = {'/students'}>Students</Link>
            </div>      
          </nav>
      )
}

