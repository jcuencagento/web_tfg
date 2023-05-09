import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Menu, Image } from 'semantic-ui-react';

import logo from '../../assets/img/uc3m.png';

class TopBarComponent extends Component {
    render() {
        const { browser } = this.props;
        return (
            <Menu icon="labeled" fixed="top" size={browser ? 'large' : 'small'} inverted>
                <Menu.Item
                    className="topbar__header"
                    as="a"
                    header>
                    <Image size={browser ? 'small' : 'tiny'} src={logo} />
                </Menu.Item>
            </Menu>
        );
    }
}

TopBarComponent.propTypes = {
    browser: PropTypes.bool,
    gotoRoute: PropTypes.func
};

export default TopBarComponent;