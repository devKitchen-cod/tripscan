
import { combineReducers } from "redux";
import { SETADMINKEY, SETEMAIL, SETNAME, SETPASSWORD } from "./redux-types";

const init_Auth ={

    email: "",
	name: "",
	password: "",
	key: ""
}

function Auth(state = init_Auth, action){
    switch (action.type) {
		case SETEMAIL: {
			return { ...state, email: action.payload };
		}
		case SETNAME: {
			return { ...state, name: action.payload };
		}
		case SETPASSWORD: {
			return { ...state, password: action.payload };
		}
		case SETADMINKEY: {
			return {...state, key: action.payload}
		}

		default:
			return state;
	}
}

export const rootReducer = combineReducers({
    auth: Auth,
})