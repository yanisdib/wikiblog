import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedPodcastsListItems({ title, subtitle, imageUrl, permalink }) {
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="preview-featured-podcasts col-3 pl-3 pr-3">
            <Link to={`/view/${permalink}`}>
                <div className="featured-podcasts-items h-70" style={backgroundStyle}>
                    {/* <img src="" alt="play-podcast" title="Lancer le podcast" /> */}
                </div>
            </Link>
        </div>
    );
};

export default FeaturedPodcastsListItems;