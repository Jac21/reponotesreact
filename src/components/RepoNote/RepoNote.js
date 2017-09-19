import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Singular repository note component
class RepoNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: localStorage.getItem(this.props.username + this.props.repositoryName) || '',
            exportDisabled: true
        };
    }

    // Enables export button if note had been pre-filled
    componentDidMount() {
        if (this.state.note !== '') {
            this.setState({ exportDisabled: false });
        }
    }

    // Sets local storage variable using concatenated username and repository name to
    // ensure no collisions occur when using multiple accounts, saves textarea value
    // and enables export button
    saveNote = (e) => {
        localStorage.setItem(this.props.username + this.props.repositoryName, this.state.note);
        this.setState({ exportDisabled: false });
    }

    // Creates and downloads a text file representatin of the repo note
    exportNote = (e) => {
        let blob = new Blob([this.state.note], { type: "text/plain;charset=utf-8" });

        let a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";

        let url = window.URL.createObjectURL(blob);

        a.href = url;
        a.download = `${this.props.repositoryName}RepoNote.txt`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    // Handles textarea change event, saves value to state variable
    handleChange = (e) => {
        this.setState({ note: e.target.value });
    }

    render() {
        return (
            <div className="field">
                <label htmlFor={`${this.props.username}${this.props.repositoryName}InputLabel`}>
                    {this.props.repositoryName}
                </label>
                <textarea id={`${this.props.username}${this.props.repositoryName}InputTextarea`}
                    value={this.state.note}
                    onChange={this.handleChange} cols="30" rows="5"
                    placeholder="Enter notes here..."></textarea>
                <button id={`${this.props.username}${this.props.repositoryName}SaveButton`}
                    onClick={this.saveNote}>Save</button>
                <button id={`${this.props.username}${this.props.repositoryName}ExportButton`}
                    onClick={this.exportNote} disabled={this.state.exportDisabled}>Export</button>
            </div>
        );
    }
}

RepoNote.propTypes = {
    repositoryName: PropTypes.string
}

export default RepoNote;