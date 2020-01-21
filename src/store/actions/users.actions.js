import { fetchUsersUrl, updateUsersUrl } from '../../constants';
import {
    setUsersAction,
    setUsersFetchedAction,
    setUsersFetchingErrorAction,
    setSelectedUserAction,
    setUserUpdateAction,
    setUserUpdatingErrorAction,
    setUserUpdatingSuccessfulAction
} from '../action-creators/users.action-creators';

export function getUsers() {
    return async dispatch => {
        try {
            const res = await fetch(fetchUsersUrl);

            if (res.status >= 400) {
                throw res;
            }
            
            const data = await res.json();
            dispatch(setUsersAction(data));
            dispatch(setUsersFetchedAction(true));
        }
        catch (err) {
            dispatch(setUsersFetchingErrorAction(true));
            dispatch(setUsersFetchedAction(true));
        }
    };
}

export function updateUser(user, updates) {
    return async dispatch => {
        try {
            const res = await fetch(updateUsersUrl.replace('{id}', user.id), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updates)
            });

            if (res.status >= 400) {
                throw res;
            }

            dispatch(setUserUpdatingSuccessfulAction(true));

            dispatch(setUserUpdateAction(user, updates));

            dispatch(setSelectedUserAction({
                ...user,
                ...updates
            }));
        } catch (err) {
            dispatch(setUserUpdatingErrorAction(true));
        }
    }
}
