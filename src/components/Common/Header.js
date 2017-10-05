import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

let header = css({
    'backgroundColor': '#FFB400'
});

let headerWrapper = css({
    paddingLeft: 'calc(1rem + .5vw)',
    paddingRight: 'calc(1rem + .5vw)'
});

let headerText = css({
    color: '#474744'
});

let subHeaderText = css({
    fontSize: '1.1rem',
    marginTop: '-1em'
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="header padding-vertical-xl" {...header}>
                <div {...headerWrapper}>
                    <h1 {...headerText}>
                        RepoNotes
                        <span>
                            {this.props.username &&
                                ` for ${this.props.username}`}
                        </span>
                    </h1>
                    <p {...css(headerText, subHeaderText) }>
                        Offline-capable, locally persisted ideation assister for your GitHub repositories
                    </p>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    username: PropTypes.string
}

export default Header;