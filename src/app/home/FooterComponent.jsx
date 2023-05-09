import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Menu, Image, Modal } from 'semantic-ui-react';

import logo from '../../assets/img/uc3m.png';

class FooterComponent extends Component {
    state = {
        contactModalOpen: false,
        termsModalOpen: false
    };

    handleContactModalOpen = () => {
        this.setState({ contactModalOpen: true });
    };

    handleContactModalClose = () => {
        this.setState({ contactModalOpen: false });
    };

    handleTermsModalOpen = () => {
        this.setState({ termsModalOpen: true });
    };

    handleTermsModalClose = () => {
        this.setState({ termsModalOpen: false });
    };

    render() {
        const { browser } = this.props;
        const { contactModalOpen, termsModalOpen } = this.state;
        return (
            <>
                <Menu icon="labeled" fixed="bottom" size={browser ? 'large' : 'small'} inverted>
                    <Menu.Item onClick={this.handleContactModalOpen}>
                        Contacto
                    </Menu.Item>
                    <Menu.Item>
                        <Image size={browser ? 'small' : 'tiny'} src={logo} />
                    </Menu.Item>
                    <Menu.Item onClick={this.handleTermsModalOpen}>
                        Términos y Condiciones
                    </Menu.Item>
                </Menu>

                <Modal open={contactModalOpen} onClose={this.handleContactModalClose}>
                    <Modal.Header>Contacto</Modal.Header>
                    <Modal.Content>
                        Nombre: Javier Cuenca Gento
                        Email: jcuencagento@gmail.com
                        Institution: Universidad Carlos III de Madrid
                    </Modal.Content>
                </Modal>
                <Modal open={termsModalOpen} onClose={this.handleTermsModalClose}>
                    <Modal.Header>Terms & Conditions</Modal.Header>
                    <Modal.Content>
                        Lo que haya que poner
                    </Modal.Content>
                </Modal>
            </>
        );
    }
}

FooterComponent.propTypes = {
    browser: PropTypes.bool
};

export default FooterComponent;