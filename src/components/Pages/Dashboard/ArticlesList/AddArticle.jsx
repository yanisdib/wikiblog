import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../../../../actions/articles';
import ArticleForm from './ArticleForm';

function AddArticle(props) {
    return (
        <ArticleForm onSubmit={(article) => {
            props.dispatch(addArticle(article));
            props.history.push('/dashboard/articles');
            console.log(article);
        }} />
    );
};

export default connect()(AddArticle);
