import axios from 'axios';
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../../../App.css";
import { setUserSession } from "../../auth/connect/getSession";
import Footer from "../../layouts/footer";
import NavBar from "../../layouts/navbars/CustomerNavbar";
import Sidebar from "../../layouts/sidebar/customersSidebar";

const AddMoney = (props) => {
  //let history = useHistory();

    var email = "joy@gmail.com";
    var transaction_type = props.status;
    // usestate = {
    //   error:[]
    // }
    const history = useHistory();
    const [transaction, setTransaction] = useState({
        
        phone:'',
        amount:'',
        password:'',
        error:[]
    });
    const [msg, setMsg] = useState(" ");
    const [error, setError] = useState(" ");
    //const [error, seterror] = useState(" ");
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTransaction({  ...transaction,[name]: [value]})
        console.log(name, value);
        
    }
        const maketransaction = async (e) => {
            e.preventDefault();
            const phone =transaction.phone.toString();
            const amount =transaction.amount.toString();
            const password =transaction.password.toString();
            const res = await axios.post('http://localhost:8000/api/transaction', { transaction_type: transaction_type,phone: phone,amount:amount,password:password,email:email});
            // { transaction_type: transaction_type,phone: phone,amount:amount,password:password,email:email}
            if (res.data.status === 200) {
                console.log(res.data.message);
                setMsg(res.data.message);
                
                console.log(res.data.data)
                setTransaction({ transaction_type: '',
                phone:'',
                amount:'',
                password:'' })
                setUserSession(email,res.data.user_status);
                
                //setTimeout(() => { history.push('/customer/transactionlist'); }, 3000);
                 
            }
            else if (res.data.status === 240) {
                setMsg(res.data.message);
                console.log(res.data.data)
                setTransaction({ transaction_type: '',
                phone:'',
                amount:'',
                password:'' })
                //setUserSession(email,res.data.user_status);
            }
            else if (res.data.status === 422) {
              setMsg(res.data.message);
              console.log("hi");
              setTransaction({ transaction_type: '',
              phone:'',
              amount:'',
              password:'' })
          }
            else {
              setError(res.data.error);
              console.log(error);
              // this.setState({
              //   error:res.data.error,
              // });
            }
            e.stopPropagation();
        
        }
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel ps">
        <NavBar />
        <div className="content">
          <div className="d-flex justify-content-center">
            <div className="col-md-4">
              <div className="card card-user">
              <form onSubmit={maketransaction} >
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
                      <span  role="alert">
                            {msg}
                        </span>
                    </div>
                  </p>
                  <label>{props.numberType} Number</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    value={transaction.phone}
                    placeholder="+8801*********"
                   onChange={handleInputChange}
                  ></input>
                  <span className="text-danger"> {error.phone}</span>
                  <div>
                  <label>Amount</label>
                  <input
                    type="text"
                    name="amount"
                    className="form-control"
                    placeholder="0.00"
                    value={transaction.amount}
                   onChange={handleInputChange}
                  />
                  <span className="text-danger"> {error.amount}</span>
                  </div>
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="******"
                    value={transaction.password}
                   onChange={handleInputChange}
                  ></input>
                   <span className="text-danger"> {error.password}</span>
                </div>

                <div className="card-footer">
                  <button  className="btn btn-fill btn-primary"  >
                    {props.buttonName}
                  </button>
                  
                </div>
                </form>
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
