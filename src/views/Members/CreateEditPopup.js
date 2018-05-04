import React, {Component} from 'react';
import {Modal, ModalHeader} from 'reactstrap';
import UserForm from './UserForm';
import * as memberService from '../../services/member';
import {SubmissionError} from 'redux-form';
import {toast} from 'react-toastify';
import Loading from '../../components/Loading';

class CreateEditPopup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            data: {},
            loaded: true
        };

        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleOpen(id = null) {
        this.setState({
            open: true
        });

        if (id) {
            this.setState({
                loaded: false
            });

            memberService.view(id).then((data) => {
                this.setState({
                    data,
                    loaded: true
                });
            });
        }
    }

    handleClose() {
        this.setState({
            open: false,
            data: {}
        });
    }

    onSubmit(data) {
        const edit = (!data.id) ? memberService.create : memberService.update;

        return edit(data).then((data) => {
            this.props.newData(data);

            toast.success('Enregistrement réussi');

            this.handleClose();
        }).catch((error) => {
            throw new SubmissionError(error);
        });
    }

    render() {
        const {className} = this.props;
        const {loaded} = this.state;

        return (

            <Modal isOpen={this.state.open} className={className} fade={false}>

                <ModalHeader toggle={() => this.handleClose()}>Editer</ModalHeader>

                {!loaded &&
                <Loading/>
                }

                {loaded &&
                <UserForm onSubmit={this.onSubmit} initialValues={this.state.data}/>
                }

            </Modal>

        );

    }
}

export default CreateEditPopup