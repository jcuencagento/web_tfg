import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import { TopBar, Footer, Home } from './home/';
import { Survey } from './survey/';
import { Upload } from './upload/';

const App = ({ history, pathname }) => (
    <ConnectedRouter history={history}>
        {console.log('in app.jsx')}
        <>
            <TopBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/survey" component={Survey} />
                <Route path="/upload" component={Upload} />
                <Route render={() => <div>Miss</div>} />
            </Switch>
            <Footer />
        </>
    </ConnectedRouter>
);

App.propTypes = {
    history: PropTypes.object,
    pathname: PropTypes.string
};

const mapStateToProps = state => ({
    pathname: state.router.location.pathname
});

export default hot(module)(connect(mapStateToProps, undefined)(App));