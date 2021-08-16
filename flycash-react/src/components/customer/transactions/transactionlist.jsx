import React, { useEffect, useState } from "react";
import "../../../App.css";
import Navbar from "../../layouts/navbars/CustomerNavbar";
import SideNav from "../../layouts/sidebar/customersSidebar";
import StatementsTableRow from "./StatementsTableRow";
import { Link } from "react-router-dom";
import moment from "moment";

import { getUser, removeUserSession } from "../../auth/connect/getSession";
import logo from "../../../black/img/flycash.png"

const TransactionList = () => {
  const user = getUser();
  let email = "Joy@gmail.com"
  let today = new Date();
  
let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  
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
  useEffect(() => {
    fetch("http://localhost:8000/api/customer/transactionlist").then(
      (response) => {
        response.json().then((result) => {
          setTransactionList(result);
        });
      }
    );
  }, []);
  return (
    <div className= "pdf">
    
    <SideNav />
    <Navbar />
     <div className="main-panel hide ps" >
     
     <div className= "content">
        
     
      <div className='row'>
          
          <div className ="details">
                  <h3> Print Date :{date}</h3>
  
<<<<<<< HEAD
                  <h4>Name :{user.name}</h4>
                  <h4>Email :{user.email}</h4>
                  <h4>Phone :{user.phone}</h4>
=======
                  <h4>Name :Jahidul Hasan</h4>
                  <h4>Email :joy@gmail.com</h4>
                  <h4>Phone :01631124587</h4>
>>>>>>> f32235bcaad032b943d4af7d8a8ad0c7a95e8509
  
                </div>
          <img className='photo' src={logo}></img>
             </div>
     
        <div class="row" style={{right: "500px"}}>
          <div class="col-md-12">
            <div class="card ">
              <div class="card-header">
              <button onClick={() => window.print()} align="center" type="submit" class="btn btn-fill btn-primary"> Print</button>
                <h3 class="card-title"> Translation List</h3>
              </div>
              <div class="card-body">
                <div class="table-responsive-lg">
                  <table class="table tablesorter " id="">
                    <thead class=" text-primary">
                      <tr>
                        <th>Account Number</th>
                        <th>Transaction Type</th>
                        <th class="text-center">Transaction Amount</th>
                        <th class="text-center hideb">Current Balance</th>
                        <th class="text-center">Date</th>
                      </tr>
                    </thead>

                    {transList.map((u) => {
                      return <StatementsTableRow key={u.id} {...u} />;
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    
  );
};
export default TransactionList;
