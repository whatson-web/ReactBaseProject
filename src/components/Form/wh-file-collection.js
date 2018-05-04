import React from 'react';
import {Field} from 'redux-form';
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Row,
    Col,
    ButtonGroup,
} from 'reactstrap';
import ApiConfig from '../../constants/ApiConfig';
import {FieldTxt} from '../Form/wh-field';
import * as mediaService from '../../services/media';

class FileCollection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fields: this.props.fields,
            closed: [],
        };
    }

    create(fields) {
        fields.push({});
    };

    remove(fields, index) {
        fields.remove(index);
    };

    up(fields, index) {
        let newIndex = index - 1;

        if (newIndex < 0) {
            newIndex = 0;
        }

        fields.move(index, newIndex);
    }

    down(fields, index) {
        let newIndex = index + 1;

        if (newIndex === fields.length) {
            newIndex = index;
        }

        fields.move(index, newIndex);
    }

    openFinder(id) {
        const url = `/wh-finder/index.html#/?id=${id}&type=id`;

        window.open(url, 'wh media center', 'location=no, menubar=no, status=no, scrollbars=no, menubar=no, width=800, height=600');
    }

    onUrlChange(fields, data, index) {
        let val = data.target.value;

        mediaService.view(val).then((data) => {
            fields.remove(index);
            fields.insert(index, data);
        });
    }

    render() {
        const {fields} = this.props;

        return (

            <div>

                <Row>
                    {fields.map((el, index) => (

                        <Col
                            key={index}
                            xs={12}
                        >

                            <Card>

                                <CardHeader>

                                    <i className="fa fa-image"/> Image {index}

                                    <div className="card-actions">
                                        <a
                                            onClick={() => this.up(fields, index)}
                                        >
                                            <i className={'fa fa-arrow-up'}/>
                                        </a>
                                        <a
                                            onClick={() => this.down(fields, index)}>
                                            <i className={'fa fa-arrow-down'}/>
                                        </a>
                                        <a
                                            onClick={() => this.remove(fields, index)}
                                        >
                                            <i className={'fa fa-trash'}/>
                                        </a>
                                    </div>

                                </CardHeader>

                                <CardBody>

                                    <Field
                                        label={false}
                                        name={`${el}.id`}
                                        id={`mediaField${index}`}
                                        type="text"
                                        component={FieldTxt}
                                        placeholder={'Media'}
                                        onChange={(event) => this.onUrlChange(fields, event, index)}
                                    />

                                    {
                                        fields.get(index).url &&
                                        <img
                                            src={`${ApiConfig.assetUrl}${fields.get(index).url}`}
                                            style={{maxWidth: '100%'}}
                                        />
                                    }

                                    <Button
                                        color={'success'}
                                        block
                                        onClick={() => this.openFinder(`mediaField${index}`)}
                                    >
                                        Media
                                    </Button>

                                </CardBody>

                            </Card>

                        </Col>

                    ))}

                </Row>

                <Card>
                    <ButtonGroup>
                        <Button
                            size="lg"
                            onClick={() => this.create(fields)}
                            style={{flex: 1}}
                        >
                            <i className={'fa fa-image'}/>
                        </Button>
                    </ButtonGroup>
                </Card>

            </div>

        );

    }
}

export default FileCollection;