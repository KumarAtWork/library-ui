import React, { Component } from 'react'
import axios from 'axios'
export default class Books extends Component {
    state = {
        isLoading: true,
        books: [],
        errorMessage: ''
    }
    componentDidUpdate(prevProps) {
        console.log('update' + this.props.match.params.id);
        console.log('update' + prevProps.match.params.id);
        if (prevProps.match.params.id !== this.props.match.params.id)
            this.loadBooks();

    }
    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        const id = this.props.match.params.id;
        axios.get('http://localhost:8080/libraries/library/' + id + '/books')
            .then(res => {
                console.log('success:' + res.data);
                this.setState({
                    isLoading: false,
                    books: res.data,
                    errorMessage:''
                })
            })
            .catch(err => {
                this.setState({
                    isLoading: false,
                    books:[],
                    errorMessage: err.response.data.message
                })
            })
    }

    getView = () => {

        if (this.state.errorMessage)
            return <React.Fragment>
                    <p>Hello</p>
                  <p>{this.state.errorMessage}</p>
                </React.Fragment>
        else {
            return this.state.books.map(bk =><div>{bk.name}</div>)
        }

    }

    render() {
        return (
            <React.Fragment>
                {this.state.isLoading ? <p>loading...</p> :this.getView()}
            </React.Fragment>
        )
    }
}