import React from 'react';
import FeaturedPodcastsList from './FeaturedPodcastsList/FeaturedPodcastsList';

function FeaturedPodcasts({ articles }) {
    console.log(articles);
    return (
        <FeaturedPodcastsList articles={articles} />
    );
};

export default FeaturedPodcasts;