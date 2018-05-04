import React, {Component} from 'react';
import {connect} from 'react-redux';

class SidebarHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="sidebar-header">
                {this.props.user &&
                <div>
                    <strong>{this.props.user.username}</strong>
                </div>
                }
            </div>
        );

    }

}

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SidebarHeader);