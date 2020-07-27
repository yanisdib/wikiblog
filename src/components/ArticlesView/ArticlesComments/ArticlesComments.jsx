import React from 'react';
import { startAddComment } from '../../../actions/comments';
import ArticlesCommentsForm from './ArticlesCommentsForm/ArticlesCommentsForm';
import { startGetComments } from '../../../actions/comments';
import { connect } from 'react-redux';


export class ArticlesComments extends React.Component {
    onSubmit = (comment) => {
        const idArticle = this.props.idArticle;
        this.props.startAddComment(idArticle, comment);
        console.log(comment);
    };

    componentDidMount() {
        this.props.startGetComments(this.props.idArticle);
    }

    render() {
        const comments = this.props.comments;
        console.log(comments);
        return (
            <div id="comments">
                <div id="comments-wrapper">
                    {
                        comments.length === 0 ? (<div>No comments yet...</div>) : (
                            comments.map((comment, i) => {
                                console.log(comment.id);
                                return (
                                    <div className={`row comments-items`}>
                                        <div className="col-1">
                                            <img src="../media/images/identicon.png" className="img-fluid rounded" width="100" alt="default-avatar" />
                                        </div>
                                        <div className={`col-11 comments-item-${i}`}>
                                            <div className="comments-title fw-600">{comment.title}</div>
                                            <div className="comments-body fw-300">{comment.body}</div>
                                            <div className="comments-username fw-500">
                                                Ecrit par {comment.username}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }))
                    }
                </div>
                <h4 className="fw-600 mb-3 mt-5">Laisser un commentaire</h4>
                <ArticlesCommentsForm onSubmit={this.onSubmit} />
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddComment: (idArticle, comment) => dispatch(startAddComment(idArticle, comment)),
    startGetComments: (idArticle) => dispatch(startGetComments(idArticle))
});


export default connect(undefined, mapDispatchToProps)(ArticlesComments);