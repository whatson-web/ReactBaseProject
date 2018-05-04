import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {FieldTxt} from '../../components/Form/wh-field';
import {Card, CardHeader, CardBody, CardFooter, Form, Alert, Button} from 'reactstrap';
import LaddaButton, {EXPAND_LEFT} from 'react-ladda';

class FormPassword extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {error, handleSubmit, submitting} = this.props;

        return (

            <Card>

                <Form onSubmit={handleSubmit} className="form-horizontal">

                    <CardHeader>Mon mot de passe</CardHeader>

                    <CardBody>

                        <Field
                            label="Saisir votre nouveau mot de passe :"
                            name="plainPassword"
                            component={FieldTxt}
                            type="password"
                        />

                        {error &&
                        <Alert color="danger">{error}</Alert>
                        }

                        <button type="submit" style={{position: 'absolute', 'left': '-100000px'}}/>

                    </CardBody>

                    <CardFooter>

                        <LaddaButton
                            className="btn btn-success btn-ladda"
                            loading={submitting}
                            data-style={EXPAND_LEFT}
                            type={'submit'}
                        >
                            <i className="fa fa-save"></i>
                            &nbsp;Enregistrer
                        </LaddaButton>

                    </CardFooter>

                </Form>

            </Card>

        );

    }

};


FormPassword = reduxForm({
    form: 'FormPassword'
})(FormPassword);

export default FormPassword