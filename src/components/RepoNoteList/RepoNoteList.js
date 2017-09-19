import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RepoNote from '../RepoNote/RepoNote';

// Parent component for repo notes, maps data to each note component
// utilizing the repository name and associated ID
class RepoNoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h2>Repositories</h2>
                <div>
                    {
                        this.props.repositories &&
                        this.props.repositories.map(item =>
                            <RepoNote key={item.id} repositoryName={item.name}
                                username={this.props.username} />)
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