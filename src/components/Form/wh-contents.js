import React from 'react';
import {connect} from 'react-redux';
import { Field } from 'redux-form'
import {Card, CardHeader, CardBody, CardFooter, Form, Alert, Button, Row, Col, ButtonGroup} from 'reactstrap';
import ApiConfig from '../../constants/ApiConfig';
import {FieldTxt, FieldSelect} from '../Form/wh-field';
import FieldCkEditor from '../Form/wh-ckeditor';
import * as mediaService from '../../services/media'; 

const titleTemplateOptions = [
    {value : 'test', name : 'test'}
]; 

const textTemplateOptions = [
    {value : 'test', name : 'test'}
]; 

const textImgTemplateOptions = [
    {value : 'test', name : 'test'}
]; 

class FieldContents extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
           closed : []
        };

        this.toggleBox = this.toggleBox.bind(this);
        this.orderUp = this.orderUp.bind(this);
        this.orderDown = this.orderDown.bind(this);

    }

    toggleBox(index) {

        let closed = this.state.closed;

        let close = closed.indexOf(index);

        if(close > -1) closed.splice(close, 1);
        else closed.push(index);

        this.setState({closed});

    }

    checkToogleBox(index) {

        return (this.state.closed.indexOf(index) > -1) ? true : false;

    }

    orderUp(fields, index) {

        let newIndex = index - 1;
        if(newIndex < 0) newIndex = 0;

        fields.move(index, newIndex);

    }

    orderDown(fields, index) {

        let newIndex = index + 1;
        if(newIndex == fields.length) newIndex = index;

        fields.move(index, newIndex);

    }

    openMediaBox(id) {

        const url = `/wh-finder/index.html#/?id=${id}`; 
     
        window.open(url,"wh media center","location=no, menubar=no, status=no, scrollbars=no, menubar=no, width=800, height=600");

    }

    onImgChange(data, fields, index) {

        let val = data.target.value; 

        mediaService.viewFromUrl(val).then((data) => {

            let content = fields.get(index); 
            content.media = data; 
            fields.remove(index);
            fields.insert(index, content); 

        }); 


    }


    render() {

        const { fields, buttons, colSize, meta: { touched, error } } = this.props;

        return (

            <div>
            <Row>
                {fields.map((el, index) => (

                    <Col key={index} md={(colSize) ? colSize : 12}>
                        {buttons && buttons.title && fields.get(index).type == 'title' &&
                        <Card>
                            <CardHeader>
                                <i className="fa fa-i-cursor"/> Bloc titre {index}

                                <div className="card-actions">
                                    <a href={`javascript:void(0)`} onClick={() => this.orderUp(fields, index)}><i className={'fa fa-arrow-up'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => this.orderDown(fields, index)}><i className={'fa fa-arrow-down'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => fields.remove(index)}><i className={'fa fa-trash'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => this.toggleBox(index)}><i className={this.checkToogleBox(index) ? 'fa fa-angle-up' : 'fa fa-angle-down'} /></a>
                                    <a href={`${ApiConfig.helpAdmin}/cms/pages.html`} target={'_blank'}><i className={'fa fa-question'} /></a>
                                </div>

                            </CardHeader>

                            <CardBody style={{display : (this.checkToogleBox(index)) ? 'none' : 'block'}}>

                                <Row>
                                    <Col sm={8} xs={12}>
                                        <Field
                                        label={false}
                                        name={`${el}.title`}
                                        type="text"
                                        component={FieldTxt}
                                        placeholder={'Saisir un titre'}
                                        />
                                    </Col>
                                    <Col sm={4} xs={12}>
                                        <Field
                                        label={false}
                                        name={`${el}.template`}
                                        type="select"
                                        options={titleTemplateOptions}
                                        component={FieldSelect}
                                        />
                                    </Col>
                                </Row>
                              
                            </CardBody>


                        </Card>
                        }

                        {buttons && buttons.text && fields.get(index).type == 'text' &&
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"/> Bloc text {index}

                                <div className="card-actions">
                                    <a href={`javascript:void(0)`} onClick={() => this.orderUp(fields, index)}><i className={'fa fa-arrow-up'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => this.orderDown(fields, index)}><i className={'fa fa-arrow-down'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => fields.remove(index)}><i className={'fa fa-trash'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => this.toggleBox(index)}><i className={this.checkToogleBox(index) ? 'fa fa-angle-up' : 'fa fa-angle-down'} /></a>
                                    <a href={`${ApiConfig.helpAdmin}/cms/pages.html`} target={'_blank'}><i className={'fa fa-question'} /></a>
                                </div>

                            </CardHeader>

                        <CardBody style={{display : (this.checkToogleBox(index)) ? 'none' : 'block'}}>
                          
                                    <Field
                                        label={false}
                                        name={`${el}.template`}
                                        type="select"
                                        options={textTemplateOptions}
                                        component={FieldSelect}
                                        />
                                <Field
                                    label={false}
                                    name={`${el}.text`}
                                    type="text"
                                    component={FieldCkEditor}
                                />
                            
                
                            </CardBody>
                        </Card>
                        }

                        {buttons && buttons.textImg && fields.get(index).type == 'textImg' &&
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"/><i className="fa fa-image"/> Text et image {index}

                                <div className="card-actions">
                                    <a href={`javascript:void(0)`} onClick={() => this.orderUp(fields, index)}><i className={'fa fa-arrow-up'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => this.orderDown(fields, index)}><i className={'fa fa-arrow-down'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => fields.remove(index)}><i className={'fa fa-trash'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => this.toggleBox(index)}><i className={this.checkToogleBox(index) ? 'fa fa-angle-up' : 'fa fa-angle-down'} /></a>
                                    <a href={`${ApiConfig.helpAdmin}/cms/pages.html`} target={'_blank'}><i className={'fa fa-question'} /></a>
                                </div>

                            </CardHeader>

                            <CardBody>

                                <Row>
                                    <Col sm={7} xs={12}>
                                    <Field
                                        label={false}
                                        name={`${el}.template`}
                                        type="select"
                                        options={textImgTemplateOptions}
                                        component={FieldSelect}
                                        />
                                        <Field
                                            label={false}
                                            name={`${el}.title`}
                                            type="text"
                                            component={FieldTxt}
                                            placeholder={'Saisir un titre'}
                                        />
                                        <Field
                                            label={false}
                                            name={`${el}.text`}
                                            type="textarea"
                                            component={FieldTxt}
                                            placeholder={'Description'}
                                        />
                                        <Field
                                            label={false}
                                            name={`${el}.url`}
                                            type="text"
                                            component={FieldTxt}
                                            placeholder={'Saisir une url'}
                                        />
                                    
                                    </Col>

                                    <Col sm={5} xs={12}>

                                        <Field
                                                label={false}
                                                name={`${el}.media.@id`}
                                                id={`mediaField${index}`}
                                                type="text"
                                                component={FieldTxt}
                                                placeholder={'Media'}
                                                style={{postion : 'absolute', left : '-10000px'}}
                                                onChange={(event) => this.onImgChange(event, fields, index)}
                                            />

                                        {
                                            fields.get(index).media && 
                                            fields.get(index).media.url && 
                                            fields.get(index).media.type == 'image' && 
                                            <img src={`${ApiConfig.assetUrl}${fields.get(index).media.url}`} style={{maxWidth:'100%'}} />
                                        }
                                           
                                         
                            
                                        <Button color={'success'} block onClick={() => this.openMediaBox(`mediaField${index}`)}>Media</Button>
                                    </Col>
                                
                                </Row>

                                </CardBody>    
                    
                        </Card>
                        }
                        
                        {buttons && buttons.img && fields.get(index).type == 'img' && 
                        
                        <Card>
                            <CardHeader>
                                <i className="fa fa-image"/> Image {index}

                                <div className="card-actions">
                                    <a href={`javascript:void(0)`} onClick={() => this.orderUp(fields, index)}><i className={'fa fa-arrow-up'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => this.orderDown(fields, index)}><i className={'fa fa-arrow-down'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => fields.remove(index)}><i className={'fa fa-trash'} /></a>
                                    <a href={`javascript:void(0)`} onClick={() => this.toggleBox(index)}><i className={this.checkToogleBox(index) ? 'fa fa-angle-up' : 'fa fa-angle-down'} /></a>
                                    <a href={`${ApiConfig.helpAdmin}/cms/pages.html`} target={'_blank'}><i className={'fa fa-question'} /></a>
                                </div>

                            </CardHeader>

                            <CardBody>

                                <Field
                                        label={false}
                                        name={`${el}.media.@id`}
                                        id={`mediaField${index}`}
                                        type="text"
                                        component={FieldTxt}
                                        placeholder={'Media'}
                                        style={{postion : 'absolute', left : '-10000px'}}
                                        onChange={(event) => this.onImgChange(event, fields, index)}
                                    />

                                {
                                    fields.get(index).media && 
                                    fields.get(index).media.url && 
                                    fields.get(index).media.type == 'image' && 
                                    <img src={`${ApiConfig.assetUrl}${fields.get(index).media.url}`} style={{maxWidth:'100%'}} />
                                }
                                    
                                <Button color={'success'} block onClick={() => this.openMediaBox(`mediaField${index}`)}>Media</Button>
                
                            </CardBody>    
                
                        </Card>
                     
                        }

                    </Col>
                          
                ))}
            
            </Row>

                <Card>
                    <ButtonGroup>
                        {buttons && buttons.title && <Button size="lg" onClick={() => fields.push({type : 'title'})} style={{flex: 1}}><i className={'fa fa-i-cursor'} /></Button>}
                        {buttons && buttons.text && <Button size="lg" onClick={() => fields.push({type : 'text'})} style={{flex: 1}}><i className={'fa fa-align-justify'} /></Button>}
                        {buttons && buttons.img && <Button size="lg" onClick={() => fields.push({type : 'img'})} style={{flex: 1}}><i className={'fa fa-image'} /></Button>}
                        {buttons && buttons.textImg && <Button size="lg" onClick={() => fields.push({type : 'textImg'})} style={{flex: 1}}><i className={'fa fa-align-justify'} /> + <i className={'fa fa-image'} /></Button>}
                        {/*<Button size="lg" onClick={() => fields.push({type : 'collection'})}><i className={'fa fa-th'} /></Button>*/}
                    </ButtonGroup>
                </Card>
            
            </div>


        );

    }

};


export default FieldContents


