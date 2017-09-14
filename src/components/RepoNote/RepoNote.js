import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepoNote extends Component {
    render() {
        return (
            <div className="field">
                <label htmlFor="input-textarea">{this.props.repoName}</label>
                <textarea id="input-textarea" cols="30" rows="5" placeholder="Enter notes here..."></textarea>
                <button>Save</button>
            </div>
        );
    }
}

RepoNote.propTypes = {
    repoName: PropTypes.string
}

export default RepoNote;