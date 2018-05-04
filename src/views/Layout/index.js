import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from './Header/';
import Sidebar from './Sidebar/';
import Breadcrumb from './Breadcrumb/';
import Footer from './Footer/';
import {connect} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import * as session from '../../node_modules/session';
import Dashboard from '../../views/Dashboard/';
import Members from '../../views/Members/';
import MyInformations from '../../views/Account/MyInformations';
import MyPassword from '../../views/Account/MyPassword';

class Layout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };

        this.checkAuthentication = this.checkAuthentication.bind(this);
    }

    componentWillMount() {
        this.checkAuthentication();
    }

    checkAuthentication() {
        session.isAuthenticated().then((data) => {
            this.props.setUser(data);
        }).catch(() => {
            this.props.history.push('/login');
        });
    }

    render() {
        return (
            <div className="app">

                <Header/>

                <ToastContainer position="top-center" hideProgressBar={true} autoClose={3000}/>

                <div className="app-body">

                    <Sidebar {...this.props}/>

                    <main className="main">

                        <Breadcrumb/>

                        <Container fluid>

                            <Switch>

                                <Route
                                    path="/dashboard"
                                    name="Dashboard"
                                    component={Dashboard}
                                />

                                <Route
                                    path="/members"
                                    name="Gestion des membres"
                                    component={Members}
                                />

                                <Route
                                    path="/account/informations"
                                    name="Mon compte"
                                    component={MyInformations}
                                />

                                <Route
                                    path="/account/password"
                                    name="Mon compte"
                                    component={MyPassword}
                                />

                                <Redirect
                                    from="/"
                                    to="/dashboard"
                                />

                            </Switch>

                        </Container>

                    </main>

                </div>

                <Footer/>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = dispatch => ({
    setUser: (user) => {
        dispatch({type: 'SET_USER', user});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);