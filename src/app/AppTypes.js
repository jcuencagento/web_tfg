import { PropTypes } from 'prop-types';

const ImageDescriptions = PropTypes.exact({
    image_name: PropTypes.string,
    AWS_description: PropTypes.string,
    Google_description: PropTypes.string,
    Azure_description: PropTypes.string,
    option_none: PropTypes.string
});

const AppTypes = {
    image_descriptions: ImageDescriptions
}

export default AppTypes;