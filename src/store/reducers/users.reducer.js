import { initialUsersState } from "../states/users.state";
import { UserActions } from "../action-creators/users.action-creators";

export default function usersReducer(state = initialUsersState, action) {
    switch (action.type) {
        case UserActions.SetUsers: {
            return {
                ...state,
                userList: action.payload
            };
        }
        
        case UserActions.SetSelectedUser: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }

        case UserActions.SetUsersFetched: {
            return {
                ...state,
                usersFetched: action.payload
            };
        }

        case UserActions.SetUsersFetchingError: {
            return {
                ...state,
                usersFetchingError: action.payload
            };
        }

        case UserActions.UpdateUser: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.user.id) {
                        return {
                            ...user,
                            ...action.payload
                        };
                    }

                    return user;
                })
            };
        }

        case UserActions.UpdateUserFailed: {
            return {
                ...state,
                userUpdatingError: action.payload
            };
        }
        
        case UserActions.UpdateUserSuccessful: {
            return {
                ...state,
                userUpdated: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
