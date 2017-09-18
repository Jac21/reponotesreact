import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RepoNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: localStorage.getItem(this.props.username + this.props.repositoryName) || ''
        };
    }

    saveNote = (e) => {
        localStorage.setItem(this.props.username + this.props.repositoryName, this.state.note);
    }

    handleChange = (e) => {
        this.setState({ note: e.target.value });
    }

    render() {
        return (
            <div className="field">
                <label htmlFor={this.props.username + this.props.repositoryName + "InputTextarea"}>
                    {this.props.repositoryName}
                </label>
                <textarea id={this.props.username + this.props.repositoryName + "InputTextarea"}
                    value={this.state.note}
                    onChange={this.handleChange} cols="30" rows="5"
                    placeholder="Enter notes here..."></textarea>
                <button id={this.props.username + this.props.repositoryName + "SaveButton"}
                    onClick={this.saveNote}>Save</button>
            </div>
        );
    }
}

RepoNote.propTypes = {
    repositoryName: PropTypes.string
}

export default RepoNote;