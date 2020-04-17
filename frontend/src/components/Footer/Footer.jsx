
import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://br.linkedin.com/in/caroline-lacerda-63977a178">
              Caroline Lacerda
            </a>
            , Dashboard de testes
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
