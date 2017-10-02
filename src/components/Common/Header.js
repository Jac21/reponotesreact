import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

let header = css({
    'backgroundColor': '#FFB400'
});

let headerText = css({
    color: '#474744',
    paddingLeft: '7px'
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="header padding-vertical-xl" {...header}>
                <h1 {...headerText}>
                    RepoNotes
                    <span>
                        {this.props.username &&
                            ` for ${this.props.username}`}
                    </span>
                </h1>
            </header>
        );
    }
}

Header.propTypes = {
    username: PropTypes.string
}

export default Header;