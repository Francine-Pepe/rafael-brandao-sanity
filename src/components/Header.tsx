import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Header() {
  return (
    <header>
      <Navbar />
      {/* <div>
        <NavLink to="/">
          <h2>Rafa Brandao</h2>
        </NavLink>
      </div>

      <nav>
        <ul>
          <li>
            <button>
              <NavLink to="/">Home</NavLink>
            </button>
          </li>
          <li>
            <button>
              <NavLink to="/shows">Shows</NavLink>
            </button>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header;
