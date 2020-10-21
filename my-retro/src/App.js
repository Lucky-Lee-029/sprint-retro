import { withRouter } from "react-router";
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './App.css';
import { useState } from 'react';
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

class App extends React.Component {
  handleLoginSubmit(event){
    // event.preventDefault();
    // const userName=event.target.element.userName.value;
    // const password=event.target.element.password.value;
    // Axios.post("/api/login",).then((value)=>{
    //   if(value===1){
    //     this.history.push("/");
    //   }
    // })
  }
  render() {
    return(
    <div>
      <Navbar color="secondary" light expand="md">
        <NavbarBrand>Demo Retro</NavbarBrand>
        <NavbarToggler Let me/>
      </Navbar>
      <div className="App">
        <h1 className="Center">Login xong roi</h1>
      </div>
    </div>
    )
  };
}

export default withRouter(App);
