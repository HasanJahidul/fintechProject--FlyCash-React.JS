
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import './black/css/black-dashboard.css';
import "./App.css";
import "./black/css/nucleo-icons.css";
import cashinPNG from "./black/img/icons/cashin.png";
import cashoutPNG from "./black/img/icons/cashout.png";
import paymentPNG from "./black/img/icons/payment.png";
import rechargePNG from "./black/img/icons/recharge.png";
import sendPNG from "./black/img/icons/sendmoney.png";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Dashboard from "./components/customer/Dashboard";
import Profile from "./components/customer/profile";
import Addmoney from "./components/customer/transactions/addMoney";
import TransactionList from "./components/customer/transactions/transactionlist";
import Welcome from "./components/welcome";
import ErrorPage from './components/Error404';


function App() {
  //========================= CUSTOMER ===========================================
  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/customer/statement">
            <TransactionList  />
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
            children={<Addmoney status="Recharge" imgpath={rechargePNG}  numberType='Mobile'/>}
          ></Route>

          <Route path="*">
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
