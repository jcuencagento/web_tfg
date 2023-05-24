import { error } from './logger';
const translate = require('@vitalets/google-translate-api');
const AWS = require('aws-sdk');
const { ComputerVisionClient } = require('@azure/cognitiveservices-computervision');
const { CognitiveServicesCredentials } = require('@azure/ms-rest-azure-js');

//Amazon Web Services
const aws_access_key_id = 'AKIATXTZYMA46LDSKPEM';
const aws_secret_access_key = '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';
const region_name = 'us-east-2';
AWS.config.update({
    accessKeyId: aws_access_key_id,
    secretAccessKey: aws_secret_access_key,
    region: region_name
});
const reko_client = new AWS.Rekognition();

//Google Cloud
const { ImageAnnotatorClient } = require('@google-cloud/vision');
const credentials = require('../assets/key.json');
const vision_client = new ImageAnnotatorClient({ credentials });

// Microsoft Azure
const endpoint = 'https://computer-vision-api-prueba.cognitiveservices.azure.com/';
const api_key = 'b3d63ad6b38c473982f5aca21a7ce948';
const cv_client = new ComputerVisionClient(new CognitiveServicesCredentials(api_key), endpoint);

const fetchAmazonAPI = (image) => {
    return new Promise((resolve, reject) => {
        const params = {
            Image: {
                Bytes: image // The image data in bytes or ArrayBuffer
            },
            MaxLabels: 8,
            MinConfidence: 60
        };

        reko_client.detectLabels(params, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const labels = data.Labels;
                resolve(labels);
            }
        });
    });
};

const fetchGoogleAPI = (image) => {
    return new Promise((resolve, reject) => {
        const buffer = Buffer.from(image);
        const requestImage = { content: buffer };
        vision_client
            .labelDetection(requestImage)
            .then(([google_labels]) => {
                const labels = google_labels.labelAnnotations;
                const descriptions = labels.slice(0, 5).map((label) => label.description).join(', ');
                resolve(descriptions);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const fetchAzureAPI = (image) => {
    new Promise((resolve, reject) => {
        cv_client.analyzeImage(image, {
            visualFeatures: ['Description']
        })
        .then((image_analysis) => {
            if (image_analysis.description.captions.length > 0) {
                const captions = image_analysis.description.captions;
                const first_caption = captions[0].text;
                translate(first_caption, { from: 'en', to: 'es' })
                .then((translated_caption) => {
                    resolve(translated_caption);
                })
                .catch((error) => {
                    reject(error);
                });
            } else {
                const with_tags = image_analysis.description.tags.slice(0, 3).join(', ');
                translate(with_tags, { from: 'en', to: 'es' })
                .then((translated_caption) => {
                    resolve(translated_caption);
                })
                .catch((error) => {
                    reject(error);
                });
            }
        })
        .catch((error) => {
            reject(error);
        });
    });
};

export const requestAllAPIs = (image) => {
    Promise.all([
        fetchAmazonAPI(image),
        fetchGoogleAPI(image),
        fetchAzureAPI(image)
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