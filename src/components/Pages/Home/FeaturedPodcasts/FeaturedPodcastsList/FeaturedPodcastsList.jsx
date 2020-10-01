import React from 'react';
import FeaturedPodcastsListItems from './FeaturedPodcastsListItems';

function FeaturedPodcastsList({ articles }) {
    const featuredPodcasts = articles.filter(article => article.category === 'Podcast' && article.isFeatured);
    console.log(featuredPodcasts);
    return (
        <div className="featured-podcasts-list row h-60 m-1">
            {
                featuredPodcasts.length > 0 ? (
                    featuredPodcasts.map((featuredPodcast) => {
                        return (
                            <FeaturedPodcastsListItems key={featuredPodcast.id} {...featuredPodcast} />
                        );
                    })
                ) : (
                        <div>No podcasts available...</div>
                    )
            }
        </div>
    );
};

export default FeaturedPodcastsList;