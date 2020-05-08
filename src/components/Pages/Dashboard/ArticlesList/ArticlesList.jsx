import React from 'react';
import { Link } from 'react-router-dom';
import ArticlesListItems from './ArticlesListItems';
import getArticles from '../../../../selectors/articles';
import { connect } from 'react-redux';

export function ArticlesList(props) {
    return (
        <section id="d-articles-list">
            <Link to="/dashboard/articles/create">Create article</Link>
            <div className="container">
            {console.log(props.articles, props.articles.length)}
                {
                    props.articles.length > 0 ? (
                        props.articles.map((article) => {
                            return <ArticlesListItems key={article.id} {...article} />
                        })
                    ) : (<p>No articles...</p>)
                }
            </div>
        </section>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: getArticles(state.articles)
    };
};

export default connect(mapStateToProps)(ArticlesList);