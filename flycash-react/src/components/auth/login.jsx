import React from 'react';
import logo from "../../black/img/flycash.png";
import Footer from "../layouts/footer";
import GuestNav from "../layouts/navbars/guestNav";
import { Link } from "react-router-dom";


const login = () => {
    return (
        <div>
            <GuestNav/>
    <div className="wrapper wrapper-full-page">
      <div className="full-page login-page ">
        <div className="content">
          <div className=" container">

          <div className="col-lg-4 col-md-6 ml-auto mr-auto">
        <form className="form" method="post" >
            

            <div className="card card-login card-white">
                <div className="card-header">
                <img src={logo} alt=""></img>
                    <h1 align="center" className="card-title">Log in</h1>
                </div>
                
                <div className="card-body">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="tim-icons icon-email-85"></i>
                            </div>
                        </div>
                        <input type="email" name="email" className="form-control" placeholder="Email"></input>
                    
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="tim-icons icon-lock-circle"></i>
                            </div>
                        </div>
                        <input type="password" placeholder="Password" name="password" className="form-control"></input>
                      
                    </div>
                </div>
                <div className="card-footer">
                    <button type="submit" href="" className="btn btn-primary btn-lg btn-block mb-3">Log in</button>
                    <div className="pull-left">
                        <h6>
                            <Link to="/register" className="link footer-link">Create Account</Link>
                        </h6>
                    </div>
                    <div className="pull-right">
                        <h6>
                            <Link to="3" className="link footer-link">Forgot password?</Link>
                        </h6>
                    </div>
                </div>
            </div>
        </form>
    </div>



          </div>
          <Footer/>
          </div></div></div>

            
        </div>
    );
};

export default login;