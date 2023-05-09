import { connect } from 'react-redux';
import FooterComponent from './FooterComponent';

const mapStateToProps = state => ({
    browser: state.home.browser
});

export default connect(mapStateToProps, undefined)(FooterComponent);