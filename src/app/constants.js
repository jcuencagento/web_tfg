import { Enum } from '../lib/enum';

export const HomeStatus = new Enum({
    REQUESTING: { value: 0, description: 'Requesting' },
    RUNNING: { value: 1, description: 'Running' },
    STOPPED: { value: 2, description: 'Stopped' }
});

export const LoginStatus = new Enum({
    REQUESTING: { value: 0, description: 'Requesting' },
    LOGGED_IN: { value: 1, description: 'Logged In' },
    LOGGED_OUT: { value: 2, description: 'Logged Out' }
});