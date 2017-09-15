import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class UsernameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            repos: null
        };
    }

    onSearch = (e) => {
        e.preventDefault();

        const { value } = this.input;

        if (value === '') {
            return;
        }

        this.setState({ username: value });

        fetch('https://api.github.com/users/' + value + '/repos')
            .then(response => response.json())
            .then(result => this.onSetResult(result));
    }

    onSetResult = (result) => {
        console.log(result);
        this.setState({ repos: result });
    }

    handleClick() {
        console.log("hello there");
    }

    render() {
        return (
            <form onSubmit={this.onSearch}>
                <div className="field">
                    <input type="text" id="form-github-username"
                        placeholder="Enter your GitHub Username..." ref={node => this.input = node} />
                </div>
                <div className="field">
                    <button type="submit" className="button"
                        onClick={this.handleClick}>Get and Show Repository Data</button>
                </div>

                {
                    this.state.repos &&
                    this.state.repos.map(item => <div key={item.id}>{item.name}</div>)
                }
            </form>
        );
    }
}

export default UsernameForm;