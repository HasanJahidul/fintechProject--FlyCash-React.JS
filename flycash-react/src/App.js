import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import './black/css/black-dashboard.css';
import "./App.css";
import "./black/css/nucleo-icons.css";
import cashinPNG from "./black/img/icons/cashin.png";
import cashoutPNG from "./black/img/icons/cashout.png";
import paymentPNG from "./black/img/icons/payment.png";
import sendPNG from "./black/img/icons/sendmoney.png";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Dashboard from "./components/customer/Dashboard";
import Addmoney from "./components/customer/transactions/addMoney";
import TransactionList from "./components/customer/transactions/transactionlist";
import Welcome from "./components/welcome";

//admin
import AdminDashboard from "./components/admin/AdminDashboard";


function App() {
  //========================= CUSTOMER ===========================================
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
    <>
      {console.log(transList)}
      <Router>
        <Switch>
          <Route exact path="/customer/statement">
            <TransactionList list={transList} />
          </Route>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/customer-dashboard">
            <Dashboard />
          </Route>

          <Route exact path="/admin-dashboard">
            <AdminDashboard />
          </Route>

          <Route
            exact
            path="/customer/add-money"
            children={<Addmoney status="Add Money" imgpath={cashinPNG}  numberType='Bank Account'/>}
          ></Route>
          <Route
            exact
            path="/customer/send-money"
            children={<Addmoney status="Send Money" imgpath={sendPNG} numberType='FlyCash ' />}
          ></Route>
          <Route
            exact
            path="/customer/cash-out"
            children={<Addmoney status="Cash out" imgpath={cashoutPNG}  numberType='Agent'/>}
          ></Route>
          <Route
            exact
            path="/customer/payment"
            children={<Addmoney status="Payment" imgpath={paymentPNG}  numberType='Merchant'/>}
          ></Route>
          <Route
            exact
            path="/customer/mobile-recharge"
            children={<Addmoney status="Mobile Recharge" imgpath={paymentPNG}  numberType='Merchant'/>}
          ></Route>

          <Route path="*">404 not found</Route>
        </Switch>
      </Router>
    </>
  );

}

export default App;
