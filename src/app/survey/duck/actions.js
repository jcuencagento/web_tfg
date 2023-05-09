import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        errorClear: null
    },
    { prefix: '@@survey/' }
);

export { Creators, Types };
