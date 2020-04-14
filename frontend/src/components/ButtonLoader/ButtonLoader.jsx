import React, { Component } from "react";
import api from "services/api";
import CustomButton from "components/CustomButton/CustomButton";


export default class ButtonLoader extends Component {
    state = {
        loading: false
    };

    fetchData = async () => {
        this.setState({ loading: true });

        //Faking API call here
        await api.get('/execute').then(() => {
            this.setState({ loading: false });
        });

    };

    render() {
        
        const { loading } = this.state;

        return (
            <div style={{ marginTop: "60px" }}>
                <CustomButton onClick={this.fetchData} disabled={loading}>
                    {loading && (
                        <i
                            className="fa fa-refresh fa-spin"
                            style={{ marginRight: "5px" }}
                        />
                    )}
                    {loading && <span>Loading Data from Server</span>}
                    {!loading && <span>Run Tests</span>}
                </CustomButton>
            </div>
        );
    }
}
