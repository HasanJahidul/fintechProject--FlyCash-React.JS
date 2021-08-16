import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CustomerTransactionList extends Component {
  state = {
    customers: [],
    loading: true,
  };

  async componentDidMount() {
    const res = await axios.get(
      "http://localhost:8000/api/transaction-customer"
    );

    if (res.data.status === 200) {
      this.setState({
        customers: res.data.customers,
        loading: false,
      });
    }
  }

  render() {
    var customer_transaction_table = "";

    if (this.state.loading) {
      customer_transaction_table = (
        <tr>
          <td colSpan="8">
            <h2>loading...</h2>
          </td>
        </tr>
      );
    } else {
      customer_transaction_table = this.state.customers.map((item) => {
        return (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.transaction_type}</td>
            <td>{item.amount}</td>
            <td>{item.balance}</td>
            <td>{item.date}</td>

            <td>
              <Link to={`customer-invoice`} className="btn btn-success btn-sm">
                pdf
              </Link>
            </td>
          </tr>
        );
      });
    }

    return (
      <div ClassName="container">
        <div ClassName="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Customer All Transaction Page
                  <Link
                    to={"/show-customer"}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Back
                  </Link>
                </h4>
              </div>

              <div className="card-body">
                <h2>Transaction Data</h2>
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Transaction Type</th>
                      <th>Amount</th>
                      <th>Balance</th>
                      <th>Date</th>
                      <th>Print</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>{customer_transaction_table}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerTransactionList;
