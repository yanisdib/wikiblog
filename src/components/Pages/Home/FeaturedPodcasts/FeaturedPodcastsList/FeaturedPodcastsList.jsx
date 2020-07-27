import React from 'react';
import FeaturedPodcastsListItems from './FeaturedPodcastsListItems';

function FeaturedPodcastsList({ articles }) {
    const featuredPodcasts = articles.filter(article => article.category === 'Podcast' && article.isFeatured);
    console.log(featuredPodcasts);
    return (
        featuredPodcasts.length > 0 ? (
            <div id="ft-podcast">
                <div className="row mt-4 mb-4">
                    {
                        featuredPodcasts.map((featuredPodcast) => {
                            return (
                                <FeaturedPodcastsListItems key={featuredPodcast.id} {...featuredPodcast} />
                            );
                        })
                    }
                </div>
            </div>
        ) : (<div></div>)
    );
};

export default FeaturedPodcastsList;