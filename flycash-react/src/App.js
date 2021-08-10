import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import './black/css/black-dashboard.css';
import "./App.css";
import './black/css/nucleo-icons.css';
import Dashboard from './components/customer/Dashboard';
import TransactionList from "./components/customer/transactions/transactionlist";
import SideNav from "./components/layouts/sidebar/customersSidebar";


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
          <Route exact path="/">
           <TransactionList list={transList} />
           
            
          </Route>
          <Route exact path="/a">
          <SideNav />
            <div className= "main-panel ps">
            <Dashboard/>
            </div>
            
             
          </Route>
          <Route path="*">404 not found</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
