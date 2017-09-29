import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

import RepoNote from '../RepoNote/RepoNote';

let header = css({
    margin: .5 + 'em auto'
})

let infoLabel = css({
    position: 'absolute',
    transform: 'translate(0, 50%)'
});

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
                    <h2 {...header}>Repositories</h2>
                    : <div {...infoLabel}>
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