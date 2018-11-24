import React from "react";

// stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      {/* eslint-disable-next-line */}
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* eslint-disable-next-line */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
