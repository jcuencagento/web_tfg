import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { saveState, loadState } from '../../lib/storage';
import { LoginStatus } from '../constants';
import createRootReducer from './reducers';
import createRootMiddleware from './middlewares';

const parseEnums = store => {
    const parsedStore = store;
    if (store && store.login && store.login.status && store.login.status.constructor.name !== 'EnumSymbol') {
        parsedStore.login.status = LoginStatus.enumOf(store.login.status.value);
    }

    return parsedStore;
};

export default history => {
    const finalCreateStore = composeWithDevTools(createRootMiddleware(history))(createStore);
    const store = finalCreateStore(createRootReducer(history), parseEnums(loadState()));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
            store.replaceReducer(createRootReducer(history), parseEnums(loadState()));
        });
    }

    store.subscribe(() => {
        const { login } = store.getState();
        saveState({ login: { ...login, user: { ...login.user }, err: undefined } });
    });

    return store;
};
