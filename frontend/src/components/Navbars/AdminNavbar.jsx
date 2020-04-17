
import React, { Component } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";
import api from "services/api.js";

class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false,
      loading: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }

  fetchData = () =>  {
    this.setState({ loading: true });
    try {     
       api.get('/execute').then(() => {        
          this.setState({ loading: false });
      })
    }catch(e){
      console.log('Erro XXXXXXX' + e)
    }
  

  };
 
  render() {
    const { loading } = this.state;
    
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/admin/dashboard">{this.props.brandText}</a>
          </Navbar.Brand>
         
        </Navbar.Header>
        <Nav>
          <Button style={{fontSize:"10px",color:"#428bca"}} className="btn btn-primary" onClick={this.fetchData} disabled={loading}>
          {loading && (
            <i
              className="fa fa-refresh fa-spin"
              style={{ marginRight: "5px" }}
            />
          )}{loading && <span>Executando...</span>}
          {!loading && <span>Executar Testes</span>}</Button>
          </Nav>
        <Navbar.Collapse>
          <AdminNavbarLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
