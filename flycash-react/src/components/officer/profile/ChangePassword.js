import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import swal from 'sweetalert';

class ChangePassword extends Component{

    state = {
        current_password:'',
        new_password:'',
        re_password:'',
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    // async componentDidMount(){

    //     const officer_id = this.props.match.params.id;

    //     const res = await axios.get(`http://localhost:8000/api/change-password/${officer_id}`);

    //     if(res.data.status === 200){

    //         //console.log(officer_id);
    //         this.setState({
    //             name: res.data.profiles.name,

    //         });
    //     }else{
    //         swal({
    //             title: "Warning!",
    //             text: res.data.message,
    //             icon: "warning",
    //             button: "OK!",
    //           });
              
    //         this.props.history.push('/view-profile');  
    //     }
    // }

    changePassword = async (e) =>{
        e.preventDefault();

        const res = await axios.post('http://localhost:8000/api/change-password', this.state);

        if(res.data.status === 200){
            console.log(res.data.message);
            this.setState({
                current_password:'',
                new_password:'',
                re_password:'',
            });
        }
    }

    render(){
        return(
            <div ClassName="main-container">
                <div ClassName="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">

                                <h4>Officer Change Password
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Back</Link>
                                </h4>
                            </div>

                            <div className="card-body">

                                <form onSubmit={this.changePassword}>

                                    <div className="form-group mb-3">
                                        <lebel>Current Password</lebel>
                                        <input type="text" name="current_password" value={this.state.current_password} className="form-control" onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>New Password</lebel>
                                        <input type="text" name="new_password" value={this.state.new_password} className="form-control"  onChange={this.handleInput}/>
                                    </div>
                                    <div className="form-group mb-3">
                                        <lebel>Re Password</lebel>
                                        <input type="text" name="re_password" value={this.state.re_password} className="form-control"  onChange={this.handleInput}/>
                                    </div>
                                    
                                    <div className="form-group mb-3">
                                        <button type="submit" id="updatebtn" className="btn btn-primary">Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChangePassword;