import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { surveyMiddleware } from '../survey';
import { uploadMiddleware } from '../upload';

const appMiddleware = store => next => action => {
    switch (action.type) {
        default:
            next(action);
    }
};

export default history =>
    applyMiddleware(
        appMiddleware,
        loginMiddleware,
        surveyMiddleware,
        uploadMiddleware,
        routerMiddleware(history),
        thunk
    );