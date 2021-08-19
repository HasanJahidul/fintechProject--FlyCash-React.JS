import React, { useEffect, useState } from "react";
import "../../../App.css";
import AdminNavbar from "../../layouts/navbars/AdminNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";
// import logo from "../../../black/img/flycash.png";

const TransactionDetails = () => {
  const TableRow = ({ phone, transaction_type, date, amount, balance }) => {
    return (
      <tbody>
        <tr>
          <th>{phone}</th>
          <th>{transaction_type}</th>
          <th>{amount}</th>
          <th>{balance}</th>
          <th>{date}</th>
        </tr>
      </tbody>
    );
  };
  // const user = getUser();
  // let today = new Date();

  // let date =
  //   today.getDate() +
  //   "-" +
  //   parseInt(today.getMonth() + 1) +
  //   "-" +
  //   today.getFullYear();

  // const [transList, setTransactionList] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/agent/AgentTransactionlist").then(
  //     (response) => {
  //       response.json().then((result) => {
  //         setTransactionList(result);
  //       });
  //     }
  //   );
  // }, []);
  return (
    <div className="pdf">
      <AdminsSidebar />
      <div className="main-panel ps">
        <AdminNavbar />
        <div className="content">
          <div class="row" style={{ right: "500px" }}>
            <div class="col-md-12">
              <div class="card ">
                <div class="card-header">
                  <h3 class="card-title"> Translation List</h3>
                </div>
                <div class="card-body">
                  <div class="table-responsive-lg">
                    <table class="table tablesorter " id="">
                      <thead class=" text-primary">
                        <tr>
                          <th>Account Number</th>
                          <th>Transaction Type</th>
                          <th>Transaction Amount</th>
                          <th>Current Balance</th>
                          <th>Date</th>
                        </tr>
                      </thead>

                      {/* {transList.map((u) => {
                        return <TableRow key={u.id} {...u} />;
                      })} */}
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
export default TransactionDetails;
