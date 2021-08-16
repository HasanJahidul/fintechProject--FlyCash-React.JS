import React, { useEffect, useState } from "react";
import "../../../App.css";
// import Footer from "../../layouts/footer";
import AgentNavbar from "../../layouts/navbars/AgentNavbar";
import AgentSideNav from "../../layouts/sidebar/agentsSidebar";
import { useHistory } from "react-router-dom";



const AgentAddmoneyCard = (props) => {
    
  let history = useHistory();
    return (
        <div className="wrapper">
      <AgentSideNav />
      <div className="main-panel ps">
        <AgentNavbar />
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
                          alt="paybill"
                        ></img>
                      </a>
                      <h3>{props.status}</h3>
                    </div>
                    
                  </p>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      AgentAddmoneyCard();
                      history.push("/customer/statement");
                    }}
                  ></form>
                  
                  <label>Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    className="form-control"
                    placeholder="587496585841"
                  ></input>
                  <label>Valid Till</label> 
                  <input
                    type="text"
                    name="billNumber"
                    className="form-control"
                    placeholder="21/25"
                  ></input>

                  <label>CVC/CCV</label> 
                  <input
                    type="text"
                    name="ccvNumber"
                    className="form-control"
                    placeholder="656"
                  ></input>
                  
                  <label>Amount</label>
                  <input
                    type="text"
                    name="amount"
                    className="form-control"
                    placeholder="0.00"
                  ></input>

                  <label>{props.numberType}</label>
                  
                            <input
                    type="text"
                    name="mobileNumber"
                    className="form-control"
                    placeholder="+8801*********"
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
        {/* <Footer /> */}
      </div>
    </div>
    );
};

export default AgentAddmoneyCard;