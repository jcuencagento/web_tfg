import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({ prefix: '@@home/' });

export { Creators, Types };
