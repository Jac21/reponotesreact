import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

class RepoNote extends Component {
    render() {
        // const { classes } = this.props;

        return (
            <div className="field">
                <label htmlFor="input-textarea">{this.props.repoName}</label>
                <textarea id="input-textarea" cols="30" rows="5" placeholder="Enter notes here..."></textarea>
                <button>Save</button>
            </div>
        );
    }
}

export default RepoNote;