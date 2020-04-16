

import React, { Component } from "react";
import moment from 'moment';
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import data from '../files/output.json';

import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {
  dataPie,
  legendPie
} from "variables/Variables.jsx";
import Load from "./Load";

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
  state = {
    loading: false
  };

  
  render() {
    const { loading } = this.state;
    {!!(this.data) ? this.data = {"teste":"t"}:console.log('ok')};
    return (
     
      <div className="content">
         
        <Grid fluid>
          {loading == false ? (
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
                  statsText="Date"
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
          ) : ""}
          <Row>

            <Col md={12}>
              {loading == false ? (
                < Card
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
                  legend={
                    <div className="legend">{this.createLegend(legendPie)}</div>
                  }
                />
              ) : <Load />}
            </Col>
          </Row>


        </Grid>
      </div>
    );
  }
}

export default Dashboard;
