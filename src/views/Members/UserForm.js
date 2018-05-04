import React, {Component} from 'react';
import {Form} from 'reactstrap';
import {Field, reduxForm} from 'redux-form'
import {FieldTxt, FieldCheckbox, FieldSelect2} from '../../components/Form/wh-field';
import {ModalBody, ModalFooter, Alert} from 'reactstrap';
import LaddaButton, {EXPAND_LEFT} from 'react-ladda';
import CONFIG from '../../constants/parameters';

class UserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
    }

    render() {
        const {error, handleSubmit, submitting} = this.props;

        return (

            <Form onSubmit={handleSubmit} className="form-horizontal">

                <ModalBody>

                    <Field
                        label="Email :"
                        name="email"
                        component={FieldTxt}
                        type="text"
                    />

                    <Field
                        label="Login :"
                        name="username"
                        component={FieldTxt}
                        type="text"
                    />

                    <Field
                        label="Rôles :"
                        name="roles"
                        component={FieldSelect2}
                        type="select"
                        options={CONFIG.ROLES}
                    />

                    <Field
                        label="Activé"
                        name="enabled"
                        type="checkbox"
                        component={FieldCheckbox}
                    />

                    {error &&
                    <Alert color="danger">
                        <div dangerouslySetInnerHTML={{__html: error}}/>
                    </Alert>
                    }

                </ModalBody>

                <ModalFooter>

                    <LaddaButton
                        className="btn btn-success btn-ladda"
                        loading={submitting}
                        data-style={EXPAND_LEFT}
                        type={'submit'}
                    >
                        <i className="fa fa-save"></i>
                        &nbsp;Enregistrer
                    </LaddaButton>

                </ModalFooter>

            </Form>

        );

    }
}

UserForm = reduxForm({
    form: 'UserForm'
})(UserForm);

export default UserForm
