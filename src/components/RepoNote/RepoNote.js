import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({});

class RepoNote extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div class="field">
                <label for="input-textarea">{this.props.repoName}</label>
                <textarea id="input-textarea" cols="30" rows="5" placeholder="Textarea text"></textarea>
                <button>Save</button>
            </div>
        );
    }
}

RepoNote.propTypes = {
    classes: PropTypes.object.isRequired
}

export default RepoNote;