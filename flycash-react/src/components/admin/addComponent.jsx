import React, { useEffect, useState } from "react";
// import "../../App.css";
import Footer from "../layouts/footer";
import NavBar from "../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../layouts/sidebar/adminsSidebar";

const AdminRegister = (props) => {
  var type = props.type;
  return (
    <div>
      <AdminsSidebar />

      <NavBar />
      <div className="wrapper wrapper-full-page">
        <div className="full-page register-page">
          <div className="content">
            <div className=" container">
              <div class="row">
                <div class="col-lg-4 col-md-6 ml-auto mr-auto">
                  <div align="center" class="card card-register card-white">
                    <div class="card-header">
                      {/* <img src={logo} alt=""></img> */}
                      <h1 align="center" class="card-title">
                        {props.status}
                      </h1>
                    </div>
                    <form class="form" method="post">
                      <div class="card-body">
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-single-02"></i>
                            </div>
                          </div>
                          <input
                            type="text"
                            name="name"
                            class="form-control"
                            placeholder="Name"
                          ></input>
                        </div>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-email-85"></i>
                            </div>
                          </div>
                          <input
                            type="email"
                            name="email"
                            class="form-control"
                            placeholder="Email"
                          ></input>
                        </div>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-lock-circle"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            name="password"
                            class="form-control"
                            placeholder="Password"
                          ></input>
                        </div>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-lock-circle"></i>
                            </div>
                          </div>
                          <input
                            type="password"
                            name="password_confirmation"
                            class="form-control"
                            placeholder="Confirm Password"
                          ></input>
                        </div>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-mobile"></i>
                            </div>
                          </div>
                          <input
                            type="digit"
                            name="phone"
                            class="form-control"
                            placeholder="Phone Number"
                          ></input>
                        </div>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-badge"></i>
                            </div>
                          </div>
                          <input
                            type="text"
                            name="nid"
                            class="form-control"
                            placeholder="NID Number"
                          ></input>
                        </div>

                        <div class="input-group">
                          <div class="input-group-prepend">
                            <div class="input-group-text">
                              <i class="tim-icons icon-calendar-60"></i>
                            </div>
                          </div>
                          <input
                            type="date"
                            name="dob"
                            class="form-control"
                            placeholder="Date of Birth"
                          ></input>
                        </div>
                      </div>
                      <div class="card-footer">
                        <button
                          type="submit"
                          class="btn btn-primary btn-round btn-lg"
                        >
                          {props.buttonName}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
