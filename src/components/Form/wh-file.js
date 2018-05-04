import React from 'react';
import {Field} from 'redux-form';
import {
    Card,
    CardBody,
    Button,
} from 'reactstrap';
import {FieldTxt} from '../Form/wh-field';
import * as mediaService from "../../services/media";

class File extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            closed: [],
            input: this.props.input
        };
    }

    openFinder(id) {
        const url = `/wh-finder/index.html#/?id=${id}&type=id`;

        window.open(url, 'wh media center', 'location=no, menubar=no, status=no, scrollbars=no, menubar=no, width=800, height=600');
    }

    onUrlChange(data) {
        let input = this.state.input;

        mediaService.view(data.target.value).then((data) => {
            input.value = data;

            this.setState({input: input})
        });
    }

    render() {
        const {label} = this.props;

        return (

            <Card>

                <CardBody>

                    <Field
                        label={label}
                        name={`${this.state.input.name}.id`}
                        id={`mediaField${this.state.input.name}`}
                        type="text"
                        component={FieldTxt}
                        placeholder={'Media'}
                        onChange={(event) => this.onUrlChange(event)}
                    />

                    {
                        this.state.input.value.url &&
                        <span>{this.state.input.value.url}</span>
                    }

                    <Button
                        color={'success'}
                        block
                        onClick={() => this.openFinder(`mediaField${this.state.input.name}`)}
                    >
                        Media
                    </Button>

                </CardBody>

            </Card>

        );

    }
}

export default File;