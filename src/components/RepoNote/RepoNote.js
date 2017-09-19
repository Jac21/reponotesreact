import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Singular repository note component
class RepoNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: localStorage.getItem(this.props.username + this.props.repositoryName) || ''
        };
    }

    // Sets local storage variable using concatenated username and repository name to
    // ensure no collisions occur when using multiple accounts, saves textarea value
    saveNote = (e) => {
        localStorage.setItem(this.props.username + this.props.repositoryName, this.state.note);
    }

    // TODO
    exportNote = (e) => { }

    // Handles textarea change event, saves value to state variable
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
                <button id={this.props.username + this.props.repositoryName + "ExportButton"}
                    onClick={this.exportNote}>Export</button>
            </div>
        );
    }
}

RepoNote.propTypes = {
    repositoryName: PropTypes.string
}

export default RepoNote;