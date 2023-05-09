import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';
import { TopBar, Footer, Home } from './home/';

const App = () => (
    <>
        <TopBar>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route render={() => <Redirect to="/" />} />
        </Switch>
        </TopBar>
        <Footer/>
    </>
);

export default hot(module)(connect()(App));