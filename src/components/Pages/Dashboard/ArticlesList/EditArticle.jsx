import React from 'react';
import ArticleForm from './ArticleForm';
import { connect } from 'react-redux';
import { startEditArticle } from '../../../../actions/articles';

export class EditArticle extends React.Component {
    onSubmit = (article) => {
        this.props.startEditArticle(this.props.article.id, article);
        this.props.history.push('/dashboard/articles');
    };
    render() {
        return (
            <ArticleForm
                article={this.props.article}
                onSubmit={this.onSubmit}
            />
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        article: state.articles.find((article) => article.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditArticle: (id, article) => dispatch(startEditArticle(id, article))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);