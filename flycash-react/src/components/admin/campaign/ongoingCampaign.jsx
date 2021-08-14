import React, { useEffect, useState } from "react";
import "../../../App.css";
import Navbar from "../../layouts/navbars/CustomerNavbar";
import AdminsSidebar from "../../layouts/sidebar/adminsSidebar";
import { Link } from "react-router-dom";

const OngoingCampaign = () => {
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
    <div>
      <div className="wrapper">
        <AdminsSidebar />
        <div className="main-panel ps">
          <Navbar />
          <div className="content">
            <div class="row" style={{ right: "500px" }}>
              <div class="col-md-12">
                <div class="card ">
                  <div class="card-header">
                    <h3 class="card-title"> Translation List</h3>
                    <Link
                      to="/state"
                      align="center"
                      type="submit"
                      class="btn btn-fill btn-primary"
                    >
                      {" "}
                      Print
                    </Link>
                  </div>
                  <div class="card-body">
                    <div class="table-responsive-lg">
                      <table class="table tablesorter " id="">
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
      </div>
    </div>
  );
};
export default OngoingCampaign;
