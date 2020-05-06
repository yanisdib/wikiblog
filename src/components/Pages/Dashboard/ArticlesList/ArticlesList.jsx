import React from 'react';
import { Link } from 'react-router-dom';
import ArticlesListItems from './ArticlesListItems';
import getArticles from '../../../../selectors/articles';
import { connect } from 'react-redux';

function ArticlesList(props) {
    return (
        <section id="dash-articles-list">
            <Link to="/dashboard/articles/create">Create article</Link>
            {
                props.articles.length > 0 ? (
                    props.articles.map((article) => {
                        return <ArticlesListItems key={article.id} {...article} />
                    })
                ) : (<p>No articles...</p>)
            }
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: getArticles(state.articles)
    };
};

export default connect(mapStateToProps)(ArticlesList);