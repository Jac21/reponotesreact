import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { css } from 'glamor';

import RepoNote from '../RepoNote/RepoNote';

const header = css({
  margin: `${0.5}em auto`
});

const infoLabel = css({
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
      <React.Fragment>
        {this.props.repositories ? (
          <h2 {...header}>Repositories</h2>
        ) : (
          <div {...infoLabel}>
            Enter your GitHub username above to load your repositories and start taking notes!
          </div>
        )}
        <div>
          {this.props.repositories &&
            this.props.repositories.map(item => (
              <RepoNote
                key={item.id}
                repositoryName={item.name}
                repositoryUrl={item.html_url}
                username={this.props.username}
              />
            ))}
        </div>
      </React.Fragment>
    );
  }
}

RepoNoteList.propTypes = {
  repositories: PropTypes.array,
  username: PropTypes.string
};

export default RepoNoteList;
