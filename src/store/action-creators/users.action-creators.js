export const UserActions = Object.freeze({
    SetUsers: '[Users] Set users',
    SetSelectedUser: '[Users] Set selected user',
    SetUsersFetched: '[Users] Set users fetched',
    SetUsersFetchingError: '[Users] Set users fetching error',
    SetUserUpdatingError: '[Users] Set user updating error',
    UpdateUser: '[Users] update user',
    UpdateUserSuccessful: '[User] update user successful',
    UpdateUserFailed: '[Users] update user failed'
});

export function setUsersAction(users) {
    return {
        type: UserActions.SetUsers,
        payload: users
    };
}

export function setSelectedUserAction(user) {
    return {
        type: UserActions.SetSelectedUser,
        payload: user
    };
}

export function setUsersFetchedAction(fetched) {
    return {
        type: UserActions.SetUsersFetched,
        payload: fetched
    };
}

export function setUsersFetchingErrorAction(failed) {
    return {
        type: UserActions.SetUsersFetchingError,
        payload: failed
    };
}

export function setUserUpdateAction(user, values) {
    return {
        type: UserActions.UpdateUser,
        user: user,
        payload: values
    };
}

export function setUserUpdatingErrorAction(failed) {
    return {
        type: UserActions.UpdateUserFailed,
        payload: failed
    };
}

export function setUserUpdatingSuccessfulAction(done) {
    return {
        type: UserActions.UpdateUserSuccessful,
        payload: done
    };
}
