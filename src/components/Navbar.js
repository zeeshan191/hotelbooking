import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo from "../images/logo.svg";
import Logout from "../Logout";

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    console.log(localStorage.getItem("userName"));

    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="Beach Resort" />
            </Link>

            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />

            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              {localStorage.getItem("userName") ? null : <Link to="/sign-in">Login</Link>}
            </li>
            <li>
              {localStorage.getItem("userName") ? <Link to="/bookings">Bookings</Link> : null}
            </li>

            <li>
              <Link style={{fontStyle:"italic",color:"rgb(4 236 22)"}}>{localStorage.getItem("userName")}</Link>
            </li>
            {localStorage.getItem("userName") ? <FaUser className="nav-icon" /> : null}
            {localStorage.getItem("userName") ? <Logout /> : null}
          </ul>
        </div>
        <div>

        </div>
      </nav>
    );
  }
}
