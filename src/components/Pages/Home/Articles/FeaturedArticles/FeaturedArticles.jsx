import React from 'react';
import FeaturedArticlesListItems from './FeaturedArticlesItems';
import getArticles from '../../../../../selectors/articles';
import { connect } from 'react-redux';

export function FeaturedArticlesList(props) {
    return (
        <div className="featured-articles d-flex">
            {
                props.articles.length > 0 ? (
                    <div className="row h-100">
                        <div className="col-4 h-100">
                            {props.articles.map((article, i) => {
                                return i === 1 || i === 2 ? (
                                    <FeaturedArticlesListItems key={article.id} i={i} {...article} />
                                ) : (null);
                            })}
                        </div>
                        <div className="col-8 h-100">
                            {props.articles.map((article, i) => {
                                return i === 0 ? (
                                    <FeaturedArticlesListItems key={article.id} i={i} {...article} />
                                ) : (null);
                            })}
                        </div>
                    </div>
                ) : (<p>No articles...</p>)

            }


        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        articles: getArticles(state.articles)
    };
};

export default connect(mapStateToProps)(FeaturedArticlesList);