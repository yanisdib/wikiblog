import React from 'react';
import ArticleForm from './ArticleForm';
import { connect } from 'react-redux';
import { editArticle } from '../../../../actions/articles';

function EditArticle(props) {
    return (
        <ArticleForm
            article={props.article}
            onSubmit={(article) => {
                props.dispatch(editArticle(props.article.id, article));
                props.history.push('/dashboard/articles');
            }}
        />
    );
};

const mapStateToProps = (state, props) => {
    return {
        article: state.articles.find((article) => article.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditArticle);