import React, {Component} from 'react';
import CreateEditPopup from './CreateEditPopup';
import WHTable from '../../components/WHTable';
import {toast} from 'react-toastify';
import {Card, CardHeader, CardBody, Badge, Button} from 'reactstrap';
import * as memberService from '../../services/member';

class Members extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            col: [],
            pages: null,
            loaded: true
        };

        this.load = this.load.bind(this);
        this.columns = this.columns.bind(this);
        this.remove = this.remove.bind(this);
        this.newData = this.newData.bind(this);
    }

    columns() {
        return [
            {
                Header: '',
                accessor: 'id',
                filterable: false,
                Cell: row => (
                    <div>
                        <Button color={'info'} onClick={() => this.refs.createEditPopup.handleOpen(row.value)}>
                            <i className={'fa fa-edit'}/>
                        </Button>
                        <Button color={'success'} onClick={() => this.sendNewPassword(row.value)}>
                            <i className={'fa fa-send'}/>
                        </Button>
                        <Button color={'danger'} onClick={() => this.remove(row.value)}>
                            <i className={'fa fa-trash'}/>
                        </Button>
                    </div>
                ),
                maxWidth: 120
            },
            {
                Header: 'Login',
                accessor: 'username'
            },
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Status',
                accessor: 'enabled',
                filterable: false,
                Cell: (row) => (
                    <div>
                        {row.value &&
                        <Badge color="success">Active</Badge>
                        }
                        {!row.value &&
                        <Badge color="danger">Désactivé</Badge>
                        }
                    </div>
                )
            }
        ];
    }

    load(state) {
        this.setState({
            loaded: false
        });

        return memberService.search(state).then((data) => {
            this.setState({
                    data: []
                },
                () => {
                    this.setState({
                        data: data['hydra:member'],
                        pages: Math.ceil(data['hydra:totalItems'] / state.pageSize),
                        loaded: true
                    })
                });
        });
    }

    sendNewPassword(id) {
        if (confirm('Êtes-vous sûr de vouloir envoyer un nouveau mot de passe ?')) {
            this.setState({
                loaded: false
            });

            memberService.sendNewPassword(id)
                .then(() => {
                    this.setState({
                        loaded: true
                    });

                    toast.success('Un noueau mot de passe a été envoyé');
                })
                .catch(() => {
                    this.setState({
                        loaded: true
                    });

                    toast.error('Une erreur est survenue');
                });
        }
    }

    remove(toDelete) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce membre ?')) {
            this.setState({
                loaded: false
            });

            memberService.remove(toDelete).then(() => {
                let lst = this.state.data;

                let index = lst.findIndex((el) => el.id === toDelete);

                if (index > -1) {
                    lst.splice(index, 1);

                    this.setState({
                        data: lst,
                        loaded: true
                    });
                }
            }).catch(() => {
                alert('Il existe des dépendances sur membre, il ne peut donc être supprimé');
            });
        }
    }

    newData(data) {
        let lst = this.state.data;

        let index = lst.findIndex((el) => el.id === data.id);

        if (index > -1) {
            lst[index] = data;
        } else {
            lst.push(data);
        }

        this.setState({
            data: lst
        });
    }

    render() {
        const {data, pages} = this.state;

        return (
            <div className="animated fadeIn">

                <CreateEditPopup ref={'createEditPopup'} newData={this.newData}/>

                <Card>

                    <CardHeader>

                        <i className="fa fa-align-justify"></i>
                        &nbsp;Gestion des membres

                        <div className="card-actions">
                            <button
                                onClick={() => this.refs.createEditPopup.handleOpen()}
                                className={'btn btn-success'}
                            >
                                <i className={'fa fa-plus'}></i>
                                &nbsp;Nouveau
                            </button>
                        </div>

                    </CardHeader>

                    <CardBody>

                        <WHTable
                            data={data}
                            pages={pages}
                            columns={this.columns()}
                            filterable={true}
                            onFetchData={this.load}
                            loading={!this.state.loaded}
                        />

                    </CardBody>

                </Card>

            </div>
        )
    }
}

export default Members;