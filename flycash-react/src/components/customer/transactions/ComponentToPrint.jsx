import React, { useRef, useEffect, useState } from "react";
import "../../../App.css";
import Navbar from "../../layouts/navbars/CustomerNavbar";
import SideNav from "../../layouts/sidebar/customersSidebar";
import StatementsTableRow from "./StatementsTableRow";
import { Link } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
const ComponentToPrint = () => {
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
        <SideNav />
        <div className="main-panel ps">
          <Navbar />
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

const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <button className="btn btn-fill btn-primary" onClick={handlePrint}>Print this out!</button>
    </div>
  );
};
export default Example;