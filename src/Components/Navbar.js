import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar(props) {
  const [bgcolor, setbgcolor] = useState(
    "linear-gradient(to right, #ffb347, #ffcc33)"
  );
  document.body.style = `background: ${bgcolor};`;
  const handleClick = (color) => {
    setbgcolor(color);
  };
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/about">
                About <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li
                  className="dropdown-item"
                  onClick={() =>
                    handleClick(
                      "linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)"
                    )
                  }
                  href="#"
                >
                  bg-1
                </li>
                <li
                  className="dropdown-item"
                  onClick={() =>
                    handleClick("linear-gradient(to right, #f46b45, #eea849)")
                  }
                  href="#"
                >
                  bg-2
                </li>
              </div>
            </li>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About text here",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
