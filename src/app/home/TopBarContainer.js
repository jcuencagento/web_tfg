import { connect } from 'react-redux';

import { homeOperations } from './duck';
import TopBarComponent from './TopBarComponent';

const mapStateToProps = state => ({
    browser: state.home.browser
});

const mapDispatchToProps = dispatch => ({
    gotoRoute: pathname => dispatch(homeOperations.gotoRoute(pathname))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBarComponent);