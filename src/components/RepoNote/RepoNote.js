import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

import Message from '../Common/Message';

const styles = {
    repoNoteLabel: {
        fontSize: 1.175 + "rem"
    }
};

// Singular repository note component
@Radium
class RepoNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            note: localStorage.getItem(this.props.username + this.props.repositoryName)
            || '',
            saveDisabled: true,
            exportDisabled: true,
            showSuccessMessage: false,
            exportSuccessMessage: false
        };
    }

    // Enables export button if note had been pre-filled
    componentDidMount() {
        if (this.state.note !== '') {
            this.setState({ exportDisabled: false });
        }
    }

    // Handles textarea change event, saves value to state variable
    handleChange = (e) => {
        this.setState({ saveDisabled: false });
        this.setState({ note: e.target.value });
    }

    // Sets local storage variable using concatenated username and repository name to
    // ensure no collisions occur when using multiple accounts, saves textarea value
    // and enables export button
    saveNote = (e) => {
        localStorage.setItem(this.props.username + this.props.repositoryName, this.state.note);
        this.setState({ exportDisabled: false });

        this.setState({ showSuccessMessage: true });
        setTimeout(() => {
            this.setState({ showSuccessMessage: false });
        }, 3000);
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

        this.setState({ exportSuccessMessage: true });
        setTimeout(() => {
            this.setState({ exportSuccessMessage: false });
        }, 3000);
    }

    render() {
        return (
            <section className="repo-note-container">
                <div className="field"
                    id={`${this.props.repositoryName}Field`}>
                    <label htmlFor={`${this.props.username}${this.props.repositoryName}InputLabel`}
                        style={styles.repoNoteLabel}>
                        {this.props.repositoryName}
                    </label>
                    <textarea id={`${this.props.username}${this.props.repositoryName}InputTextarea`}
                        value={this.state.note}
                        onChange={this.handleChange} cols="30" rows="5"
                        placeholder="Enter notes here...">
                    </textarea>

                    {this.state.showSuccessMessage ?
                        <Message kind="primary" text="Successfully saved!" /> : null}

                    {this.state.exportSuccessMessage ?
                        <Message kind="primary" text="Successfully exported!" /> : null}

                    <div className="button-group">
                        <button id={`${this.props.username}${this.props.repositoryName}SaveButton`}
                            className="button"
                            onClick={this.saveNote}
                            disabled={this.state.saveDisabled}>Save</button>
                        <button id={`${this.props.username}${this.props.repositoryName}ExportButton`}
                            className="button"
                            onClick={this.exportNote}
                            disabled={this.state.exportDisabled}>Export</button>
                    </div>
                </div>
                <div className="section-divider"></div>
            </section>
        );
    }
}

RepoNote.propTypes = {
    repositoryName: PropTypes.string
}

export default RepoNote;