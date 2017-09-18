import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepoNote extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="field">
                <label htmlFor="input-textarea">{this.props.repositoryName}</label>
                <textarea id="input-textarea" cols="30" rows="5"
                    placeholder="Enter notes here..."></textarea>
                <button>Save</button>
            </div>
        );
    }
}

RepoNote.propTypes = {
    repositoryName: PropTypes.string
}

export default RepoNote;