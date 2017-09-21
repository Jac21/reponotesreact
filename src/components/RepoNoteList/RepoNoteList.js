import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RepoNote from '../RepoNote/RepoNote';

const styles = {
    infoLabel: {
        textAlign: 'center',
        position: 'absolute',
        transform: 'translate(0, 50%)'
    }
};

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
                {this.props.repositories ?
                    <h2>Repositories</h2>
                    : <div style={styles.infoLabel}>
                        Enter your GitHub username above to load your repositories
                        </div>
                }
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