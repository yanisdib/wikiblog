import React from 'react';
import FeaturedArticlesList from './FeaturedArticlesList/FeaturedArticlesList';

function Articles(props) {
    return (
        <FeaturedArticlesList articles={props.articles} />
    );
};

export default Articles;