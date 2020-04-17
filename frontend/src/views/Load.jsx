
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import load from "../assets/img/loading.gif";

import Card from "components/Card/Card";

class Load extends Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Loading..."
                                ctAllIcons
                                content={
                                    <Row>
                                        <Col
                                            md={12}
                                            className="font-icon-list">
                                            <div className="font-icon-detail">
                                                <img className="loading" src={load} alt="" />
                                            </div>
                                        </Col>
                                    </Row>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Load;
