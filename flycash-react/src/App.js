import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
//import './black/css/black-dashboard.css';
import "./App.css";
import "./black/css/nucleo-icons.css";

import Welcome from "./components/welcome";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

import AgentDashboard from "./components/agent/AgentDashboard";
import AgentProfile from "./components/agent/AgentProfile";
import AgentProfileView from "./components/agent/AgentProfileView";
import AgentFeedback from "./components/agent/AgentFeedback";
import AgentAdduser from "./components/agent/AgentAdduser";
import AgentPassword from "./components/agent/AgentPassword";

import AgentTransactionList from "./components/agent/transactions/AgentTransactionlist";
import AgentAddmoney from "./components/agent/AgentAddmoney";

import takainAGN from "./black/img/agent/takain.png";
import takaoutAGN from "./black/img/agent/takaout.png";
import adduserAGN from "./black/img/agent/adduser.png";
import requestmoneyAGN from "./black/img/agent/reqMoney.png";
import paybillAGN from "./black/img/agent/paybill.png";
import transactionlistAGN from "./black/img/agent/transaction.png";
import rechargeAGN from "./black/img/agent/recharge.png";
import upcomingAGN from "./black/img/agent/comingsoon.png";

import bkashAGN from "./black/img/agent/BKash.png";
import nagadAGN from "./black/img/agent/Nagad.png";
import rocketAGN from "./black/img/agent/Rocket.png";
import surecashAGN from "./black/img/agent/surecash.png";
import upayAGN from "./black/img/agent/upay.jpg";
import bankcardAGN from "./black/img/agent/CreditCard.png";







import AgentTransaction from "./components/agent/transactions/AgentTransaction";



import AgentPayBill from "./components/agent/transactions/AgentPayBill";
import AgentAddmoneyCard from "./components/agent/transactions/AgentAddmoneyCard";

import ErrorPage from './components/Error404';






import cashinPNG from "./black/img/icons/cashin.png";
import cashoutPNG from "./black/img/icons/cashout.png";
import transferPNG from "./black/img/icons/money.png";
import paymentPNG from "./black/img/icons/payment.png";
import rechargePNG from "./black/img/icons/recharge.png";
import sendPNG from "./black/img/icons/sendmoney.png";
import donatePNG from "./black/img/icons/donate.png";


function App() {
  //========================= Agent ===========================================
  
  return (
    <>
      <Router>
        <Switch>
          
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/agent-dashboard">
            <AgentDashboard />
          </Route>
          <Route exact path="/agent-addmoney">
            <AgentAddmoney />
          </Route>
          <Route exact path="/agent-agentprofile">
            <AgentProfile />
          </Route>
          <Route exact path="/agent-agentfeedback">
            <AgentFeedback />
          </Route>
          <Route exact path="/agent-agentadduser">
            <AgentAdduser />
          </Route>
          <Route exact path="/agent-agentprofileview">
            <AgentProfileView />
          </Route>
          <Route exact path="/agent-change-password">
            <AgentPassword />
          </Route>

          <Route exact path="/agent/agent-transactionlist">
            <AgentTransactionList  />
          </Route>
          
          <Route
            exact
            path="/agent/agent-cash-in"
            children={<AgentTransaction status="Cash In" imgpath={takainAGN} buttonName="Cash In" numberType='User ' />}
          ></Route>
          <Route
            exact
            path="/agent/agent-cash-out"
            children={<AgentTransaction status="Cash out" imgpath={takaoutAGN}  buttonName="Cash out" numberType='Agent'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-recharge"
            children={<AgentTransaction status="Mobile Recharge" imgpath={rechargeAGN}  buttonName="Recharge" numberType='Mobile'/>}
          ></Route>
           <Route
            exact
            path="/agent/agent-requestmoney"
            children={<AgentTransaction status="Request Money" imgpath={requestmoneyAGN}  buttonName="Request" numberType='Flycash'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-paybill"
            children={<AgentPayBill status="Pay Bill" imgpath={paybillAGN} buttonName="Pay Bill"  numberType="Mobile Number"/>}
          ></Route>
          

          <Route
            exact
            path="/agent/agent-addmoney-Bkash"
            children={<AgentTransaction status="Add Money(Bkash)" imgpath={bkashAGN}  buttonName="Add Money" numberType='Bkash'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Nagad"
            children={<AgentTransaction status="Add Money(Nagad)" imgpath={nagadAGN}  buttonName="Add Money" numberType='Nagad'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Rocket"
            children={<AgentTransaction status="Add Money(Rocket)" imgpath={rocketAGN}  buttonName="Add Money" numberType='Rocket'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-SureCash"
            children={<AgentTransaction status="Add Money(SureCash)" imgpath={surecashAGN}  buttonName="Add Money" numberType='SureCash'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Upay"
            children={<AgentTransaction status="Add Money(Upay)" imgpath={upayAGN}  buttonName="Add Money" numberType='Upay'/>}
          ></Route>
          <Route
            exact
            path="/agent/agent-addmoney-Card"
            children={<AgentAddmoneyCard status="Add Money(Card)" imgpath={bankcardAGN} buttonName="Add Money"  numberType="Card Holder Number"/>}
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