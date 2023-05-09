import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import homeReducer from '../home/duck';
import surveyReducer from '../survey/duck';
import uploadReducer from '../upload/duck';

export default history =>
    combineReducers({
        home: homeReducer,
        survey: surveyReducer,
        upload: uploadReducer,
        router: connectRouter(history)
    });
