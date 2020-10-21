import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useState } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { withRouter } from "react-router";

class Login extends React.Component {
  handleLoginSubmit=event=>{
    event.preventDefault();
    const userName=event.target.element.userName.value;
    const password=event.target.element.password.value;
    // Axios.post("/api/login",).then((value)=>{
    //   if(value===1){
    //     this.history.push("/");
    //   }
    // })
    this.props.history.push("/singed");
  }
  render(){
      return(
    <div >
      <Navbar color="secondary" light expand="md">
        <NavbarBrand>Demo Retro</NavbarBrand>
        <NavbarToggler Let me/>
      </Navbar>
      <div className="App">
        <h1 className="Center">Login</h1>
        <Form onSubmit={this.handleLoginSubmit}>
       <FormGroup>
          <Label for="userName">User name</Label>
          <Input name="userName" id="userName" placeholder="your user name" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="your password"/>
        </FormGroup>
        <Button color="success" className="Center">Submit</Button>
        </Form>
        <h6 className="Right">Forgot password?</h6>
      </div>
    </div>
      )
  };
}

export default withRouter(Login);