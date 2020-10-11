import React from 'react';
import FeaturedArticlesListItems from './FeaturedArticlesListItems';

export function FeaturedArticlesList(props) {
    let currentCategory = props.category;
    const featuredArticles = props.articles.filter(articles =>
        (currentCategory === 'Tout' ? (articles.category !== 'Podcast') : (articles.category === currentCategory))
        && articles.isFeatured
    );

    let featuredArticle = featuredArticles.slice(0, 3).map((featuredArticle, i) => {
        return <FeaturedArticlesListItems key={featuredArticle.id} index={i} currentCategory={currentCategory} {...featuredArticle} />
    });
    console.log(featuredArticle);

    return (
        <div className="row justify-content-center h-75 m-0">{featuredArticle}</div>
    )
};

export default FeaturedArticlesList;