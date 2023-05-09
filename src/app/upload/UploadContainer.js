import { connect } from 'react-redux';
import { homeOperations } from '../home';
import { Creators } from './duck/actions';

import UploadComponent from './UploadComponent';

const mapStateToProps = state => ({
    err: state.upload.err,
    browser: state.home.browser,
    upload_content_status: state.upload.uploadContentStatus,
    upload_content_err: state.upload.uploadContentErr
});

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(Creators.errorClear()),
    gotoRoute: pathname => dispatch(homeOperations.gotoRoute(pathname)),
    requestUploadImage: (image) =>
        dispatch(Creators.uploadImageRequest(image)),
    clearUploadImage: () => dispatch(Creators.uploadImageClear())
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadComponent);