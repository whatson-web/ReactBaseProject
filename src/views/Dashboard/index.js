import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="animated fadeIn">

                <Row>
                    <Col xl={8}><h1>Dashboard</h1></Col>
                </Row>

            </div>
        )
    }
}

export default Dashboard;