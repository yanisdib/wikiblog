import React from 'react';
import FeaturedArticlesListItems from './FeaturedArticlesListItems';

export function FeaturedArticlesList(props) {
    const featuredArticles = props.articles.filter(articles => articles.category !== 'Podcast' && articles.isFeatured);
    const renderFeaturedArticles = (featuredArticles) => {
        let row = [];
        let j = 0;
        for (let i = 0; i <= 1; i++) {
            let column = [];
            if (i === 0) {
                column.push(
                    <FeaturedArticlesListItems
                        key={featuredArticles[j].id}
                        index={j}
                        {...featuredArticles[j]}
                    />
                );
                j++;
            }
            else {
                for (j; j < 4; j++) {
                    column.push(
                        <FeaturedArticlesListItems
                            key={featuredArticles[j].id}
                            index={j}
                            {...featuredArticles[j]}
                        />
                    );
                };
            };
            row.push(
                <div className="container">
                    <div className={`row row-articles-${i}`}>
                        {column}
                    </div>
                </div>
            );
        };
        return row;
    };
    return (
        renderFeaturedArticles(featuredArticles)
    )
}

export default FeaturedArticlesList;