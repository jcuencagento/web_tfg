import { createReducer } from 'reduxsauce';
import { Types } from './actions';

export const INITIAL_STATE = {
    err: undefined
};

const errorClear = (state = INITIAL_STATE) => ({
    ...state,
    err: INITIAL_STATE.err
});

export const HANDLERS = {
    [Types.ERROR_CLEAR]: errorClear
};

export default createReducer(INITIAL_STATE, HANDLERS);
