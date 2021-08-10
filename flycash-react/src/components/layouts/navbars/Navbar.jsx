import React from "react";
import { Link } from "react-router-dom";
import photo from "../../../black/img/james.jpg";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-absolute navbar-transparent">
        <div className="container-fluid">
          <div className="navbar-wrapper d-none">
            <div className="navbar-toggle d-inline">
              <button type="button" className="navbar-toggler">
                <span className="navbar-toggler-bar bar1"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <Link className="navbar-brand" href="#">
              Dashboard
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav ml-auto">
              <li className="search-bar input-group">
                <button
                  className="btn btn-link"
                  id="search-button"
                  data-toggle="modal"
                  data-target="#searchModal"
                >
                  <i className="tim-icons icon-zoom-split"></i>
                  <span className="d-lg-none d-md-block">Search</span>
                </button>
              </li>
              <li className="dropdown nav-item">
                <Link
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <div className="notification d-none d-lg-block d-xl-block"></div>
                  <i className="tim-icons icon-sound-wave"></i>
                  <p className="d-lg-none"> Notifications </p>
                </Link>
                <ul className="dropdown-menu dropdown-menu-right dropdown-navbar">
                  <li className="nav-link">
                    <Link href="#" className="nav-item dropdown-item">
                      Mike John responded to your email
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#" className="nav-item dropdown-item">
                      You have 5 more tasks
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#" className="nav-item dropdown-item">
                      Your friend Michael is in town
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#" className="nav-item dropdown-item">
                      Another notification
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#" className="nav-item dropdown-item">
                      Another one
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <Link
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <div className="photo">
                    <img src={photo} alt="Profile Photo"></img>
                  </div>
                  <b className="caret d-none d-lg-block d-xl-block"></b>
                  <p className="d-lg-none">Log out</p>
                </Link>
                <ul className="dropdown-menu dropdown-navbar">
                  <li className="nav-link">
                    <Link
                      href="{{ route('customer_profile_edit"
                      className="nav-item dropdown-item"
                    >
                      Profile
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link
                      href="{{ route('profile_passwordChange"
                      className="nav-item dropdown-item"
                    >
                      Change Password
                    </Link>
                  </li>
                  <li className="nav-link">
                    <Link href="#" className="nav-item dropdown-item">
                      Settings
                    </Link>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="nav-link">
                    <Link href="/logout" className="nav-item dropdown-item">
                      Log out
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="separator d-lg-none"></li>
            </ul>
          </div>
        </div>
        <div
          class="modal modal-search fade"
          id="searchModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="searchModal"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <input
                  type="text"
                  class="form-control"
                  id="inlineFormInputGroup"
                  placeholder="{SEARCH}"
                ></input>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="{Close}"
                >
                  <i class="tim-icons icon-simple-remove"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
