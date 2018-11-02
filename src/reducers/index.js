import { combineReducers } from 'redux';
 
import { SET_AUTH } from "../actions/" //Import the actions types constant we defined in our actions


let loginState = {authentication: false};
const loginReducer = (state = loginState, action) => {
    switch (action.type) {
        case SET_AUTH:
            state = {...loginState, authentication: true};
            return state;
        default:
            return state;
    }
}

// Combine all the reducers
const rootReducer = combineReducers({
    loginReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})
 
export default rootReducer;