import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

//import swal from 'sweetalert';

class CustomerTransaction extends Component{

    state = {
        customers: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/transaction-customer');

       // console.log(res);

        if(res.data.status === 200 ){
            
            this.setState({
                customers: res.data.customers,
                loding: false,    
            });
        }
    }

    // deleteEmployee = async (e,id)=>{

    //     const chickDelBtn = e.currentTarget;
    //     chickDelBtn.innerText = 'Deleting';

    //     const res = await axios.delete(`http://localhost:8000/api/delete-customer/${id}`);

    //     if(res.data.status === 200){

    //         //console.log(res.data.message);

    //         swal({
    //             title: "Deleted!",
    //             text: res.data.message,
    //             icon: "success",
    //             button: "OK!",
    //           });

    //         chickDelBtn.closest('tr').remove();
    //     }
    // }


//======================================================================


    render(){

        var customer_transaction_table = "";

        if(this.state.loding){
            customer_transaction_table = <tr><td colSpan="8"><h2>loding...</h2></td></tr>
        }else{
            customer_transaction_table = 
                this.state.customers.map( (item)=> {
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
                                <Link to={`show-customer/${item.id}`} className="btn btn-success btn-sm">download pdf</Link>
                            </td>
                        </tr>
                    );
                });
        }

        return(
            <div ClassName="container">
                <div ClassName="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Customer All Transaction Page
                                    <Link to={'/show-customer'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <h2>Customer Data</h2>
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
                                            <th>View</th>
                                        </tr>
                                    </thead>
            
                                    <tbody>
                                        {customer_transaction_table}
                                    </tbody>
                                </table>

                                <Link to={'/show-customer'} className="btn btn-primary btn-sm float-end">Back</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerTransaction;