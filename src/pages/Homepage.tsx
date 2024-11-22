import React from "react";
import { NavLink } from "react-router-dom";
import NavProps from "../components/Navbar/NavProps";
import { Navigation } from "../data";
import Navbar from "../components/Navbar/Navbar";
import BackgroundImage from "../assets/01.jpg";

function Homepage() {
  return (
    <section className="homepage-container container">
      <img src={BackgroundImage} alt="" />
      {/* <h1>Shows Agenda</h1>
      <button>
        <NavLink to="/agenda">Go to the Agenda</NavLink>
      </button> */}
    </section>
  );
}

export default Homepage;
