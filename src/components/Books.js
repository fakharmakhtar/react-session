import React, { Component } from 'react';

export default class Books extends Component {
    render() {
        return (
            <div>
                <h1>Books</h1>
                {this.props.books.map(book => (
                    <div>{book}</div>
                ))}
            </div>
        )
    }
}
