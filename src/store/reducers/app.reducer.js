import { combineReducers } from "redux";

import usersReducer from "./users.reducer";

const appReducers = combineReducers({
    users: usersReducer
});

export default appReducers;
