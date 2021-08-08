import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//=============================Start Officer Class===============================

import Home from './components/officer/Home';

import CustomerDeatils from './components/officer/customer/CustomerDetails';
import CustomerEdit from './components/officer/customer/CustomerEdit';
import CustomerTransaction from './components/officer/customer/CustomerTransaction';

import AgentDetails from './components/officer/agent/AgentDetails';
import AgentEdit from './components/officer/agent/AgentEdit';
import AgentTransaction from './components/officer/agent/AgentTransaction';

//=============================End Officer Class===============================

function App() {
  return (
    <Router>
      <Switch>
{/* =============================Start Officer Router=============================== */}


        <Route exact path="/" component={Home}/>

        <Route exact path="/show-customer" component={CustomerDeatils}/>
        <Route exact path="/edit-customer/:id" component={CustomerEdit}/>
        <Route exact path="/transaction-customer" component={CustomerTransaction}/>

        <Route exact path="/show-agent" component={AgentDetails}/>
        <Route exact path="/edit-agent/:id" component={AgentEdit}/>
        <Route exact path="/transaction-agent" component={AgentTransaction}/>



{/* =============================End Officer Router=============================== */}
      </Switch>
    </Router>
  );
}

export default App;
