import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import Sidebar from "../../layouts/sidebar/customersSidebar";
import { useHistory } from "react-router-dom";

const Donate = (props) => {
    
  let history = useHistory();
    return (
        <div className="wrapper">
      <Sidebar />
      <div className="main-panel ps">
        <NavBar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-body">
                  <p className="card-text">
                    <div className="author">
                      <div className="block block-one"></div>
                      <div className="block block-two"></div>
                      <div className="block block-three"></div>
                      <div className="block block-four"></div>

                      <a href="#">
                        <img
                          className="avatar"
                          src={props.imgpath}
                          alt="sendmoney"
                        ></img>
                      </a>
                      <h3>{props.status}</h3>
                      <h5>Donate with Flycash and contribute to help underprivileged people</h5>
                    </div>
                    
                  </p>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      Donate();
                      history.push("/customer/statement");
                    }}
                  ></form>
                  <label>{props.numberType}</label>
                  <select  type="text" name="billtype" class="form-control">

                            <option value="Brac" name= "brac">Brac </option>
                            <option value="Ek Takay Ahar" name= "1takayahar">Ek Takay Ahar</option>
                            <option value="Esho Shobai" name= "eshoShobai">Esho Shobai </option>
                            <option value="MASTUL Foundation" name= "mastul">MASTUL Foundation </option>
                            <option value="Alter Youth" name= "alter youth">Alter Youth </option>
                            <option value="Sajida Foundation" name= "sajida">Sajida Foundation</option>
                            </select>

                  <label>Amount</label>
                  <input
                    type="text"
                    name="amount"
                    className="form-control"
                    placeholder="0.00"
                  ></input>

                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                  ></input>
                </div>

                <div class="card-footer">
                  <button type="submit" className="btn btn-fill btn-primary">
                    {props.buttonName}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    );
};

export default Donate;