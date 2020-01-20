import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import UserList from '../user-list/user-list';
import UserEdit from '../user-edit/user-edit';
import logo from '../../logo.svg';

class App extends Component {
    
    render() {
        const { user } = this.props;

        return(
            <div id="root-component" className="uk-flex uk-flex-between uk-flex-column">
                <div>
                    <nav id="header" className="uk-navbar-container uk-navbar-transparent uk-background-secondary" uk-navbar="">
                        <div className="uk-navbar-left uk-padding-small">
                            <img className="logo" src={logo} alt="Logo" />
                        </div>
                    </nav>
                    <div className="uk-padding">
                        <Router>
                            <Switch>
                                <Route exact path="/" component={UserList} />
                                <Route exact path="/user" render={props => !!user ? <UserEdit /> : <Redirect to="/" />} />
                            </Switch>
                        </Router>
                    </div>
                </div>
                <div>
                    <nav id="footer" className="uk-navbar-container uk-navbar-transparent uk-background-secondary" uk-navbar="">
                        <div className="uk-navbar-left uk-padding">
                            <img className="logo" src={logo} alt="Logo" />
                        </div>
                    </nav>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        user: state.users.selectedUser
    };
}

export default connect(mapStateToProps)(App);