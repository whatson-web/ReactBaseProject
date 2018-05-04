import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody} from 'reactstrap';
import {SubmissionError} from 'redux-form';
import FormLogin from './formLogin';
import * as session from '../../../node_modules/session';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };

        this.submit = this.submit.bind(this);
    }

    submit(values) {
        return session.login(values.username, values.password)
            .then(() => {
                this.props.history.push('/dashboard');
            }).catch((error) => {

                console.log(error);
                throw new SubmissionError({_error: error});
            });
    }

    render() {
        return (
            <div className="app flex-row align-items-center">

                <Container>

                    <Row className="justify-content-center">

                        <Col md="8">

                            <CardGroup className="mb-4">

                                <Card className="p-4">

                                    <CardBody>

                                        <h1>Login</h1>

                                        <p className="text-muted">Merci de vous identifier</p>

                                        <FormLogin onSubmit={this.submit}/>

                                    </CardBody>

                                </Card>

                                <Card className="py-5 d-md-down-none" style={{width: 44 + '%'}}>

                                    <CardBody className="text-center">

                                    </CardBody>

                                </Card>

                            </CardGroup>

                        </Col>

                    </Row>

                </Container>

            </div>
        );
    }
}

export default Login;