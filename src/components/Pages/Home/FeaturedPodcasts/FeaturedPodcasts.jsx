import React from 'react';
import FeaturedPodcastsList from './FeaturedPodcastsList/FeaturedPodcastsList';

function FeaturedPodcasts({ articles }) {
    console.log(articles)
    return (
        <section id="featured-podcasts" className="container">
            <div className="featured-podcasts row h-100">
                <div className="col-12">
                    <div className="row h-40 p-4 pt-5">
                        <div className="col-12">
                            <h2 className="fw-500">Latest podcasts</h2>
                            <h5 className="podcasts-link">Ecouter d'autres podcasts -></h5>
                        </div>
                    </div>
                    <FeaturedPodcastsList articles={articles} />
                </div>
            </div>
        </section>
    );
};

export default FeaturedPodcasts;