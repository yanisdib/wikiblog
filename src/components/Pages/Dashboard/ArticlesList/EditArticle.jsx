import React from 'react';
import ArticlesForm from './ArticlesForm/ArticlesForm';
import { connect } from 'react-redux';
import { startEditArticle } from '../../../../actions/articles';

export class EditArticle extends React.Component {
    onSubmit = (article) => {
        this.props.startEditArticle(this.props.article.id, article);
        this.props.history.push('/dashboard/articles');
    };
    render() {
        console.log(this.props.article)
        return (
            <ArticlesForm
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