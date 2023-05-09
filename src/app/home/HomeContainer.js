import { connect } from 'react-redux';

import { homeOperations } from './duck';
import HomeComponent from './HomeComponent';

const mapStateToProps = state => ({
    browser: state.home.browser
});

const mapDispatchToProps = dispatch => ({
    gotoRoute: pathname => dispatch(homeOperations.gotoRoute(pathname))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);