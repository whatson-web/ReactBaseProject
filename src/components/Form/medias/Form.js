import React from 'react';
import {Field, reduxForm, FieldArray} from 'redux-form';
import {connect} from 'react-redux';
import {FieldTxt} from '../../../components/Form/wh-field';
import {Card, CardHeader, CardBody, CardFooter, Form, Alert, Button, Row, Col, ButtonGroup} from 'reactstrap';
import LaddaButton, {EXPAND_LEFT} from 'react-ladda';
import ApiConfig from '../../../constants/ApiConfig';
import Loading from '../../Loading';

class FormFile extends React.Component {

    constructor(props) {

        super(props);


    }

    render() {

        const {error, handleSubmit, pristine, reset, submitting, initialValues} = this.props;

        return (

            <Form onSubmit={handleSubmit} className="form-vertical">

                <Field
                    label={false}
                    name={`file`}
                    type="file"
                    component={FieldTxt}
                />

                <LaddaButton
                    className="btn btn-success btn-ladda"
                    loading={submitting}
                    data-style={EXPAND_LEFT}
                    type={'submit'}
                >
                    <i className="fa fa-save"></i> Enregistrer </LaddaButton>

    

            </Form>

        );

    }

};


FormFile = reduxForm({
    form: 'FormFile'
})(FormFile);

export default FormFile

