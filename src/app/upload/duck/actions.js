import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        errorClear: null,
        uploadImageClear: null,
        uploadImageRequest: ['image'],
        uploadImageSuccess: ['result'],
        uploadImageFailure: ['err']
    },
    { prefix: '@@upload/' }
);

export { Creators, Types };