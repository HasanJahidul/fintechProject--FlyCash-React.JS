import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import AgentSideNav from "../layouts/sidebar/agentsSidebar";
import AgentNavbar from "../layouts/navbars/AgentNavbar";
import { getUser, setUserSession } from "../auth/connect/getSession";
import axios from "axios";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Col,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const AgentProfile = () => {
  const user = getUser();

  const history = useHistory();
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [profile, setProfile] = useState({
    phone: "",
    name: "",
  });
  
  const [msg, setMsg] = useState(" ");
  const [error, setError] = useState(" ");
  //const [error, seterror] = useState(" ");
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProfile({ ...profile, [name]: [value] });
    console.log(name, value);
  };
  const updateAgentProfile = async (e) => {
    e.preventDefault();
    const phone = profile.phone.toString();
    const name = profile.name.toString();
    const email = user.email.toString();
    const res = await axios.post("http://localhost:8000/api/agent/AgentProfile", {
      name: name,
      phone: phone,
      email: email,
    });
    // { profile_type: profile_type,phone: phone,amount:amount,password:password,email:email}
    if (res.data.status === 200) {
      setNotify({
        isOpen: true,
        messages: res.data.message,
        type: "success",
      });

      setMsg(res.data.message);

      console.log(res.data.data);
      setProfile({ phone: "", name: "" });

      setUserSession(res.data.user_status.email, res.data.user_status);

      //setTimeout(() => { history.push('/customer-profile'); }, 3000);
    } else if (res.data.status === 240) {
      setMsg(res.data.message);
      //console.log(res.data.data);
      setProfile({
        phone: "",
        name: "",
      });
      setNotify({
        isOpen: true,
        messages: res.data.message,
        type: "error",
      });
      //setUserSession(email,res.data.user_status);
    } else {
      setError(res.data.error);
      console.log(error);
    }
    e.stopPropagation();
  };
  return (
    <>
      <div className="main-panel ps">
        <AgentSideNav />
        <AgentNavbar />
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
              <form onSubmit={updateAgentProfile}>
                <CardHeader>
                  <h2 className="title">Edit Profile</h2>
                  <spam role="alert">{msg}</spam>
                </CardHeader>
                <CardBody>
                  <Form>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                            name="name"
                            defaultValue={user.name}
                            placeholder="Name"
                            type="text"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.name}</span>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Mobile Number</label>
                          <Input
                            name="phone"
                            defaultValue={user.phone}
                            placeholder="Phone NUmber"
                            type="text"
                            onChange={handleInputChange}
                          />
                        </FormGroup>
                        <span className="text-danger"> {error.phone}</span>
                      </Col>
                    </Row>
                    
                    
                    
                    
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
                </form>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <CardBody>
                  <CardText />
                  <div className="author">
                    <div className="block block-one" />
                    <div className="block block-two" />
                    <div className="block block-three" />
                    <div className="block block-four" />
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar"
                        src={require("../../black/img/agent/anime6.png").default}
                      />
                      <h4 className="title">{user.name}</h4>
                    </a>
                    <h3 className="description">Agent</h3>
                  </div>
                  <div className="card-description">
                  FlyCash Agent Is The Webapp For One Of FlyCash’s Most Valued Sector.This Webapp Is The One-Stop 
                  Solution For Managing The Day-To-Day Activities And Transactions Of A FlyCash Agent.
                  </div>
                </CardBody>
                <CardFooter>
                  {/* <div className="button-container">
                    <Button className="btn-icon btn-round" color="facebook">
                      <i className="fab fa-facebook" />
                    </Button>
                    <Button className="btn-icon btn-round" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button className="btn-icon btn-round" color="google">
                      <i className="fab fa-google-plus" />
                    </Button>
                  </div> */}
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default AgentProfile;
