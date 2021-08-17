import React from "react";
import SideNav from "../layouts/sidebar/customersSidebar";
import Navbar from "../layouts/navbars/CustomerNavbar";
import { getUser, removeUserSession } from "../auth/connect/getSession";
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

const profile = () => {
  const user = getUser();
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
                  <h5 className="title">Edit Profile</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Email address</label>
                          <Input
                            defaultValue={user.email}
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Date Of Birth</label>
                          <Input
                            defaultValue={user.dob}
                            placeholder={user.dob}
                            disabled
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Nid</label>
                          <Input
                            defaultValue={user.nid}
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                    <Col  className="pr-md-1" md="4">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                          name="name"
                            defaultValue={user.name}
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Phone Number
                          </label>
                          <Input defaultValue={user.phone} placeholder="joy@email.com" type="email" />
                        </FormGroup>
                      </Col>
                      <Col className="px-md-1" md="4">
                        <FormGroup>
                          <label>Account Type</label>
                          <Input
                            defaultValue={user.type}
                            disabled
                            placeholder="City"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                     
                    </Row>
                    
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" color="primary" type="submit">
                    Save
                  </Button>
                </CardFooter>
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
                        src={require("../../black/img/anime6.png").default}
                      />
                      <h5 className="title">{user.name}</h5>
                    </a>
                    <p className="description"> {user.type} Account </p>
                  </div>
                  <div className="card-description">
                    Do not be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves
                    Kanye I love Rick Owens’ bed design but the back is...
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

export default profile;
