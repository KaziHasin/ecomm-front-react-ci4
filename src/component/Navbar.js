import React from 'react'
import {faRightToBracket, faCartArrowDown, faSearch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Navbar() {
  return (
    <>
       
       <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div className="container">
    <a className="navbar-brand" href="#"><h1>E<span className='text-red'>-comm</span></h1></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#shop">Shop</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#product">Product</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#blog">Blog</a>
        </li>
       
      </ul>
      <FontAwesomeIcon icon={faSearch}/>
      <button className='btn btn-success  ms-4 mx-3'><FontAwesomeIcon icon={faRightToBracket} className="me-2"/>Login</button>
      <button className='btn btn-primary'><FontAwesomeIcon icon={faCartArrowDown} className="me-2"/>Login</button>
    </div>
  </div>
</nav>
       
    </>
  )
}
