import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

import Message from '../Common/Message';

const repoNoteLabel = css({
  fontSize: `${1.175}rem`,
  cursor: 'pointer'
});

const sectionDivider = css({
  height: `${1}px`,
  maxWidth: `${100}vw`,
  margin: '0 auto 1em auto',
  background: '#FFB400'
});

// Singular repository note component
class RepoNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:
        localStorage.getItem(this.props.username.toLocaleLowerCase() + this.props.repositoryName) ||
        '',
      saveDisabled: true,
      exportDisabled: true,
      copyDisabled: true,
      showSuccessMessage: false,
      exportSuccessMessage: false,
      copySuccessMessage: false
    };
  }

  // Disables export button if note had not been pre-filled,
  // copy button appearance if clipboard object doesn't exist
  componentDidMount() {
    if (this.state.note !== '') {
      this.setState({ exportDisabled: false });

      if (navigator.clipboard) {
        this.setState({ copyDisabled: false });
      }
    }
  }

  // Handles textarea change event, saves value to state variable
  handleChange = e => {
    this.setState({ saveDisabled: false });
    this.setState({ note: e.target.value });
  };

  // Sets local storage variable using concatenated username and repository name to
  // ensure no collisions occur when using multiple accounts, saves textarea value
  // and enables export button
  saveNote = () => {
    localStorage.setItem(
      this.props.username.toLocaleLowerCase() + this.props.repositoryName,
      this.state.note
    );

    if (this.state.note === '') {
      this.setState({ exportDisabled: true });
      this.setState({ copyDisabled: true });
    } else {
      this.setState({ exportDisabled: false });
      this.setState({ copyDisabled: false });
    }

    this.setState({ showSuccessMessage: true });
    setTimeout(() => {
      this.setState({ showSuccessMessage: false });
    }, 3000);
  };

  // Creates and downloads a text file representatin of the repo note
  exportNote = () => {
    const blob = new Blob([this.state.note], {
      type: 'text/plain;charset=utf-8'
    });

    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';

    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = `${this.props.repositoryName}RepoNote.txt`;
    a.click();
    window.URL.revokeObjectURL(url);

    this.setState({ exportSuccessMessage: true });
    setTimeout(() => {
      this.setState({ exportSuccessMessage: false });
    }, 3000);
  };

  // Copy note to clipboard
  // logic found here: https://codepen.io/hankchizljaw/pen/Vxpjvo
  copyNote = () => {
    navigator.clipboard.writeText(this.state.note).then(() => {
      this.setState({ copySuccessMessage: true });
      setTimeout(() => {
        this.setState({ copySuccessMessage: false });
      }, 3000);
    });
  };

  render() {
    return (
      <section className="repo-note-container">
        <div className="field" id={`${this.props.repositoryName}Field`}>
          <a
            href={`${this.props.repositoryUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            id={`${this.props.repositoryName}HtmlUrl`}
          >
            <label
              htmlFor={`${this.props.username}${this.props.repositoryName}InputLabel`}
              {...repoNoteLabel}
            >
              {this.props.repositoryName}
            </label>
          </a>
          <textarea
            id={`${this.props.username}${this.props.repositoryName}InputTextarea`}
            value={this.state.note}
            onChange={this.handleChange}
            cols="30"
            rows="5"
            placeholder="Enter notes here..."
          />

          {this.state.showSuccessMessage ? (
            <Message kind="primary" text="Successfully saved!" />
          ) : null}

          {this.state.exportSuccessMessage ? (
            <Message kind="primary" text="Successfully exported!" />
          ) : null}

          {this.state.copySuccessMessage ? (
            <Message kind="primary" text="Successfully copied to clipboard!" />
          ) : null}

          <div className="button-group">
            <button
              id={`${this.props.username}${this.props.repositoryName}SaveButton`}
              className="button"
              onClick={this.saveNote}
              disabled={this.state.saveDisabled}
            >
              Save
            </button>
            <button
              id={`${this.props.username}${this.props.repositoryName}ExportButton`}
              className="button"
              onClick={this.exportNote}
              disabled={this.state.exportDisabled}
            >
              Export
            </button>
            <button
              id={`${this.props.username}${this.props.repositoryName}CopyButton`}
              className="button"
              onClick={this.copyNote}
              disabled={this.state.copyDisabled}
            >
              Copy
            </button>
          </div>
        </div>
        <div {...sectionDivider} />
      </section>
    );
  }
}

RepoNote.propTypes = {
  repositoryName: PropTypes.string,
  repositoryUrl: PropTypes.string,
  username: PropTypes.string
};

export default RepoNote;
