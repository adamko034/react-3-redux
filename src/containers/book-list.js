import React, { Component } from 'react'

class BookList extends Component {
    renderList() {
        return this.props.books.map((bool) => {
            return (
                <li className="list-group-item">{book.title}</li>
            )
        })
    }
    
    render() {
        return (
            <ul className="list-group col-sm4">
                {this.renderList()}
            </u>
        )
    }
}