import React, {Component} from 'react';
import {Nav, NavItem, NavbarToggler, NavbarBrand, NavLink} from 'reactstrap';
import HeaderDropdownAccount from './HeaderDropdownAccount';

class Header extends Component {
    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    mobileSidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-mobile-show');
    }

    render() {

        return (
            <header className="app-header navbar">

                <NavbarToggler
                    className="d-lg-none"
                    onClick={this.mobileSidebarToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggler>

                <NavbarBrand href="#"></NavbarBrand>

                <NavbarToggler
                    className="d-md-down-none sidebar-minimizer h-100 b-r-1"
                    onClick={this.sidebarToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </NavbarToggler>

                <Nav navbar>
                    <NavItem className="d-md-down-none">
                        <NavLink href="#/" style={{padding: '0 20px'}}>
                            <i className="icon-speedometer"></i>
                            &nbsp;Mon Dashboard
                        </NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <HeaderDropdownAccount/>
                </Nav>

            </header>
        );
    }
}

export default Header;