import React from "react";
import './Header.css'
function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light p-lg-4 fixed-top">
        <a  class="navbar-brand" href="#Start">
          telamInfotech
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#Start">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Start">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Start">
               Services
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Start">
               Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
