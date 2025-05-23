// import React, { useState } from "react";
// import PropTypes from 'prop-types'
import logo from "../logo.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // const [modeval, setMode] = useState("moon");

  // const handleToggleMode = () => {
  //   const headings = document.querySelectorAll("h4.heading");
  //   if (modeval === "moon") {
  //     setMode("sunny");
  //     props.showAlert("Dark Mode is Enabled", "success");
  //     document.getElementById("mixModeBtn").classList.add("lightmodeactive");
  //     document.getElementById("footer-box").classList.remove("mixmode");
  //     document.getElementById("mainbody").classList.add("darkmodeactive");
  //     // headings.forEach((heading) => {
  //     //   heading.classList.add("darkmodeactive");
  //     // });

  //     // document.getElementById("detailsText").classList.add("darkmodeactive");
  //     document.getElementById('preview-text').classList.add('darkmodeactive');
  //     document.getElementById('textForm').classList.add('darkmodeactive');
  //     document.getElementById('footer-container').classList.add('darkmodeactive');
  //   } else {
  //     setMode("moon");
  //     props.showAlert("Light Mode is Enabled", "success");
  //     document.getElementById("mainbody").classList.remove("darkmodeactive");
  //     document.getElementById("mixModeBtn").classList.remove("lightmodeactive");
  //     document.getElementById("footer-box").classList.add("mixmode");
  //     // headings.forEach((heading) => {
  //     //   heading.classList.remove("darkmodeactive");
  //     // });
  //     // document.getElementById("detailsText").classList.remove("darkmodeactive");
  //     document.getElementById('preview-text').classList.remove('darkmodeactive');
  //     document.getElementById('textForm').classList.remove('darkmodeactive')
  //     document.getElementById('footer-container').classList.remove('darkmodeactive');
  //   }
  // };

  return (
    <nav className="navbar navbar-expand-lg" id="nav1">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img id="logo-img" alt="logo-img" src={logo} />
        </Link>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/about">
                {props.aboutText}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-clr" type="submit">
              Search
            </button>
          </form>
          {/* <p id="mixModeBtn" onClick={handleToggleMode}>
            <ion-icon id="sun-moon-icon" name={modeval}></ion-icon>
          </p> */}
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
