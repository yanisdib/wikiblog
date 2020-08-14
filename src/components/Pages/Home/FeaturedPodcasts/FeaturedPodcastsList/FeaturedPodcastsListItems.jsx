import React from 'react';
import { Link } from 'react-router-dom';

function FeaturedPodcastsListItems({ title, subtitle, imageUrl, permalink }) {
    console.log(title);
    const backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <div className="col-3 preview-ft-podcast">
            <div className="row h-100">
                <div
                    className="col-3 h-100 ft-podcast-img"
                    style={backgroundStyle}
                >
                </div>
                <div className="col-8 ft-podcast-title">
                    <Link to={`/view/${permalink}`}>
                        <h6 className="fw-500 ft-podcast-title">
                            {title}
                        </h6>
                        <h6 className="fw-300 ft-podcast-title">
                            {`${subtitle.substring(0, 50)}...`}
                        </h6>
                    </Link>
                </div>
            </div>
        </div>)
}

export default FeaturedPodcastsListItems;