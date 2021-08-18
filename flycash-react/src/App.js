import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

//import './black/css/black-dashboard.css';
import "./App.css";
import "./black/css/nucleo-icons.css";
import cashinPNG from "./black/img/icons/cashin.png";
import cashoutPNG from "./black/img/icons/cashout.png";
import transferPNG from "./black/img/icons/money.png";
import paymentPNG from "./black/img/icons/payment.png";
import rechargePNG from "./black/img/icons/recharge.png";
import sendPNG from "./black/img/icons/sendmoney.png";
import donatePNG from "./black/img/icons/donate.png";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Dashboard from "./components/customer/Dashboard";
import Password from "./components/customer/Password";
import Profile from "./components/customer/profile";
import Addmoney from "./components/customer/transactions/addMoney";
import TransactionList from "./components/customer/transactions/transactionlist";
import ErrorPage from "./components/Error404";
import Welcome from "./components/welcome";
import Donate from "./components/customer/transactions/Donate";
import PrintStatement from "./components/customer/transactions/StatementPdfDownload";

import AdminDashboard from "./components/admin/AdminDashboard";
import AddCampaign from "./components/admin/campaign/addCampaign";
import OngoingCampaign from "./components/admin/campaign/ongoingCampaign";
import RemoveCampaign from "./components/admin/campaign/removeCampaign";

import AdminRegister from "./components/admin/addComponent";

import AdminAddMoney from "./components/admin/agent/addMoney";

import BlockAgent from "./components/admin/agent/blockAgent";

import AgentList from "./components/admin/agent/agentList";

import BlockCustomer from "./components/admin/user/blockCustomer";
import TransactionDetails from "./components/admin/user/transactionDetails";

import BlockOfficer from "./components/admin/officer/blockOfficer";
import OfficerList from "./components/admin/officer/officerList";

import CustomerTransactionList from "./components/admin/user/customerTransactionList";
import CustomerList from "./components/admin/user/customerList";

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
      <Router>
        <Switch>
          <Route exact path="/customer/statement">
            <TransactionList />
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
          <Route exact path="/customer-profile">
            <Profile />
          </Route>
          <Route exact path="/customer-change-password">
            <Password />
          </Route>
          <Route
            exact
            path="/customer/add-money"
            children={
              <Addmoney
                status="Add Money"
                imgpath={cashinPNG}
                buttonName="Add Money"
                numberType="Bank Account"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/send-money"
            children={
              <Addmoney
                status="Send Money"
                imgpath={sendPNG}
                buttonName="Send Money"
                numberType="FlyCash "
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/cash-out"
            children={
              <Addmoney
                status="Cash out"
                imgpath={cashoutPNG}
                buttonName="Cash out"
                numberType="Agent"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/payment"
            children={
              <Addmoney
                status="Payment"
                imgpath={paymentPNG}
                buttonName="Pay"
                numberType="Merchant"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/mobile-recharge"
            children={
              <Addmoney
                status="Mobile Recharge"
                imgpath={rechargePNG}
                buttonName="Recharge"
                numberType="Mobile"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/transfer-money"
            children={
              <Addmoney
                status="Transfer money"
                imgpath={transferPNG}
                buttonName="Transfer"
                numberType="Bank Account"
              />
            }
          ></Route>
          <Route
            exact
            path="/customer/donate"
            children={
              <Donate
                status="Donation"
                imgpath={donatePNG}
                buttonName="Transfer"
                numberType="Select NGO's"
              />
            }
          ></Route>
          <Route path="/state">
            <PrintStatement />
          </Route>

          {/*+++++++++++++++++++++++++++++++++++++++++++++++++++ Admin +++++++++++++++++++++++++++++++++++*/}

          <Route exact path="/admin-dashboard">
            <AdminDashboard />
          </Route>

          <Route exact path="/admin-addCampaign">
            <AddCampaign />
          </Route>

          <Route exact path="/admin-ongoingCampaign">
            <OngoingCampaign />
          </Route>

          <Route exact path="/admin-removeCampaign">
            <RemoveCampaign />
          </Route>

          <Route exact path="/admin-addMoney">
            <AdminAddMoney />
          </Route>

          <Route exact path="/admin-blockAgent">
            <BlockAgent />
          </Route>

          <Route exact path="/admin-agentList">
            <AgentList />
          </Route>

          <Route exact path="/admin-customerList">
            <CustomerList />
          </Route>

          <Route exact path="/admin-blockCustomer">
            <BlockCustomer />
          </Route>

          <Route exact path="/admin-transactionDetails">
            <TransactionDetails />
          </Route>

          <Route exact path="/admin-customerTransactionList">
            <CustomerTransactionList />
          </Route>

          <Route exact path="/admin-blockOfficer">
            <BlockOfficer />
          </Route>

          <Route exact path="/admin-officerList">
            <OfficerList />
          </Route>

          <Route exact path="/admin-userTransactionList">
            <CustomerTransactionList />
          </Route>

          <Route
            exact
            path="/admin-addUser"
            children={
              <AdminRegister
                status="Add Customer"
                type="User"
                buttonName="Add User"
              />
            }
          ></Route>

          <Route
            exact
            path="/admin-addAgent"
            children={
              <AdminRegister
                status="Add Agent"
                type="Agent"
                buttonName="Add Agent"
              />
            }
          ></Route>

          <Route
            exact
            path="/admin-addOfficer"
            children={
              <AdminRegister
                status="Add Officer"
                type="Officer"
                buttonName="Add Officer"
              />
            }
          ></Route>

          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
