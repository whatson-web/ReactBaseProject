import React, {Component} from 'react';
import {toast} from 'react-toastify';
import * as sessionService from '../../node_modules/session/api';
import * as memberService from '../../services/member';
import FormMyInformations from './FormMyInformations';
import {Row, Col} from 'reactstrap';
import {SubmissionError} from 'redux-form';

class MyInformations extends Component {
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
            .myInformations(this.state.user.id, values)
            .then(() => {
                toast.success('Enregistrement réussi');
            })
            .catch((error) => {
                throw new SubmissionError(error);
            });
    };

    render() {
        return (
            <div className="animated fadeIn">

                <Row>

                    <Col xs="12" sm="6">

                        {this.state.loaded &&
                        <FormMyInformations onSubmit={this.submit} initialValues={this.state.user}/>
                        }

                    </Col>

                </Row>

            </div>
        )
    }
}

export default MyInformations;