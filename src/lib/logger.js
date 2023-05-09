const LOG = 'LOG';
const ERROR = 'ERROR';
const WARN = 'WARN';
const INFO = 'INFO';
const DEBUG = 'DEBUG';

const parseMessage = (message, ...args) => {
    if (args) {
        return args.reduce((previous, current) => `${previous} ${current}`, message);
    }

    return message;
};

const logLevel = (level, message, ...args) => {
    switch (level) {
        case LOG:
            return console.log(parseMessage(message, ...args));

        case ERROR:
            return console.error(parseMessage(message, ...args));

        case WARN:
            return console.warn(parseMessage(message, ...args));

        case INFO:
            return console.info(parseMessage(message, ...args));

        case DEBUG:
            return console.debug(parseMessage(message, ...args));

        default:
            return console.log(parseMessage(message, ...args));
    }
};

export const log = (message, ...args) => logLevel(LOG, message, ...args);

export const error = (message, ...args) => logLevel(ERROR, message, ...args);

export const warn = (message, ...args) => logLevel(WARN, message, ...args);

export const info = (message, ...args) => logLevel(INFO, message, ...args);

export const debug = (message, ...args) => logLevel(DEBUG, message, ...args);
