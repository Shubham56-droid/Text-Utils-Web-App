import React, { useState } from "react";
// import PropTypes from 'prop-types'


export default function Navbar(props){
  const [modeval, setMode] = useState("moon");

  const handleToggleMode = () => {
    if(modeval === "moon"){
      setMode("sunny");
      document.getElementById('mainbody').classList.add('mixmode');
      props.showAlert("Dark Mode is Enabled","Success");
      document.getElementById("footer-box").classList.add('mixmode');
    }
    else
    {
      setMode("moon");
      document.getElementById('mainbody').classList.remove('mixmode');
      props.showAlert("Light Mode is Enabled","Success");
      document.getElementById("footer-box").classList.remove('mixmode');
    }

  }

  
  return (
    <nav className="navbar navbar-expand-lg" id="nav1">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                {props.aboutText}
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Contact Us
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <p id="mixModeBtn" onClick={handleToggleMode}><ion-icon name={modeval}></ion-icon></p>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//     title:PropTypes.string.isRequired,
//     aboutText:PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//   title: "Add Title",
//   aboutText: "Add About"
// };

