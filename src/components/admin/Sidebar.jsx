//import Link
import { Link, useLocation } from "react-router-dom";

//import js cookie
import Cookies from "js-cookie";

//import permissions
import hasAnyPermission from "../../utils/Permissions";

export default function Sidebar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const activeRoute = pathname.split("/");

  //get data user from cookies
  const user = JSON.parse(Cookies.get("user"));

  return (
    <nav
      className="sb-sidenav accordion sb-sidenav-dark"
      id="sidenavAccordion"
      style={{ backgroundColor: "#252422", color: "#fffcf2" }} // Background and text color from palette
    >
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading"></div>
          <Link
            className={
              activeRoute[2] === "dashboard"
                ? "nav-link active-sidebar"
                : "nav-link"
            }
            to="/admin/dashboard"
            style={{
              color: activeRoute[2] === "dashboard" ? "#BD562D" : "#fffcf2", // Active color from palette
            }}
          >
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </Link>

          {(hasAnyPermission(["categories.index"]) ||
            hasAnyPermission(["posts.index"]) ||
            hasAnyPermission(["pages.index"]) ||
            hasAnyPermission(["products.index"])) && (
              <>
                <div className="sb-sidenav-menu-heading" style={{ color: "#ccc5b9" }}>
                  CONTENT MANAGEMENT
                </div>
                <a
                  className={
                    "nav-link collapsed " +
                    (["categories", "posts", "pages", "products"].includes(activeRoute[2])
                      ? " active-sidebar"
                      : "")
                  }
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseLayouts"
                  aria-expanded="false"
                  aria-controls="collapseLayouts"
                  style={{
                    color:
                      ["categories", "posts", "pages", "products"].includes(activeRoute[2])
                        ? "#BD562D"
                        : "#fffcf2", // Active color for submenus
                  }}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-pencil"></i>
                  </div>
                  Contents
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" style={{ color: "#fffcf2" }}></i>
                  </div>
                </a>
              </>
            )}

          <div
            className={
              "collapse " +
              (["categories", "posts", "pages", "products"].includes(activeRoute[2])
                ? " show"
                : "")
            }
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              {hasAnyPermission(["categories.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "categories"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/categories"
                  style={{
                    color: activeRoute[2] === "categories" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  Categories
                </Link>
              )}

              {hasAnyPermission(["posts.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "posts"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/posts"
                  style={{
                    color: activeRoute[2] === "posts" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  Posts
                </Link>
              )}

              {hasAnyPermission(["pages.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "pages"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/pages"
                  style={{
                    color: activeRoute[2] === "pages" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  Pages
                </Link>
              )}

              {hasAnyPermission(["products.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "products"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/products"
                  style={{
                    color: activeRoute[2] === "products" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  Products
                </Link>
              )}
            </nav>
          </div>

          {/* Media Management Section */}
          {(hasAnyPermission(["photos.index"]) ||
            hasAnyPermission(["sliders.index"])) && (
              <>
                <div className="sb-sidenav-menu-heading" style={{ color: "#ccc5b9" }}>
                  MEDIA MANAGEMENT
                </div>
                <a
                  className={
                    "nav-link collapsed " +
                    (["photos", "sliders"].includes(activeRoute[2]) ? " active-sidebar" : "")
                  }
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseMedias"
                  aria-expanded="false"
                  aria-controls="collapseMedias"
                  style={{
                    color: ["photos", "sliders"].includes(activeRoute[2]) ? "#BD562D" : "#fffcf2",
                  }}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-images"></i>
                  </div>
                  Media
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" style={{ color: "#fffcf2" }}></i>
                  </div>
                </a>
              </>
            )}
          <div
            className={
              "collapse " +
              (["photos", "sliders"].includes(activeRoute[2]) ? " show" : "")
            }
            id="collapseMedias"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              {hasAnyPermission(["photos.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "photos"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/photos"
                  style={{
                    color: activeRoute[2] === "photos" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  Photos
                </Link>
              )}

              {hasAnyPermission(["sliders.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "sliders"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/sliders"
                  style={{
                    color: activeRoute[2] === "sliders" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  Sliders
                </Link>
              )}
            </nav>
          </div>


          {/* Roles Section */}
          {(hasAnyPermission(['roles.index']) ||
            hasAnyPermission(['users.index']) ||
            hasAnyPermission(['aparaturs.index'])
          ) &&
            (
              <>
                <div className="sb-sidenav-menu-heading" style={{ color: "#ccc5b9" }}>
                  USER MANAGEMENT
                </div>
                <a
                  className={
                    "nav-link collapsed " +
                    (["users", "roles", 'aparaturs'].includes(activeRoute[2]) ? " active-sidebar" : "")
                  }
                  href="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseUsers"
                  aria-expanded="false"
                  aria-controls="collapseUsers"
                  style={{
                    color: ["users", "roles", 'aparaturs'].includes(activeRoute[2]) ? "#BD562D" : "#fffcf2",
                  }}
                >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-user"></i>
                  </div>
                  User
                  <div className="sb-sidenav-collapse-arrow">
                    <i className="fas fa-angle-down" style={{ color: "#fffcf2" }}></i>
                  </div>
                </a>
              </>
            )}

          <div
            className={
              "collapse " +
              (["roles", "users", 'aparaturs'].includes(activeRoute[2]) ? " show" : "")
            }
            id="collapseUsers"
            aria-labelledby="headingOne"
            data-bs-parent="#sidenavAccordion"
          >
            <nav className="sb-sidenav-menu-nested nav">
              {hasAnyPermission(["users.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "users"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/users"
                  style={{
                    color: activeRoute[2] === "users" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  User
                </Link>
              )}

              {hasAnyPermission(["roles.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "roles"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/roles"
                  style={{
                    color: activeRoute[2] === "roles" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  Role
                </Link>
              )}

              {hasAnyPermission(["aparaturs.index"]) && (
                <Link
                  className={
                    activeRoute[2] === "aparaturs"
                      ? "nav-link active-sidebar"
                      : "nav-link"
                  }
                  to="/admin/aparaturs"
                  style={{
                    color: activeRoute[2] === "aparaturs" ? "#BD562D" : "#fffcf2",
                  }}
                >
                  Staff
                </Link>
              )}
            </nav>
          </div>

          {/* User Info */}
          <div className="sb-sidenav-footer" style={{ backgroundColor: "#fff", color: "#000" }}>
            <div className="small">Logged in as:</div>
            {user.email}
          </div>
        </div>
      </div>
    </nav>
  );
}
