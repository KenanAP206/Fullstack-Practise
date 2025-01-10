import React from 'react'
import './Navbar.css'
import { LuPhone } from "react-icons/lu";
import { NavLink } from 'react-router-dom';
function index() {
  return (
    <div>
      <nav>
        <div className="navbar-up">
          <div className="n-up-l">
            <h6>
            We believe we helps people
            for happier lives
            </h6>
          </div>
          <div className="n-up-mid">
            <img srcSet="https://preview.colorlib.com/theme/immigration/img/logo.png.webp" alt="logo" />
          </div>
          <div className="n-up-r">
          <p>+880 123 12 658 439 </p>

        <div className='icn'><LuPhone /></div>

          </div>
        </div>
        <hr />
        <div className="navbar-low">
        <ul>
          <li>
            <NavLink to='/' style={({ isActive }) =>isActive ? { color: "#f6214b"} : { color: "black" }}>HOME</NavLink>
          </li>
          <li>
            <NavLink to='/addform' style={({ isActive }) =>isActive ? { color: "#f6214b"} : { color: "black" }}>Add Form</NavLink>
          </li>
          <li>
            <NavLink to='/wishlist' style={({ isActive }) =>isActive ? { color: "#f6214b"} : { color: "black" }}>Wishlist</NavLink>
          </li>
          <li>
            <NavLink>COURSE</NavLink>
          </li>
          <li>
            <NavLink>COUNTRY</NavLink>
          </li>
          <li>
            <NavLink>BLOG</NavLink>
          </li>
          <li>
            <NavLink>CONTACT</NavLink>
          </li>
          <li>
            <NavLink>ELEMENTS</NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  )
}

export default index
