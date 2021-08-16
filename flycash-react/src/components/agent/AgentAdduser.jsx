import React from "react";
import SideNav from "../layouts/sidebar/agentsSidebar";
import Navbar from "../layouts/navbars/AgentNavbar";

import { Link } from "react-router-dom";
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

const AgentAdduser = () => {
  return (
    <>
      <div className="main-panel ps">
        <SideNav />
        <Navbar />
        <div className="content">
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>
                  <h2 className="title">Add User</h2>
                </CardHeader>
                <CardBody>

                  <Form>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                            placeholder="Enter User's Full Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Email</label>
                          <Input
                            placeholder="Enter User's Email"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Mobile Number</label>
                          <Input
                            placeholder="+8801*********"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>NID Number</label>
                          <Input
                            placeholder="8745963258"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Date Of Birth</label>
                          <Input
                            placeholder="02-04-1996"
                            type="date"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Account Type</label>
                          <select
                            type="text"
                            name="type"
                            class="form-control"
                            placeholder="Account Type"
                          >
                            <option
                              value="User"
                              name="user"
                              placeholder="Account Type"
                            >
                              User
                            </option>
                            </select>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            placeholder="Enter Password"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-md-1" md="5">
                        <FormGroup>
                          <label>Confirm Password</label>
                          <Input
                            placeholder="Re-Type-Password"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    

                    
                  </Form>
                  
                  <div class="form-group">
                        <button type="submit" class="btn btn-fill btn-primary">Add User</button>
                  </div>

                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </div>
      </div>
    </>
  );
};


export default AgentAdduser;
