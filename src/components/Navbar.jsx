import React from "react";

export default function Navbar(props) {
  let logged = localStorage.getItem("account") || false;

  const logOut = () => {
    localStorage.removeItem("account");
    window.location = "/";
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Smart Shoes
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Ana səhifə
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Haqqında
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={logged ? "nav-link" : "nav-link disabled"}
                  href="/friends"
                >
                  Dostlar
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/settings"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Parametrlər
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className={
                        logged ? "dropdown-item" : "dropdown-item disabled"
                      }
                      href="/account"
                    >
                      Hesab parametrləri
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/settings">
                      Sayt parametrləri
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className="d-flex"
              role="search"
              action="/search"
              method="get"
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Axtarın..."
                aria-label="Search"
                name="name"
                defaultValue={props.search ? props.search : ""}
              />
              <button className="btn btn-secondary" type="submit">
                Axtarın
              </button>
            </form>
            <a
              href="/login"
              style={logged ? { display: "none" } : { marginLeft: "10px" }}
              className="btn btn-primary"
            >
              Daxil olun
            </a>
            <button
              style={logged ? { marginLeft: "10px" } : { display: "none" }}
              className="btn btn-danger"
              onClick={(e) => logOut()}
            >
              Hesabdan Çıxın
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
