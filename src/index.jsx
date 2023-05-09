import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import Semantic UI
import './assets/semantic/semantic.less';
import './assets/css/app.css';
import './assets/img/favicon.ico';

import createRootStore from './app/duck';
import App from './app/App';

document.addEventListener('DOMContentLoaded', () => {
    const store = createRootStore(history);
    const rootElement = document.getElementById('root');
    render(
        <Provider store={store}>
            <App history={history} />
        </Provider>,
        rootElement
    );
});