import { RSAA } from 'redux-api-middleware'
import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS } from '../constants/login'
const API_BASE = '/api'

export default (email, password) => ({
    [RSAA]: {
        types: [ LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS ],
        endpoint: `${API_BASE}/login`,
        credentials: 'same-origin',
        body: JSON.stringify({
            email,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    }
})