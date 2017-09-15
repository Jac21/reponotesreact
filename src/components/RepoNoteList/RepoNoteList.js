import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RepoNote from '../RepoNote/RepoNote';

class RepoNoteList extends Component {
    render() {
        return (
            <div>
                <h2>Repositories</h2>
                <div>
                    {
                        this.props.repositories &&
                        this.props.repositories.map(item =>
                            <RepoNote key={item.id} repositoryName={item.name} />)
                    }
                </div>
            </div>
        );
    }
}

RepoNoteList.propTypes = {
    repositories: PropTypes.array
}

export default RepoNoteList;