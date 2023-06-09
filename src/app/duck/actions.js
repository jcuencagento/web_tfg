import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        clean: null
    },
    { prefix: '@@app/' }
);

export { Creators, Types };