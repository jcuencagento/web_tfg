import React from 'react';
import { PropTypes } from 'prop-types';
import { injectIntl } from 'react-intl';
import { Grid, Header, Image, Message } from 'semantic-ui-react';

import logo from '../../assets/img/uc3m.png';

const HomeComponent = ({ browser, gotoRoute }) => {
    const handleOnClick = (route) => (e) => {
        e.preventDefault();
        gotoRoute(route);
    };

    return (
        <Grid.Column>
            <Image size={browser ? 'large' : 'medium'} src={logo} centered />
            <Header as="h1" textAlign="center">
                Comparador de APIs de reconocimiento de imágenes
                <Header.Subheader>Javier Cuenca Gento UC3M</Header.Subheader>
            </Header>
            <Button onClick={handleOnClick('/survey')}>Empezar encuesta</Button>
            <Message compact>
                Se da la opción de finalizar la encuesta en cualquier momento.
            </Message>
            <Button onClick={handleOnClick('/upload')}>Prueba la API con tu propia imagen</Button>
            <Message compact>
                Ninguna imagen es guardada por la aplicación.
            </Message>
        </Grid.Column>
    );
};

HomeComponent.propTypes = {
    browser: PropTypes.bool,
    gotoRoute: PropTypes.func
};

export default injectIntl(HomeComponent);