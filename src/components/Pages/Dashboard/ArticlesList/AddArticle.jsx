import React from 'react';
import { connect } from 'react-redux';
import { startAddArticle } from '../../../../actions/articles';
import ArticlesForm from './ArticlesForm/ArticlesForm';

export class AddArticle extends React.Component {
    onSubmit = (article) => {
        this.props.startAddArticle(article);
        this.props.history.push('/dashboard/articles');
        console.log(article);
    };
    render() {
        return (
            <div>
                <h4>Create an article</h4>
                <ArticlesForm onSubmit={this.onSubmit} />
            </div>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddArticle: (article) => dispatch(startAddArticle(article))
});

export default connect(undefined, mapDispatchToProps)(AddArticle);
