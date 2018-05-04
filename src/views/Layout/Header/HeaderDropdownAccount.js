import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {DropdownItem, DropdownMenu, DropdownToggle, Dropdown} from 'reactstrap';
import * as sessionService from '../../../node_modules/session/index';

class HeaderDropdownAccount extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.logout = this.logout.bind(this);

        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    logout() {
        sessionService.logout().then((res) => {
            this.props.history.push('/login');
        });
    }

    render() {
        return (
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>

                <DropdownToggle nav>
                    <i className="icon-user"></i>
                </DropdownToggle>

                <DropdownMenu right>

                    <DropdownItem header tag="div" className="text-center">
                        <strong>Mon compte</strong>
                    </DropdownItem>

                    <DropdownItem onClick={() => this.props.history.push('/account/informations')}>
                        <i className="fa fa-user"></i>
                        <span>Mes infos</span>
                    </DropdownItem>

                    <DropdownItem onClick={() => this.props.history.push('/account/password')}>
                        <i className="fa fa-lock"></i>
                        <span>Changer de mot de passe</span>
                    </DropdownItem>

                    <DropdownItem onClick={() => this.logout()}>
                        <i className="fa fa-sign-out-alt"></i>
                        <span>Se deconnecter</span>
                    </DropdownItem>

                </DropdownMenu>

            </Dropdown>
        );
    }
}

export default withRouter(HeaderDropdownAccount);
