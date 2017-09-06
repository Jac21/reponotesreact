import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

import RepoNote from '../RepoNote/RepoNote';

const styles = {

};

class RepoNoteList extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div>
                <h2>Repositories</h2>
                <div>
                    <RepoNote repoName="RepoNotes" />
                </div>
            </div>
        );
    }
}

export default RepoNoteList;