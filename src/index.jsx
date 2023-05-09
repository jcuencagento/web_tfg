import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

// Import Semantic UI
import './assets/semantic/semantic.less';
import './assets/css/app.css';
import './assets/img/eye.ico';
import './assets/img/favicon.ico';

import createRootStore from './app/duck';
import App from './app/App';

const history = createBrowserHistory();
document.addEventListener('DOMContentLoaded', () => {
    const store = createRootStore(history);
    const rootElement = document.getElementById('root');
    console.log('En index.jsx');
    render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        rootElement
    );
});