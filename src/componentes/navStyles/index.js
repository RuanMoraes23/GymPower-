// Navbar.js
import React from "react";
import { NavbarLink } from '../styles/NavStyles';

const Navbar = () => {
  return (
    <nav>
      <NavbarLink to="/home">Home</NavbarLink>
      <NavbarLink to="/about">About Us</NavbarLink>
      <NavbarLink to="/contact">Contact Us</NavbarLink>
    </nav>
  );
};

export default Navbar;
