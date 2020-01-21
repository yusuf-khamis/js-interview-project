import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateUser } from '../../store/actions/users.actions';
import { setUserUpdatingErrorAction, setUserUpdatingSuccessfulAction } from '../../store/action-creators/users.action-creators';

let Validator = require("fastest-validator");

class UserEdit extends Component {

    constructor(props) {
        super(props);

        const { selectedUser } = props;

        const val = new Validator();

        const schema = {
            name: { type: 'string', trim: true },
            email: { type: 'email', normalize: true },
            occupation: { type: 'string' },
            bio: { type: 'string', trim: true }
        };

        this.check = val.compile(schema);

        this.state = {
            name: selectedUser.name,
            email: selectedUser.email,
            occupation: selectedUser.occupation,
            bio: selectedUser.bio
        };

        this.nameInputChange = this.nameInputChange.bind(this);
        this.emailInputChange = this.emailInputChange.bind(this);
        this.occupationInputChange = this.occupationInputChange.bind(this);
        this.bioInputChange = this.bioInputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.updateUserSuccessful(false);
        this.props.updateUserError(false);

        window.UIkit.modal(document.getElementById('modal-success')).hide();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.userUpdatingSuccessful && this.props.userUpdatingSuccessful) {
            window.UIkit.modal(document.getElementById('modal-success')).show();
        }
    }

    nameInputChange(event) {
        this.setState({ name: event.target.value });
    }

    emailInputChange(event) {
        this.setState({ email: event.target.value });
    }

    occupationInputChange(event) {
        this.setState({ occupation: event.target.value });
    }

    bioInputChange(event) {
        this.setState({ bio: event.target.value });
    }

    formSubmit(event) {
        event.preventDefault();

        this.props.updateUserSuccessful(false);
        this.props.updateUserError(false);

        const stateClone = Object.assign({}, this.state);

        if (Array.isArray(this.check(stateClone))) {
            console.warn(this.check(stateClone));
            window.UIkit.notification({message: 'Please rectify your input(s) first!', status: 'danger'})

            return;
        }

        this.props.updateUser(this.props.selectedUser, stateClone);
    }

    render() {
        const { selectedUser, userList, userUpdatingError } = this.props;

        const occupationList = Array.from(new Set(userList.map(item => item.occupation))).map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        });

        return (
            <div>
                <h2 className="uk-heading">Edit a user</h2>
                {
                    userUpdatingError &&
                    (
                        <div className="uk-alert-danger" uk-alert="">
                            <p>Oops! An unexpected error occured while committing your updates, please try again after sometime.</p>
                        </div>
                    )
                }
                <div className="uk-card uk-card-default">
                    <div className="uk-card-header">
                        <h3>User with ID &lt;{selectedUser.id}&gt;</h3>
                    </div>

                    <div className="uk-card-body">
                        <form onSubmit={this.formSubmit} className="uk-form-stacked">
                            <div className="uk-margin">
                                <label className="uk-form-label">Name:</label>
                                <input type="text" value={this.state.name} onChange={this.nameInputChange} className="uk-input" />
                            </div>

                            <div className="uk-margin">
                                <label className="uk-form-label">Email:</label>
                                <input type="text" value={this.state.email} onChange={this.emailInputChange} className="uk-input" />
                            </div>

                            <div className="uk-margin">
                                <label className="uk-form-label">Occupation:</label>
                                <select defaultValue={selectedUser.occupation} onChange={this.occupationInputChange} className="uk-select">{occupationList}</select>
                            </div>

                            <div className="uk-margin">
                                <label className="uk-form-label">Bio:</label>
                                <textarea value={this.state.bio} onChange={this.bioInputChange} className="uk-textarea" rows="5" />
                            </div>

                            <div className="uk-margin">
                                <button type="submit" className="uk-button uk-button-secondary uk-margin-right">Update</button>
                                <Link to="/" className="uk-button uk-button-default uk-margin-left">Cancel</Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="modal-success" uk-modal="esc-close: false; bg-close: false">
                    <div className="uk-modal-dialog uk-modal-body">
                        <h2 className="uk-modal-title">Success</h2>
                        <p>User details were successfully updated!</p>
                        <p className="uk-text-right">
                            <button className="uk-button uk-button-default uk-modal-close" type="button">Edit Again</button>
                            <Link to="/" className="uk-button uk-button-primary" type="button">Back</Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        userList: state.users.userList,
        selectedUser: state.users.selectedUser,
        userUpdatingError: state.users.userUpdatingError,
        userUpdatingSuccessful: state.users.userUpdated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateUser(user, updates) {
            return dispatch(updateUser(user, updates));
        },
        updateUserError(err) {
            return dispatch(setUserUpdatingErrorAction(err));
        },
        updateUserSuccessful(done) {
            return dispatch(setUserUpdatingSuccessfulAction(done));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
