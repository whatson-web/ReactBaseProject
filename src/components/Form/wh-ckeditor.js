import React from 'react';
import CKEditor from "react-ckeditor-component";
import { change } from 'redux-form';


import {
    Input,
} from 'reactstrap';

class FieldCkEditor extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            content : this.props.input.value
        };

        this.onChange = this.onChange.bind(this);

    }


    onChange(evt){

        let newContent = evt.editor.getData();

        this.setState({
            content: newContent
        });

        this.props.meta.dispatch(change(this.props.meta.form, this.props.input.name, newContent));

    }

    onBlur(evt){
        console.log("onBlur event called with event info: ", evt);
    }

    afterPaste(evt){
        console.log("afterPaste event called with event info: ", evt);
    }

    render() {


        const { name, input, label, type, help, bsSize, placeholder, meta: { touched, error } } = this.props;
        const config = {
            toolbar : [[ 'Bold', 'Italic', 'Underline', '-', 'JustifyLeft','JustifyCenter','JustifyRight', '-', 'BulletedList', 'NumberedList','-', 'Styles', 'Format', 'Unlink', 'Link' ]],
        };

        return (
            <CKEditor
                config={config}
                content={input.value}
                events={{
                    "blur": this.onBlur,
                    "afterPaste": this.afterPaste,
                    "change": this.onChange
                }}
            />
        )
    }
};

export default FieldCkEditor;