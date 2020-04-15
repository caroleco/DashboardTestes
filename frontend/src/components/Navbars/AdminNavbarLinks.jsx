/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component, useState } from "react";
import { NavItem, Nav, NavDropdown, MenuItem, Button } from "react-bootstrap";

class AdminNavbarLinks extends Component {
 
  render() {  
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>

        </Nav>
        <Nav pullRight>
          <NavItem eventKey={3} href="#">
            
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
