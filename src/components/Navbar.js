import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
    <nav className="sticky navbar bg-primary.bg-gradient">
        <ul className="nav-links">
            <ul className="nav-links">  
                <li ><Link to="#" className='fs-1 font-italic'>FastEats</Link></li>
                <li><Link to="#">Feel Good Music</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="#">Breathe Timer</Link></li>

                <Link to=""><i className="fa-regular fa-user" style={{color: 'black'}}></i></Link>
            </ul>
        </ul>
    </nav>  
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  )
}
