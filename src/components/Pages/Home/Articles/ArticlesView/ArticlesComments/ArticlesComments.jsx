import React from 'react';
import { startAddComment } from '../../../../../../actions/comments';
import ArticlesCommentsForm from './ArticlesCommentsForm/ArticlesCommentsForm';
import { connect } from 'react-redux';


export class ArticlesComments extends React.Component {
    onSubmit = (comment) => {
        const idArticle = this.props.id;
        this.props.startAddComment(idArticle, comment);
        console.log(comment);
    };

    render() {
        const comments = this.props.comments;
        console.log(comments);
        return (
            <div id="comments">
                <div id="comments-wrapper">
                    {
                        !comments ? (<div>No comments yet...</div>) : (
                            Object.keys(comments).map(function (key, i) {
                                return (
                                    <div key={key} className={`comments-item comments-item-${i}`}>
                                        <div className="comments-title fw-600">{comments[key].title}</div>
                                        <div className="comments-body fw-300">{comments[key].body}</div>
                                        <div className="comments-username fw-500">
                                            Ecrit par {comments[key].username}
                                        </div>
                                    </div>
                                );
                            }))
                    }

                    {/* {
                        !comments ? (<div>No comments yet...</div>) : (
                            comments.map((comment, i) => {
                                console.log(comment);
                                return (
                                    <div key={comment.id} className={`comments-item comments-item-${i}`}>
                                        <div className="comments-title fw-600">{comment.title}</div>
                                        <div className="comments-body fw-300">{comment.body}</div>
                                        <div className="comments-username fw-500">
                                            Ecrit par {comment.username}
                                        </div>
                                    </div>
                                );
                            }))
                    } */}
                </div>
                <h4 className="fw-600 mb-3 mt-5">Laisser un commentaire</h4>
                <ArticlesCommentsForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};



const mapDispatchToProps = (dispatch) => ({
    startAddComment: (idArticle, comment) => dispatch(startAddComment(idArticle, comment)),
    // startGetComments: (idArticle) => dispatch(startGetComments(idArticle))
});


export default connect(undefined, mapDispatchToProps)(ArticlesComments);