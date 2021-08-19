import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import './black/css/black-dashboard.css';
import "./App.css";
import "./black/css/nucleo-icons.css";
import cashinPNG from "./black/img/icons/cashin.png";
import cashoutPNG from "./black/img/icons/cashout.png";
import donatePNG from "./black/img/icons/donate.png";
import transferPNG from "./black/img/icons/money.png";
import paymentPNG from "./black/img/icons/payment.png";
import rechargePNG from "./black/img/icons/recharge.png";
import sendPNG from "./black/img/icons/sendmoney.png";
import Login from "./components/auth/login";
import Register from "./components/auth/Register";
import Dashboard from "./components/customer/Dashboard";
import Password from "./components/customer/Password";
import Profile from "./components/customer/Profile";
import Addmoney from "./components/customer/transactions/addMoney";
import Donate from "./components/customer/transactions/Donate";
import TransactionList from "./components/customer/transactions/transactionlist";
import ErrorPage from "./components/Error404";
//=======================Start Officer Import File==============================
import OfficerDashboard from "./components/officer/OfficerDashboard";
import Welcome from "./components/welcome";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

<<<<<<< HEAD
=======
import OfficerDashboard from './components/officer/OfficerDashboard';

import CustomerDetails from './components/officer/customer/CustomerDetails';
import CustomerEdit from './components/officer/customer/CustomerEdit';
import CustomerTransaction from './components/officer/customer/CustomerTransaction';

import AgentDetails from './components/officer/agent/AgentDetails';
import AgentEdit from './components/officer/agent/AgentEdit';
import AgentTransaction from './components/officer/agent/AgentTransaction';

import Profile from './components/officer/profile/Profile';
import ProfileEdit from './components/officer/profile/ProfileEdit';
import ChangePassword from './components/officer/profile/ChangePassword';

import AgentInvoice from './components/officer/agent/AgentInvoice';
import CustomerInvoice from './components/officer/customer/CustomerInvoice';

import PublicRoute from './PublicRouteOfficer';
import PrivateRoute from './PrivateRoute';
>>>>>>> officer

//=======================End Officer Import File================================

function App() {
  //========================= CUSTOMER ===========================================
  
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/customer/statement/:email">
            <TransactionList />
          </Route>

<<<<<<< HEAD
          <PublicRoute exact path="/" component={Welcome} />
          <PublicRoute path="/register" component={Register} page="register"/>
          <PublicRoute path="/login" component={Login} />

          <PrivateRoute
            exact
            path="/customer-dashboard"
            component={Dashboard}
          />
=======
          <Route exact path="/" component={Welcome}/>
          <PublicRoute exact path="/register" component={Register}/>
          <PublicRoute exact path="/login" component={Login}/>

          <PrivateRoute path="/customer-dashboard" component={Dashboard}/>
>>>>>>> officer

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
                buttonName="Donate"
                numberType="Select NGO's"
              />
            }
          ></Route>

          {/* ===========================================End Customer======================================= */}

          {/* ===========================================Start Officer Route======================================= */}

<<<<<<< HEAD
          <PrivateRoute
            exact
            path="/officer-dashboard"
            component={OfficerDashboard}
          />
=======
          <PrivateRoute path="/officer-dashboard" component={OfficerDashboard}/> 

          <PrivateRoute path="/show-customer" component={CustomerDetails}/> 
          <PrivateRoute path="/edit-customer/:id" component={CustomerEdit}/>
          <PrivateRoute path="/transaction-customer" component={CustomerTransaction}/>

          <PrivateRoute path="/show-agent" component={AgentDetails}/>
          <PrivateRoute path="/edit-agent/:id" component={AgentEdit}/>
          <PrivateRoute path="/transaction-agent" component={AgentTransaction}/>

          <PrivateRoute path="/view-profile" component={Profile}/>
          <PrivateRoute path="/edit-profile/:id" component={ProfileEdit}/>

          <PrivateRoute path="/change-password/:id" component={ChangePassword}/>

          <PrivateRoute path="/agent-invoice" component={AgentInvoice}/>
          <PrivateRoute path="/customer-invoice/" component={CustomerInvoice}/>
>>>>>>> officer

          {/* ===========================================End Officer Route======================================= */}

          <Route path="*">
            <ErrorPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
