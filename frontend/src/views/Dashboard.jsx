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
import moment from 'moment';
import jp from 'jsonpath';
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import data from '../output.json';

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";



//var jp = require('jsonpath');

class Dashboard extends Component {

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
    const tests = jp.query(data, '$.results[*].suites[*]')
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Specs"
                statsValue={data.stats.suites}
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Número Specs"
              />
            </Col>
            <Col lg={6} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-wallet text-success" />}
                statsText="Data"
                statsValue={moment(`${data.stats.start}`).format('DD/MM/YYYY')}
                statsIcon={<i className="fa fa-calendar-o" />}
                statsIconText="Último Teste"
              />
            </Col>
            <Col lg={3} sm={4}>
              <StatsCard
                bigIcon={<i className="pe-7s-graph1 text-danger" />}
                statsText="Erros"
                statsValue={data.stats.failures}
                statsIcon={<i className="fa fa-clock-o" />}
                statsIconText="No Último Teste"
              />
            </Col>

          </Row>
          <Row>
            
            <Col md={12}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Teste"
                category="Último Teste Realizado"
                stats="Teste Atual"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
              />
            </Col>
          </Row>

         
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
