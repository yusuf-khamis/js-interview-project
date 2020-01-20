import React, { Component } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateUser } from '../../store/actions/users.actions';
import { setUserUpdatingErrorAction } from '../../store/action-creators/users.action-creators';
import { dateFormat } from '../../constants';

class UserEdit extends Component {

    constructor(props) {
        super(props);

        const { selectedUser } = props;

        this.state = {
            name: selectedUser.name,
            email: selectedUser.email,
            occupation: selectedUser.occupation,
            bio: selectedUser.bio,
        };

        this.nameInputChange = this.nameInputChange.bind(this);
        this.emailInputChange = this.emailInputChange.bind(this);
        this.occupationInputChange = this.occupationInputChange.bind(this);
        this.bioInputChange = this.bioInputChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.revertUpdateSuccessful();
        this.props.revertUpdateFailed();
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

    formSubmit() {
        //
    }

    render() {
        const { selectedUser, userList } = this.props;

        const occupationList = Array.from(new Set(userList.map(item => item.occupation))).map((item, index) => {
            return <option key={index} value={item}>{item}</option>
        });

        return (
            <div>
                <h2 className="uk-heading">Edit a user</h2>
                <div className="uk-card uk-card-default">
                    <div className="uk-card-header">
                        <h3>User with ID &lt;{selectedUser.id}&gt;</h3>
                    </div>

                    <div className="uk-card-body">
                        <form className="uk-form-stacked">
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
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        userList: state.users.userList,
        selectedUser: state.users.selectedUser,
        userUpdatingError: state.users.userUpdatingError
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateUser(user, updates) {
            return dispatch(updateUser(user, updates));
        },
        updateUserError() {
            return dispatch(setUserUpdatingErrorAction(true));
        },
        revertUpdateSuccessful() {
            //
        },
        revertUpdateFailed() {
            //
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
