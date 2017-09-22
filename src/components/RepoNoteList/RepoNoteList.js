import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';

import RepoNote from '../RepoNote/RepoNote';

const styles = {
    header: {
        margin: .5 + 'em auto' 
    },
    infoLabel: {
        position: 'absolute',
        transform: 'translate(0, 50%)'
    }
};

// Parent component for repo notes, maps data to each note component
// utilizing the repository name and associated ID
@Radium
class RepoNoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.repositories ?
                    <h2 style={styles.header}>Repositories</h2>
                    : <div style={styles.infoLabel}>
                        Enter your GitHub username above to load your repositories and start taking notes!
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