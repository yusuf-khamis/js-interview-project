import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from 'react-data-table-component';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

import { setSelectedUserAction } from '../../store/action-creators/users.action-creators';
import { getUsers } from '../../store/actions/users.actions';
import { dateFormat } from '../../constants';

class UserList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchText: ''
        };

        this.searchTextChange = this.searchTextChange.bind(this);
    }

    componentDidMount() {
        const { users, usersFetched, getUsers } = this.props;

        if (!users.length && !usersFetched) {
            getUsers();
        }
    }

    searchTextChange(event) {
        this.setState({ searchText: event.target.value });
    }
    
    render() {
        let { selectedUser, users, selectUser, usersFetched, usersFetchingError } = this.props
        const columns = [
            {
                name: 'Name',
                selector: 'name',
                sortable: true
            },
            {
                name: 'Email',
                selector: 'email',
                sortable: true
            },
            {
                name: 'Occupation',
                selector: 'occupation',
                sortable: true
            },
            {
                name: 'Actions',
                cell: item => (
                    <button
                        onClick={() => selectUser(item)}
                        className="uk-button uk-button-primary uk-button-small uk-text-capitalize uk-margin-small-right"
                        uk-tooltip="Click to view user information on the right side panel">View
                    </button>
                )
            }
        ];

        const filteredUsers = users.filter(single => {
            const lowerCasedSearch = this.state.searchText.toLowerCase();
            
            return (single.name.toLowerCase().indexOf(lowerCasedSearch) +
                single.email.toLowerCase().indexOf(lowerCasedSearch) +
                single.bio.toLowerCase().indexOf(lowerCasedSearch) +
                single.occupation.toLowerCase().indexOf(lowerCasedSearch)) >= 0
        });

        const TableComponent = () => (
            <div className="uk-grid-medium" uk-grid="">
                    <div className="uk-width-2-3">
                    <input type="text" value={this.state.searchText} onChange={this.searchTextChange} autoFocus className="uk-input uk-input-small" placeholder={'Search ' + users.length + ' users by name, email, bio and occupation'} />
                        <DataTable
                            noHeader={true}
                            columns={columns}
                            pagination={true}
                            paginationRowsPerPageOptions={[10,20,30,50]}
                            defaultSortField="id"
                            striped={true}
                            data={filteredUsers} />
                    </div>
                    <div className="uk-width-expand">
                        <div className="uk-card uk-card-small uk-card-default">
                            <div className="uk-card-header">
                                <h3 className="uk-card-title">View selected user information</h3>
                            </div>
                            {
                                selectedUser ?
                                <div className="uk-card-body">
                                    <p className="uk-text-bold uk-margin-remove-bottom">Name:</p>
                                    <p className="uk-text-muted uk-margin-remove-top">{selectedUser.name}</p>
                                    
                                    <p className="uk-text-bold uk-margin-remove-bottom">Email:</p>
                                    <p className="uk-text-muted uk-margin-remove-top">{selectedUser.email}</p>
                                    
                                    <p className="uk-text-bold uk-margin-remove-bottom">Occupation:</p>
                                    <p className="uk-text-muted uk-margin-remove-top">{selectedUser.occupation}</p>
                                    
                                    <p className="uk-text-bold uk-margin-remove-bottom">Bio:</p>
                                    <p className="uk-text-muted uk-margin-remove-top">{selectedUser.bio}</p>
                                    
                                    <p className="uk-text-bold uk-margin-remove-bottom">Created At:</p>
                                    <p className="uk-text-muted uk-margin-remove-top">{moment(selectedUser.created_at).format(dateFormat)}</p>
                                    
                                    <p className="uk-text-bold uk-margin-remove-bottom">Updated At:</p>
                                    <p className="uk-text-muted uk-margin-remove-top">{moment(selectedUser.updated_at).format(dateFormat)}</p>

                                    <Link to="/user" className="uk-button uk-button-secondary uk-margin">Edit</Link>
                                </div>
                                :
                                <div className="uk-card-body uk-flex uk-flex-middle uk-flex-center">
                                    <p className="uk-text-muted">No user selected</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
        );

        return (
            <div id="viewing">
                <h2 className="uk-heading">View and manage users</h2>
                { !usersFetched &&
                    <div className="uk-flex uk-flex-center uk-margin-medium">
                        <div uk-spinner="ratio: 3" />
                    </div>
                }

                {
                    usersFetched && usersFetchingError &&
                    <div className="uk-alert-danger" uk-alert="">
                        <p>This was not supposed to happen. Sometimes when an error occurs, user always blames the developer. So before you do that, try to make sure the problem is not on your side first!</p>
                        <p>Try refreshing this page also to see if the problem goes away.</p>
                    </div>
                }

                {
                    usersFetched && !usersFetchingError &&
                    <div>
                        <h4 className="uk-heading">{'Showing ' + users.length + ' users'}</h4>
                        <TableComponent />
                    </div>
                }
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        users: state.users.userList,
        usersFetched: state.users.usersFetched,
        usersFetchingError: state.users.usersFetchingError,
        selectedUser: state.users.selectedUser
    };
}

function matchDispatchToProps(dispatch) {
    return {
        getUsers() {
            return dispatch(getUsers());
        },
        selectUser(user) {
            return dispatch(setSelectedUserAction(user));
        }
    };
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList)