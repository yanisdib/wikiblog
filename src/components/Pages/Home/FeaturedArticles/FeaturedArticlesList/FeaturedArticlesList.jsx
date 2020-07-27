import React from 'react';
import FeaturedArticlesListItems from './FeaturedArticlesItems';

export function FeaturedArticlesList(props) {
    const featuredArticle = props.articles.filter(article => article.category !== 'Podcast' && article.isFeatured);
    console.log(featuredArticle);
    return (
        <div className="featured-articles d-flex">
            {
                featuredArticle.length > 0 ? (
                    <div className="row h-100">
                        <div className="col-4 h-100">
                            {featuredArticle.map((article, i) => {
                                return i > 0 ? (
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

export default FeaturedArticlesList;