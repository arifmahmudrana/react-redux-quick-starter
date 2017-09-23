import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../constants/login'

export default (state = {}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                success: false,
                value: ''
            };

        case LOGIN_SUCCESS:
            return {
                success: true,
                value: action.payload.token
            };

        case LOGIN_FAILURE:
            return {
                success: false,
                error: action.payload,
                value: ''
            };

        default:
            return state;
    }
}