import React, { useEffect, useState } from "react";
import "../../../App.css";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import Sidebar from "../../layouts/sidebar/customersSidebar";
import { useHistory } from "react-router-dom";
import axios from 'axios';
const AddMoney = (props) => {
  //let history = useHistory();

    var email = "joy@gmail.com";
    var transaction_type = props.status;

    const history = useHistory();
    const [customersTransaction, setcustomersTransaction] = useState({
        transaction_type: '',
        amount: '',
        password: '',
        phone: ''
    });
    const [msg, setMsg] = useState(" ");
    const handleInput = (e) => {
        const transaction_type = e.target.transaction_type;
        const email = e.target.email;
        
        setcustomersTransaction({  ...customersTransaction,[transaction_type]: [email]})
        console.log(transaction_type, email);
        
    }
    const transaction = async (e) => {
        e.preventDefault();
        const transaction_type = customersTransaction.transaction_type.toString();
        const amount =customersTransaction.amount.toString();
        const password =customersTransaction.password.toString();
        const phone =customersTransaction.phone.toString();
        const res = await axios.post('http://localhost:8000/api/customer/transaction', 
        {transaction_type: transaction_type,amount: amount,password: password,phone: phone});
        if (res.data.status === 200) {
            console.log(res.data.message);
            setMsg(res.data.message);
            setcustomersTransaction({ transaction_type: '',
        amount: '',
        password: '',
        phone: '' })
            setTimeout(() => { history.push('/customer/statement'); }, 3000);
            // 
        }
        else if (res.data.status === 240) {
            setMsg(res.data.message);
            setcustomersTransaction({ transaction_type: '',
        amount: '',
        password: '',
        phone: ''})
        }
        else {
            setMsg(res.data.message);
            setcustomersTransaction({Ftransaction_type: '',
        amount: '',
        password: '',
        phone: ''})
        }

    
  };
    

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel ps">
        <NavBar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card card-user">
                <div className="card-body">
                  <p className="card-text">
                    <div className="author">
                      <div className="block block-one"></div>
                      <div className="block block-two"></div>
                      <div className="block block-three"></div>
                      <div className="block block-four"></div>

                      <a href="#">
                        <img
                          className="avatar"
                          src={props.imgpath}
                          alt="sendmoney"
                        ></img>
                      </a>
                      <h3>{transaction_type}</h3>
                    </div>
                    
                  </p>
                  <form
                   onSubmit={transaction}
                  ></form>
                  <label>{props.numberType} Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="+8801*********"
                    onChange={handleInput}
                  ></input>

                  <label>Amount</label>
                  <input
                    type="text"
                    name="amount"
                    className="form-control"
                    placeholder="0.00"
                    onChange={handleInput}
                  ></input>

                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    onChange={handleInput}
                  ></input>
                </div>

                <div class="card-footer">
                  <button type="submit" className="btn btn-fill btn-primary">
                    {props.buttonName}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddMoney;
