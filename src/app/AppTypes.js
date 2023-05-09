import { PropTypes } from 'prop-types';

const ImageDescriptions = PropTypes.exact({
    image_name: PropTypes.string,
    aws_description: PropTypes.string,
    google_description: PropTypes.string,
    azure_description: PropTypes.string,
    option_none: PropTypes.string
});

const AppTypes = {
    image_descriptions: ImageDescriptions
}

export default AppTypes;