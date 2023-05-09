import { createReducer } from 'reduxsauce';

const isBrowser = () =>
    typeof window.orientation === 'undefined' || navigator.userAgent.indexOf('IEMobile') > -1;

export const INITIAL_STATE = { browser: isBrowser() };

export default createReducer(INITIAL_STATE, HANDLERS);
