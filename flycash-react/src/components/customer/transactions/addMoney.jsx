import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import Sidebar from "../../layouts/sidebar/customersSidebar";
import { useHistory } from "react-router-dom";
const AddMoney = (props) => {
  let history = useHistory();
  const addmoney = () => {
    var email = "joy@gmail.com";
    fetch("http://localhost:8000/api/customer/addmoney/" + email, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then((result) => {
      result.json().then((resp) => {
        alert(props.status + "success");
        getTransactionList();
      });
    });
  };
  const getTransactionList = () => {
    fetch("http://localhost:8000/api/customer/transactionlist").then(
      (response) => {
        response.json().then((result) => {
          setTransactionList(result);
        });
      }
    );
  };
  const [transList, setTransactionList] = useState([]);

  const makeTransaction = () => {
    var email = "joy@gmail.com";
    fetch("http://localhost:8000/customer/transaction/" + email, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }).then((result) => {
      result.json().then((resp) => {
        alert(props.status + "success");
        getTransactionList();
      });
    });
  };

  useEffect(() => {
    fetch("http://localhost:8000/api/customer/transactionlist").then((response) => {
      response.json().then((result) => {
        getTransactionList(result);
      });
    });
  }, []);

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
                    </div>
                    
                  </p>
                  <form
                    onSubmit={(event) => {
                      event.preventDefault();
                      addmoney();
                      history.push("/customer/statement");
                    }}
                  ></form>
                  <label>{props.numberType} Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="+8801*********"
                  ></input>

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
                    {props.status}
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

export default AddMoney;
