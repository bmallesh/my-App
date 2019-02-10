import React, { Component } from 'react';
import './navbar.css'
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
  DropdownMenu, Button, Modal, ModalHeader, ModalBody, ModalFooter,
  DropdownItem
} from 'reactstrap';

import SignUp from "../SignUp/SignUp"




class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      login: true
    };
    this.SignUpPage=this.SignUpPage.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  SignUpPage(){
    console.log("sign up")
    this.setState({
      login:false
    })
  }



  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md navbar-dark  ">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" data-toggle="modal" data-target="#myModal">Login & SignUp</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="container">
          {/* <!-- The Modal --> */}
          <div class="modal" id="myModal">
            <div class="modal-dialog">
              <div class="modal-content">
                {this.state.login ? (
                  <div>
                    < div class="modal-header">
                      <h4 class="modal-title">Login</h4>
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Username</span>
                          </div>
                          <input type="text" class="form-control" placeholder="Username" />
                        </div>
                        <div class="input-group mb-3">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Password</span>
                          </div>
                          <input type="text" class="form-control" placeholder="Password" />
                        </div>
                        <button type="button" class="btn loginBtn btn-block">Login</button>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <p>New to Ecom?<a class="pointer creatAccount" onClick={this.SignUpPage} > Create an Account</a></p>
                    </div>
                  </div>
                ) : (
                    <SignUp />
                  )}

              </div>
            </div>
          </div>

        </div>

      </div >
    );
  }
}

export default Navbar1;
