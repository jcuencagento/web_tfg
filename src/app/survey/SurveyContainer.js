import { connect } from 'react-redux';

import { Creators } from './duck/actions';
import { homeOperations } from '../home/duck';
import SurveyComponent from './SurveyComponent';

const mapStateToProps = state => ({
    err: state.survey.err,
    browser: state.home.browser
});

const mapDispatchToProps = dispatch => ({
    clearError: () => dispatch(Creators.errorClear()),
    gotoRoute: pathname => dispatch(homeOperations.gotoRoute(pathname))
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyComponent);