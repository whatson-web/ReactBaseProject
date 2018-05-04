import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {SimpleInput} from '../../components/Form/wh-field';

import {
    Form,
    Alert,
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input
} from 'reactstrap';


import LaddaButton, { EXPAND_LEFT } from 'react-ladda';

class FormMemberSearch extends React.Component {

    constructor(props) {

        super(props);

    }


    render() {


        const {error, handleSubmit, pristine, reset, submitting} = this.props;

        return (

                <Form onSubmit={handleSubmit} className="form-horizontal">

                    <InputGroup size="lg">
                        <Field
                            label={false}
                            name="search"
                            component={SimpleInput}
                            onChange={event => {
                                //this.props.handleSubmit()
                            }}
                            placeholder={'Chercher'}
                            type="text"
                        />
                        <InputGroupAddon addontype="append">

                            <LaddaButton
                                className="btn btn-lg btn-success btn-ladda"
                                loading={submitting}
                                data-style={EXPAND_LEFT}
                                type={'submit'}
                            >
                                <i className="fa fa-search"></i> Chercher </LaddaButton>

                        </InputGroupAddon>
                    </InputGroup>

                    {error && <Alert color="danger">{error}</Alert>}


                </Form>


        );

    }

};


FormMemberSearch = reduxForm({
    form: 'FormMemberSearch'
})(FormMemberSearch);

export default FormMemberSearch

