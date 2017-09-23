import { apiMiddleware } from 'redux-api-middleware'
import {createStore, applyMiddleware, compose} from 'redux'
import reducers from '../reducers'

const enhancer = compose(
    applyMiddleware(apiMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const configureStore = (initialState) => {
    const store = createStore(reducers, initialState, enhancer)

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        )
    }

    return store
}

export default configureStore({})