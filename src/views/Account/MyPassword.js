import React, {Component} from 'react';
import {toast} from 'react-toastify';
import {SubmissionError} from 'redux-form';
import * as memberService from '../../services/member';
import * as sessionService from '../../node_modules/session/api';
import FormPassword from './FormPassword';
import {Row, Col} from 'reactstrap';

class MyPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            user: {},
        };

        this.submit = this.submit.bind(this);
    };

    componentDidMount() {
        sessionService.me().then((response) => {
            this.setState({
                loaded: true,
                user: response,
            });
        });
    }

    submit(values) {
        return memberService
            .myPassword(this.state.user.id, values)
            .then(() => {
                toast.success('Enregistrement réussi');
            })
            .catch((error) => {
                throw new SubmissionError(error);
            });
    }

    render() {

        return (
            <div className="animated fadeIn">

                <Row>

                    <Col xs="12" sm="6">

                        <FormPassword onSubmit={this.submit}/>

                    </Col>

                </Row>

            </div>
        )
    }
}

export default MyPassword;