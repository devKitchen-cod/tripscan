import axios from "axios";
import {
	LOGIN,
	LOGOUT,
	SETEMAIL,
	SETNAME,
	SETPASSWORD,
	FLIGHTS,
	SETADMINKEY,
	CITY,
	AIRPORTS,
} from "./redux-types";

const start_login = () => {
	return { type: "start_req" };
};

const success_login = () => {
	return { type: "req_success" };
};

const err_login = () => {
	return { type: "err_req" };
};

const start_auth = () => {
	return { type: "start_req" };
};

const success_auth = () => {
	return { type: "req_success" };
};

const err_auth = () => {
	return { type: "err_req" };
};

export const reqLogin = (obj) => {
	return (dispatch) => {
		dispatch(start_login());
		axios({
			method: "post",
			url: "http://localhost:8080/api/auth-user-login",
			data: {
				email: obj.email,
				password: obj.password,
			},
		}).then((res) => {
			console.log(res.data);
			localStorage.setItem("token", res.data.token);
			
			const user = res.data.data_user;
			dispatch({ type: SETNAME, payload: user.name });
			dispatch({ type: SETEMAIL, payload: user.email });
			dispatch({ type: SETPASSWORD, payload: user.password });
			dispatch({ type: LOGIN, payload: true });
			dispatch({ type: SETADMINKEY, payload: user.key_admin})
		});
	};
};
// export const rendActive = () =>{

// }
export const reqAuth = (obj) => {
	return async (dispatch) => {
		console.log("as", obj);

		const res = await axios.post("http://localhost:8080/api/auth-user-create", {
			name: obj.name,
			email: obj.email,
			password: obj.password,
		});
		
		console.log(res);
		if (res.status === 200) {
			console.log("data == ", res.data);
			localStorage.setItem("token", res.data);
			dispatch({ type: SETNAME, payload: obj.name });
			dispatch({ type: SETEMAIL, payload: obj.email });
			dispatch({ type: SETPASSWORD, payload: obj.password });
			dispatch({ type: LOGIN, payload: true });
		} else {
			console.log("ERR");
		}
	};
};
export const reqGetAdmin = (obj) => {
	console.log('d', obj)
	return async (dispatch) => {
		console.log('obj = ', obj)
		const res = await axios.post('http://localhost:8080/api/getadmin', {
			key: obj.key,
			email: obj.email
		})
		// console.log('res =', res.data.key_admin)
		res.status === 200 ? (dispatch({type: SETADMINKEY, payload: res.data.key_admin})) : (console.log('err'))
	}
}

export const reqLogout = () => {
	return async (dispatch) => {
		dispatch({ type: LOGOUT, payload: false });
	};
};
export const reqGetCity = () => {
	// console.log('ded')
	return async (dispatch) => {
		console.log('ded')
		const city = await axios.get('http://localhost:8080/api/getCity')
		dispatch({ type: CITY, payload: city.data });

	}
}

export const reqGetAirports = () => {
	return async(dispatch) => {
		const airports = await axios.get('http://localhost:8080/api/getAirports')
		// console.log('countries ==', airports.data)
		dispatch({ type: AIRPORTS, payload: airports.data });
	}
}

export const reqFlights = () => {
	return async (dispatch) => {};
};

export const reqCheckToken = (obj) => {
	console.log("reqCheckToken obj = ", obj);
};

// res.status<300? localStorage.setItem("token", res.data.token): console.log("error")
