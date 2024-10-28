import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const activeRoute = pathname.split("/");

  return (
    <>
      {/* Navbar top */}
      <nav className="navbar navbar-expand-md navbar-light navbar-top d-none d-md-block d-lg-block" style={{ backgroundColor: "#252422", color: "#fffcf2" }}>
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item me-4">
                <i className="fa fa-envelope"></i> info@rplsmart.com
              </li>
              <li className="nav-item me-4">
                <i className="fa fa-phone"></i> +62 896-5973-5637
              </li>
            </ul>
            <div>
              IKUTI KAMI :
              <a href="#" className="ms-2 me-2">
                <i className="fab fa-facebook-square" style={{ color: "#fffcf2" }}></i>
              </a>
              <a href="#" className="ms-2 me-2">
                <i className="fab fa-instagram" style={{ color: "#fffcf2" }}></i>
              </a>
              <a href="#" className="ms-2 me-2">
                <i className="fab fa-youtube" style={{ color: "#fffcf2" }}></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Jumbotron Header */}
      <div className="jumbotron-header pb-3" style={{ backgroundColor: "#BD562D" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-9 d-none d-md-block d-lg-block">
              <div className="header-logo">
                <a href="#">
                  <img
                    src="/images/PPLG.png"
                    width="130"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="header-text">
                <h2 className="header-school" style={{ color: "#fffcf2" }}>RPLSMART</h2>
                <hr />
                <div className="header-address" style={{ color: "#fffcf2" }}>
                  Portal berita digital yang membahas tentang jurusan RPL / PPLG SMKN 1 Banjar.
                </div>
              </div>
            </div>

            <div className="row d-block d-md-none d-lg-none">
              <div className="col-md-6 text-center mt-3">
                <a href="#">
                  <img
                    src="/images/PPLG.png"
                    width="110"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-12 text-center text-white mb-3">
                <h2 className="header-school">RPLSMART</h2>
                <hr />
                <div className="header-address">
                  Portal berita digital yang membahas tentang jurusan RPL / PPLG SMKN 1 Banjar.
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="d-none d-md-block d-lg-block"
                style={{ marginTop: "60px" }}
              ></div>
              <form className="d-flex" action="#" method="GET">
                <input
                  className="form-control border-0 me-2"
                  type="search"
                  name="q"
                  placeholder="Cari sesuatu..."
                  aria-label="Search"
                  style={{ backgroundColor: "#fff", color: "#252422" }}
                />
                <button
                  className="btn btn-primary-dark"
                  type="submit"
                  style={{ backgroundColor: '#252422', borderColor: '#252422', color: '#fffcf2' }}
                >
                  CARI
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Main */}
      <nav className="navbar navbar-expand-md navbar-light navbar-blue nav-web" style={{ backgroundColor: "#252422" }}>
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item ms-2 mt-2 mt-md-0">
                <Link
                  className={
                    activeRoute[1] === ""
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/"
                  style={{ color: "#fffcf2", padding: "8px 15px" }}
                >
                  <i className="fa fa-home"></i> BERANDA
                </Link>
              </li>

              <li className="nav-item ms-2 mt-2 mt-md-0">
                <Link
                  className={
                    activeRoute[1] === "pages"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/pages"
                  style={{ color: "#fffcf2", padding: "8px 15px" }}
                >
                  <i className="fa fa-info-circle"></i> TENTANG JURUSAN
                </Link>
              </li>

              <li className="nav-item ms-2 mt-2 mt-md-0">
                <Link
                  className={
                    activeRoute[1] === "aparaturs"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/aparaturs"
                  style={{ color: "#fffcf2", padding: "8px 15px" }}
                >
                  <i className="fa fa-user-circle"></i> STAFF
                </Link>
              </li>

              <li className="nav-item ms-2 mt-2 mt-md-0">
                <Link
                  className={
                    activeRoute[1] === "posts"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/posts"
                  style={{ color: "#fffcf2", padding: "8px 15px" }}
                >
                  <i className="fa fa-book"></i> BERITA
                </Link>
              </li>

              <li className="nav-item ms-2 mt-2 mt-md-0">
                <Link
                  className={
                    activeRoute[1] === "products"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/products"
                  style={{ color: "#fffcf2", padding: "8px 15px" }}
                >
                  <i className="fa fa-shopping-bag"></i> PRODUK
                </Link>
              </li>

              <li className="nav-item ms-2 mt-2 mt-md-0">
                <Link
                  className={
                    activeRoute[1] === "photos"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/photos"
                  style={{ color: "#fffcf2", padding: "8px 15px" }}
                >
                  <i className="fa fa-images"></i> GALERI
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
