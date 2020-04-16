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
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  Button
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import jp from 'jsonpath';
import data from '../files/output.json';


class TestDetails extends Component {
  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    const suites = jp.query(data, '$..tests[*]');
    var str = '';
    return (
      <div>
     
      <Grid>
        <Row>
          {suites.map(result => (
            str = `${result.err.message}`,
            result.fail ? (
              <Col md={6}>
                <Card                  
                  id="chartActivity"
                  title={result.title}
                  stats="Teste Reprovado"
                  statsIcon="fa fa-times-circle"
                  content={
                    <div className="ct-chart failCard">
                      <p>{str.split("retrying:").pop()}</p>
                    </div>
                  }
                />
              </Col>):"" 
          ))}

          {
            data.stats.failures == 0 ? (
              <Col md={24}>
                <Card
                  
                  id="chartActivity"
                  title=""
                  content={
                    <div className="ct-chart failCard">
                      <h2>TODOS OS TESTE FORAM APROVADOS</h2>

                    </div>
                  }
                />
              </Col>) : ""
          }


        </Row>
      </Grid></div>
    );
  }
}

export default TestDetails;
