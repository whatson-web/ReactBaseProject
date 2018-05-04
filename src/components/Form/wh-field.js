import React from 'react';
import {
    Col,
    FormGroup,
    FormText,
    Label,
    InputGroup,
    FormFeedback,
    Input,
} from 'reactstrap';

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import MaskedFormControl from 'react-bootstrap-maskedinput';

export const SimpleInput = ({placeholder, name, input, label, type, help, meta: {touched, error}}) => (

    <Input placeholder={placeholder} {...input} type={type} {...touched && error ? {valid: false} : {}} />

);

export const FieldTxtIcon = ({disabled, placeholder, bsSize, id, mask, prepend, append, name, input, label, type, help, meta: {touched, error}}) => {

    return (

        <FormGroup row>
            <Col md="3">
                {label && <Label>{label}</Label>}
            </Col>
            <Col xs="12" md="9">
                <InputGroup>
                    {prepend &&
                    <div className="input-group-prepend">
                          <span className="input-group-text">
                              {prepend.icon && <i className={prepend.icon}/>}
                              {!prepend.icon && prepend}
                          </span>
                    </div>
                    }

                    {mask &&
                    <MaskedFormControl {...input} id={id} bsSize={bsSize} placeholder={placeholder} disabled={disabled}
                                       type={type} mask={mask}/>}
                    {!mask && <Input {...input} id={id} bsSize={bsSize} placeholder={placeholder} disabled={disabled}
                                     type={type} {...touched && error ? {valid: false} : {}} />}

                    {append &&
                    <div className="input-group-append">
                        <span className="input-group-text">
                            {append.icon && <i className={append.icon}/>}
                            {!append.icon && append}
                        </span>
                    </div>
                    }
                    {touched && error &&
                    <FormFeedback className="help-block" style={{display: 'block'}}>{error}</FormFeedback>}
                    {help && <FormText className="help-block">{help}</FormText>}
                </InputGroup>

            </Col>
        </FormGroup>
    )
};

export const FieldTxt = ({mask, name, input, label, type, help, bsSize, placeholder, id, disabled, meta: {touched, error}}) => {

    return (

        <FormGroup row>
            <Col md="3">
                {label && <Label>{label}</Label>}
            </Col>
            <Col xs="12" md="9">
                {mask &&
                <MaskedFormControl {...input} id={id} bsSize={bsSize} placeholder={placeholder} disabled={disabled}
                                   type={type} {...touched && error ? {valid: false} : {}} mask={mask}/>}
                {!mask && <Input {...input} id={id} bsSize={bsSize} placeholder={placeholder} disabled={disabled}
                                 type={type} {...touched && error ? {valid: false} : {}} />}

                {touched && error && <FormFeedback className="help-block">{error}</FormFeedback>}
                {help && <FormText className="help-block">{help}</FormText>}

            </Col>
        </FormGroup>

    )
};

export const FieldCheckbox = ({name, input, label, type, meta: {touched, error}}) => {

    return (

        <FormGroup row>

            <Col md="3"></Col>

            <Col xs="12" md="9">

                <input {...input} type="checkbox"/>

                <label htmlFor={name}>{label}</label>

                {touched && error &&
                <span className={'error-txt'}>{error}</span>
                }

            </Col>

        </FormGroup>

    )
};


export const FieldSelect = ({nullValue, required = true, help, options, name, input, label, type, meta: {touched, error}}) => (

    <FormGroup row>

        <Col md="3">
            {label &&
            <Label>{label}</Label>
            }
        </Col>

        <Col xs="12" md="9">

            <Input type="select" {...input}>
                {!required && <option value={null}>{nullValue}</option>}
                {options.map((option, index) => (
                    <option value={option.value} key={index}>{option.name}</option>
                ))}
            </Input>

            {touched && error &&
            <FormFeedback className="help-block">{error}</FormFeedback>
            }

            {help &&
            <FormText className="help-block">{help}</FormText>
            }

        </Col>

    </FormGroup>

);

export const FieldSelect2 = ({help, options, name, input, label, type, meta: {touched, error}}) => (

    <FormGroup row>

        <Col md="3">
            {label &&
            <Label>{label}</Label>
            }
        </Col>

        <Col xs="12" md="9">

            <Select
                options={options}
                multi={true}
                {...input}
                onChange={(value) => {
                    return input.onChange(value.map(p => p.value))
                }}
                onBlur={() => {
                    input.onBlur([...input.value])
                }}
            />

            {touched && error &&
            <FormFeedback className="help-block">{error}</FormFeedback>
            }

            {help &&
            <FormText className="help-block">{help}</FormText>
            }

        </Col>

    </FormGroup>
);


export const FieldSelectAsync = ({help, options, multi, loadOptions, change, name, input, label, type, meta: {touched, error}}) => {

    return (

        <FormGroup row>

            <Col md="3">
                {label &&
                <Label>{label}</Label>
                }
            </Col>

            <Col xs="12" md="9">

                <Select.Async
                    name={name}
                    placeholder='Chercher'
                    noResultsText='Pas de résultat'
                    searchPromptText='Commencez votre saisie'
                    options={options}
                    multi={multi}
                    {...input}
                    loadOptions={loadOptions}
                    onChange={(value) => {
                        return input.onChange(value);
                    }}
                    onBlur={() => input.onBlur(input.value)}
                    {...touched && error ? {valid: false} : {}}
                />

                {touched && error &&
                <FormFeedback className="help-block" style={{display: 'block'}}>{error}</FormFeedback>
                }

                {help &&
                <FormText className="help-block">{help}</FormText>
                }

            </Col>
        </FormGroup>

    )
};