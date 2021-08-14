import React, { useEffect, useState } from "react";
import "../../../App.css";
import StatementsTableRow from "./StatementsTableRow";
import logo from "../../../black/img/flycash.png"
import moment from "moment";

const StatementPdfDownload = () => {
  let email = "Joy#gmail.com"
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
  const print =()=>{
    window.print();
  }
  return (
    
    <div className= "pdf">
      <div className= "content">
        
        <div className='row'>
          
        <div className ="details">
                <h3> Print Date :{date}</h3>

                <h4>Name :Jahidul Hasan</h4>
                <h4>Email :joy@gmail.com</h4>
                <h4>Phone :01631124587</h4>

              </div>
        <img className='photo' src={logo}></img>
           </div>
        <div class="row" style={{right: "500px"}}>
          
          <div class="col-md-12">
            
            <div class="card ">
              
              <div class="card-header">
              <button onClick={() => window.print()} align="center" type="submit" class="btn btn-fill btn-primary"> Print</button>
              
                <h3 class="card-title">Statement</h3>
                
               
              </div>
              <div class="card-body">
                <div class="table-responsive-lg">
                  <table class="table tablesorter ">
                    <thead class=" text-primary">
                      <tr>
                        <th>Account Number</th>
                        <th>Transaction Type</th>
                        <th class="text-center">Transaction Amount</th>
                        <th class="text-center">Current Balance</th>
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
      
  );
};
export default StatementPdfDownload;
