import React, {Component} from 'react';
import {Row, Col, Input, InputGroup, Alert} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import LaddaButton, {EXPAND_LEFT} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';

const renderFieldLogin = ({name, input}) => {
    return (

        <InputGroup className="mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="icon-user"></i>
              </span>
            </div>
            <Input type="text" placeholder="Email"  {...input} />
        </InputGroup>

    )
};

const renderFieldPassword = ({name, input}) => {
    return (

        <InputGroup className="mb-4">
            <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="icon-lock"></i>
                  </span>
            </div>
            <Input type="password" placeholder="Mot de passe" {...input} />
        </InputGroup>

    )
};

class FormLogin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {error, handleSubmit, submitting} = this.props;

        return (

            <form onSubmit={handleSubmit}>

                {error && <Alert color="danger">{error._error}</Alert>}

                <Field
                    name="username"
                    component={renderFieldLogin}
                    type="text"
                />

                <Field
                    name="password"
                    component={renderFieldPassword}
                    type="text"
                />

                <Row>

                    <Col xs="6">

                        <LaddaButton
                            className="btn btn-success btn-ladda"
                            loading={submitting}
                            data-style={EXPAND_LEFT}
                            type={'submit'}
                        >
                            Login
                        </LaddaButton>

                    </Col>

                </Row>

            </form>

        );
    }
}

FormLogin = reduxForm({
    form: 'FormLogin'
})(FormLogin);

export default FormLogin