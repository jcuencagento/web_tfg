import { error } from './logger';

const fetchAmazonAPI = (image, token) => {
    new Promise((resolve, reject) => {
        const url = new URL();  //URL here
        opts.headers = opts.headers || {};
        opts.headers.Authorization = `Bearer ${token}`; //Authorization whatever it is

        if (opts.params) {
            if (opts.params instanceof Object || opts.params instanceof Array) {
                url.search = new URLSearchParams(opts.params);
            } else {
                url.search = new URLSearchParams(Object.assign({}, opts.params));
            }
        }

        return fetch(url, opts)
            .then(response => {
                if (response.status === 401) {
                    return response
                        .json()
                        .then(body => {
                            const err = new Error(`Request failed: ${body.msg}`);
                            err.code = '401';
                            error(err);
                            reject(err);
                        })
                        .catch(err => reject(err));
                }

                if (response.ok) {
                    const content_type = response.headers.get('content-type');
                    if (content_type && content_type.indexOf('application/json' !== -1)) {
                        return response
                            .json()
                            .then(body => resolve(body))
                            .catch(err => reject(err));
                    }

                    // If the response is not a JSON we consider it an emtpy response
                    return resolve();
                }

                return response
                    .json()
                    .then(body => {
                        const error = new Error(`Request failed: ${body.msg}`);
                        error.code = response.status;
                        reject(error);
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err))
    })
};

const fetchGoogleAPI = (image, token) => {
    new Promise((resolve, reject) => {
        const url = new URL();  //URL here
        opts.headers = opts.headers || {};
        opts.headers.Authorization = `Bearer ${token}`; //Authorization whatever it is

        if (opts.params) {
            if (opts.params instanceof Object || opts.params instanceof Array) {
                url.search = new URLSearchParams(opts.params);
            } else {
                url.search = new URLSearchParams(Object.assign({}, opts.params));
            }
        }

        return fetch(url, opts)
            .then(response => {
                if (response.status === 401) {
                    return response
                        .json()
                        .then(body => {
                            const err = new Error(`Request failed: ${body.msg}`);
                            err.code = '401';
                            error(err);
                            reject(err);
                        })
                        .catch(err => reject(err));
                }

                if (response.ok) {
                    const content_type = response.headers.get('content-type');
                    if (content_type && content_type.indexOf('application/json' !== -1)) {
                        return response
                            .json()
                            .then(body => resolve(body))
                            .catch(err => reject(err));
                    }

                    // If the response is not a JSON we consider it an emtpy response
                    return resolve();
                }

                return response
                    .json()
                    .then(body => {
                        const error = new Error(`Request failed: ${body.msg}`);
                        error.code = response.status;
                        error(error);
                        reject(error);
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err))
    })
};

const fetchAzureAPI = (image, token) => {
    new Promise((resolve, reject) => {
        const url = new URL();  //URL here
        opts.headers = opts.headers || {};
        opts.headers.Authorization = `Bearer ${token}`; //Authorization whatever it is

        if (opts.params) {
            if (opts.params instanceof Object || opts.params instanceof Array) {
                url.search = new URLSearchParams(opts.params);
            } else {
                url.search = new URLSearchParams(Object.assign({}, opts.params));
            }
        }

        return fetch(url, opts)
            .then(response => {
                if (response.status === 401) {
                    return response
                        .json()
                        .then(body => {
                            const err = new Error(`Request failed: ${body.msg}`);
                            err.code = '401';
                            error(err);
                            reject(err);
                        })
                        .catch(err => reject(err));
                }

                if (response.ok) {
                    const content_type = response.headers.get('content-type');
                    if (content_type && content_type.indexOf('application/json' !== -1)) {
                        return response
                            .json()
                            .then(body => resolve(body))
                            .catch(err => reject(err));
                    }

                    // If the response is not a JSON we consider it an emtpy response
                    return resolve();
                }

                return response
                    .json()
                    .then(body => {
                        const error = new Error(`Request failed: ${body.msg}`);
                        error.code = response.status;
                        error(error);
                        reject(error);
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err))
    })
};

export const requestAllAPIs = (image, token) => {
    Promise.all([
        fetchAmazonAPI(image, token),
        fetchGoogleAPI(image, token),
        fetchAzureAPI(image, token)
    ])
        .then(results => cb(null, transformResponsesToImageDescriptions(image, results) || []))
        .catch(err => cb(err));
};

const transformResponsesToImageDescriptions = (image, results) => {
    aws_response = results[0];
    google_response = results[1];
    azure_response = results[2];

    const image_description = {
        image_name: image,
        aws_description: aws_response,
        google_description: google_response,
        azure_description: azure_response,
        option_none: 'No me convence ninguna opción'
    };

    return image_description;
}