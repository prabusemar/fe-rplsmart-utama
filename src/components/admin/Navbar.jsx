import React, { useState } from "react";

//import Link from react router dom
import { Link, useNavigate } from "react-router-dom";

//import API
import Api from "../../services/Api";

//import js cookie
import Cookies from "js-cookie";

//import toast
import toast from "react-hot-toast";

export default function Navbar() {
  //state toggle
  const [sidebarToggle, setSidebarToggle] = useState(false);

  //function toggle handler
  const sidebarToggleHandler = (e) => {
    e.preventDefault();

    if (!sidebarToggle) {
      //add class on body
      document.body.classList.add("sb-sidenav-toggled");

      //set state "sidebarToggle" to true
      setSidebarToggle(true);
    } else {
      //remove class on body
      document.body.classList.remove("sb-sidenav-toggled");

      //set state "sidebarToggle" to false
      setSidebarToggle(false);
    }
  };

  //navigate
  const navigate = useNavigate();

  //method logout
  const logout = async (e) => {
    e.preventDefault();

    //fetch to rest api for logout
    await Api.post("/api/logout").then(() => {
      //remove user from cookies
      Cookies.remove("user");

      //remove token from cookies
      Cookies.remove("token");

      //remove permissions from cookies
      Cookies.remove("permissions");

      //show toast
      toast.success("Logout Successfully!", {
        position: "top-right",
        duration: 4000,
      });

      //redirect to login page
      navigate("/login");
    });
  };

  return (
    <nav
      className="sb-topnav navbar navbar-expand navbar-dark shadow-sm fixed-top"
      style={{
        backgroundColor: "#252422", // Navbar background color from palette
        borderTop: "5px solid #BD562D", // Border top color from palette
        paddingLeft: 0,
        height: "56px",
        zIndex: "1039",
      }}
    >
      <a className="navbar-brand ps-3 fw-bold" href="index.html" style={{ color: "#fffcf2" }}>
        RPLSMART
      </a>
      <button
        className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
        id="sidebarToggle"
        onClick={sidebarToggleHandler}
        href="#!"
      >
        <i className="fas fa-bars" style={{ color: "#fffcf2" }}></i>
      </button>

      <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0"></form>
      <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ color: "#BD562D" }} // Dropdown toggle color
          >
            <i className="fas fa-user fa-fw"></i>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="navbarDropdown"
            style={{
              backgroundColor: "#fffcf2", // Dropdown background color
              color: "#BD562D", // Dropdown text color
            }}
          >
            <li>
              <Link className="dropdown-item" onClick={logout} style={{ color: "#BD562D" }}>
                Logout
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
