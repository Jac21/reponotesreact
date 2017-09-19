import React, { Component } from 'react';
import PropTypes from 'prop-types';

const styles = {
    headerTitle: {
        color: 'white'
    }
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <header className="header background-primary">
                <h1 style={styles.headerTitle}>
                    RepoNotes
                    {this.props.username &&
                        ` for ${this.props.username}`}
                </h1>
            </header>
        );
    }
}

Header.propTypes = {
    username: PropTypes.string
}

export default Header;