import React from 'react';
import moment from 'moment';

export default class ArticlesCommentsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.comment ? props.comment.username : '',
            title: props.comment ? props.comment.title : '',
            body: props.comment ? props.comment.body : '',
            createdAt: props.comment ? moment(props.comment.createdAt) : moment(),
            error: ''
        };
    };

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({ title }));
    };

    onBodyChange = (e) => {
        const body = e.target.value;
        this.setState(() => ({ body }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.username || !this.state.title || !this.state.body) {
            this.setState(() => ({
                error: 'Please provide a title and a comment'
            }));
            console.log(this.state.error);
        } else {
            this.setState(() => ({
                error: ''
            }));
            this.props.onSubmit({
                username: this.state.username,
                title: this.state.title,
                body: this.state.body,
                createdAt: this.state.createdAt.valueOf()
            });
            document.getElementById('comment-form').reset();
            console.log(this.state.error);
        };
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} id="comment-form">
                <div className="form-group">
                    <p className="txt-danger">{this.state.error}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="usernameInputText">Username:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="usernameInputText"
                        onChange={this.onUsernameChange}
                    />
                    <label htmlFor="titleInputText">Title:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="titleInputText"
                        onChange={this.onTitleChange}
                    />
                    <label htmlFor="commentTextarea">Comment:</label>
                    <textarea
                        className="form-control"
                        id="commentTextarea"
                        onChange={this.onBodyChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Commenter</button>
            </form>
        );
    };
};
