import { createReducer } from 'reduxsauce';

import { Types } from './actions';
import { RequestStatus } from '../../constants';

export const INITIAL_STATE = {
    err: undefined,
    uploadImageErr: undefined,
};

const errorClear = (state = INITIAL_STATE) => ({
    ...state,
    err: INITIAL_STATE.err
});

const uploadImageRequest = (state = INITIAL_STATE) => ({
    ...state,
    uploadImageStatus: RequestStatus.REQUESTING
});

const uploadImageSuccess = (state = INITIAL_STATE) => ({
    ...state,
    uploadImageStatus: RequestStatus.RESOLVED
});

const uploadImageFailure = (state = INITIAL_STATE, action) => ({
    ...state,
    uploadImageStatus: RequestStatus.RESOLVED,
    uploadImageErr: action.err
});

const uploadImageClear = (state = INITIAL_STATE) => ({
    ...state,
    uploadImageStatus: undefined,
    uploadImageErr: INITIAL_STATE.uploadImageErr
});

export const HANDLERS = {
    [Types.ERROR_CLEAR]: errorClear,
    [Types.UPLOAD_IMAGE_REQUEST]: uploadImageRequest,
    [Types.UPLOAD_IMAGE_SUCCESS]: uploadImageSuccess,
    [Types.UPLOAD_IMAGE_FAILURE]: uploadImageFailure,
    [Types.UPLOAD_IMAGE_CLEAR]: uploadImageClear
};

export default createReducer(INITIAL_STATE, HANDLERS);
