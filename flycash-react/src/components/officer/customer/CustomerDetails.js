import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import swal from 'sweetalert';

class CustomerDeatils extends Component{

    state = {
        customers: [],
        loding: true,
    }

    async componentDidMount() {

        const res = await axios.get('http://localhost:8000/api/show-customer');

        //console.log(res);

        if(res.data.status === 200 ){
            
            this.setState({
                customers: res.data.customers,
                loding: false,    
            });
        }
    }

    deleteEmployee = async (e,id)=>{

        const chickDelBtn = e.currentTarget;
        chickDelBtn.innerText = 'Deleting';

        const res = await axios.delete(`http://localhost:8000/api/delete-customer/${id}`);

        if(res.data.status === 200){

            //console.log(res.data.message);

            swal({
                title: "Deleted!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });

            chickDelBtn.closest('tr').remove();
        }
    }


//======================================================================


    render(){

        var customer_table = "";

        if(this.state.loding){
            customer_table = <tr><td colSpan="6"><h2>loding...</h2></td></tr>
        }else{
            customer_table = 
                this.state.customers.map( (item)=> {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.nid}</td>
                            <td>{item.dob}</td>
                            <td>{item.balance}</td>
                            <td>{item.transaction_status}</td>
                            <td>{item.type}</td>

                            <td>
                                <Link to={`details-customer/${item.id}`} className="btn btn-success btn-sm">View</Link>
                            </td>
                            <td>
                                <Link to={`edit-customer/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
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
                                <h4>Customer View Page
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <h2>Customer Data</h2>
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>NID</th>
                                            <th>DOB</th>
                                            <th>Balance</th>
                                            <th>TS</th>
                                            <th>Type</th>
                                            <th>View</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
            
                                    <tbody>
                                        {customer_table}
                                    </tbody>
                                </table>

                                <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerDeatils;